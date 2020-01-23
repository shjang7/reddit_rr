class Api::V1::LinksController < ApiController
  def index
    @links = Link.all #.as_json(only: %i[id title url])
    render json: { links: @links }
  end
end
