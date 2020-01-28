class Api::V1::LinksController < ApiController
  before_action :set_link, only: %i[edit update destroy]
  # before_action :authenticate_user!, except: [:index]

  def index
    @links = Link.all
    render json: { links: @links }
  end

  def create
    @link = current_user.links.build(link_params)

    if @link.save
      render json: {
        status: :created,
        location: @link
      }
    else
      render json: {
        status: :unprocessable_entity,
        errors: @link.errors
      }
    end
  end

  def destroy
    if @link.destroy
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

  def link_params
    params.require(:link).permit(:title, :url)
  end

  def set_link
    @link = Link.find(params[:id])
  end
end
