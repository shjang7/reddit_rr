class Api::V1::LinksController < ApiController
  before_action :set_link, except: %i[index create]
  before_action :authenticate_user!, except: %i[index show]
  before_action :find_author, only: [:destroy]
  before_action :authorized_user!, only: [:destroy]

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
        errors: ['failed delete']
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
        status: :fail,
        errors: ['link not found']
      }
    end
  end

  def upvote
    if @link.upvote_by current_user
      render json: {
        status: :success,
        weight: @link.weighted_total,
        up_count: @link.get_upvotes.size,
        down_count: @link.get_downvotes.size
      }
    else
      render json: {
        status: :fail,
      }
    end
  end

  def downvote
    if @link.downvote_by current_user
      render json: {
        status: :success,
        weight: @link.weighted_total,
        up_count: @link.get_upvotes.size,
        down_count: @link.get_downvotes.size
      }
    else
      render json: {
        status: :fail,
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
