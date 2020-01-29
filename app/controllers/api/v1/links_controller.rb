class Api::V1::LinksController < ApiController
  before_action :set_link, only: %i[edit update destroy show]
  before_action :authenticate_user!, only: [:create]
  before_action :find_author, only: [:destroy]
  before_action :authorized_user?, only: [:destroy]

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
        errors: @link.errors.full_messages
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
        status: :fail,
        message: 'failed delete'
      }
    end
  end

  def show
    if @link
      render json: {
        link: @link
      }
    else
      render json: {
        status: 500,
        errors: ['link not found']
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

  def find_author
    @user = @link.user
  end
end
