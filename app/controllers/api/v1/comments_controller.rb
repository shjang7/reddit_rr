class Api::V1::CommentsController < ApiController
  before_action :authenticate_user!, only: [:create]
  before_action :authorized_user!, only: [:destroy]

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
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: {
        status: :destroyed
      }
    else
      render json: {
        head: :no_content
      }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :link_id)
  end
end
