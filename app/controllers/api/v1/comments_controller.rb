class Api::V1::CommentsController < ApiController
  before_action :authenticate_user!, only: %i[create destroy]
  before_action :find_comment, only: [:destroy]
  before_action :find_author, only: [:destroy]
  before_action :authorized_user?, only: [:destroy]

  def index
    @comments = Comment.all
    render json: { comments: @comments }
  end

  def create
    @link = Link.find(comment_params[:link_id])
    @comment = @link.comments.new(comment_params)
    @comment.user = current_user

    if @comment.save
      render json: {
        status: :created,
        location: @comment
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
        message: 'failed delete'
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
end
