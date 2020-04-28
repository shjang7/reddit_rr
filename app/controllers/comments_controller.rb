class CommentsController < ApiController
  before_action :current_user!, except: :index
  before_action :find_comment, only: :destroy
  before_action :authorized_user!, only: :destroy

  def index
    @link = Link.find(params[:link_id])
    render json: @link.comments, status: 200
  end

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.link_id = params[:link_id]
    if @comment.save
      render json: @comment, status: 200
    else
      render json: { errors: @comment.errors.full_messages }, status: 500
    end
  end

  def destroy
    if @comment.destroy
      render json: {}, status: 200
    else
      render json: { errors: ['failed delete'] }, status: 500
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def find_comment
    @comment = Comment.find(params[:id])
  end

  def authorized_user!
    if @user.id != @comment.user_id
      render json: { errors: ['unauthorized'] }, status: 500
    end
  end
end
