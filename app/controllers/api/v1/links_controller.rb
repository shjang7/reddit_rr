class Api::V1::LinksController < ApiController
  before_action :set_link, except: %i[index create]
  before_action :authenticate_user!, except: %i[index show]
  before_action :find_author, only: [:destroy]
  before_action :authorized_user!, only: [:destroy]

  def index
    render json: { location: links_map }
  end

  def create
    @link = current_user.links.build(link_params)

    if @link.save
      render json: {
        status: :created,
        location: link_info,
      }
    else
      render json: {
        status: :unprocessable_entity,
        errors: @link.errors.full_messages,
      }
    end
  end

  def destroy
    if @link.destroy
      render json: {
        status: :destroyed,
      }
    else
      render json: {
        status: :fail,
        errors: ['failed delete'],
      }
    end
  end

  def show
    if @link
      render json: {
        location: link_info,
      }
    else
      render json: {
        status: :fail,
        errors: ['link not found'],
      }
    end
  end

  def upvote
    if @link.upvote_by current_user
      render json: {
        location: votes_info,
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
        location: votes_info,
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

  def votes_info
    {
      up: @link.get_upvotes.size,
      down: @link.get_downvotes.size,
      weight: @link.weighted_total,
    }
  end

  def link_info
    temp = @link.as_json
    temp['author'] = @link.user.username
    temp['votes'] = votes_info
    return temp
  end

  def links_map
    Link.all.map do |link|
      @link = link
      link_info
    end
  end
end
