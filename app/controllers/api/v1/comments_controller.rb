class Api::V1::CommentsController < ApiController
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
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :link_id)
  end
end
