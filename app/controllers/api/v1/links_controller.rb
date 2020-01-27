class Api::V1::LinksController < ApiController
  def index
    @links = Link.all
    render json: { links: @links }
  end
end
