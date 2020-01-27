class Api::V1::LinksController < ApiController
  include Api::V1::SessionsHelper
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

  private

  def link_params
    params.require(:link).permit(:title, :url)
  end
end
