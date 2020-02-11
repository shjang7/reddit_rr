class Api::V1::CommentsController < ApiController
  before_action :authenticate_user!, only: %i[create destroy]
  before_action :find_comment, only: [:destroy]
  before_action :find_author, only: [:destroy]
  before_action :authorized_user!, only: [:destroy]

  def index
    @link = Link.find(params[:link_id])
    @comments = @link.comments
    render json: { comments: comments_map }
  end

  def create
    @link = Link.find(comment_params[:link_id])
    @comment = @link.comments.new(comment_params)
    @comment.user = current_user

    if @comment.save
      render json: {
        status: :created,
        location: comment_info
      }
    else
      render json: {
        status: :unprocessable_entity,
        errors: @comment.errors.full_messages
      }
    end
  end

  def destroy
    if @comment.destroy
      render json: {
        status: :destroyed
      }
    else
      render json: {
        status: :fail,
        errors: ['failed delete']
      }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :link_id)
  end

  def find_comment
    @comment = Comment.find(params[:id])
  end

  def find_author
    @user = @comment.user
  end

  def comment_info
    temp = @comment.as_json
    temp['author'] = @comment.user.username
    return temp
  end

  def comments_map
    Comment.all.map do |comment|
      @comment = comment
      comment_info
    end
  end
end
