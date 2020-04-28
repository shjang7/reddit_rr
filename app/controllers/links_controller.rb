class LinksController < ApiController
  before_action :current_user!, except: %i[index show]
  before_action :authorized_user!, only: %i[update destroy]
  before_action :set_link, except: %i[index create]

  def show
    render json: @link, include: { get_upvotes: { only: :voter_id }, get_downvotes: { only: :voter_id } }, status: 200
  end

  def index
    @links = Link.all
    render json: @links.as_json
  end

  def create
    @link = current_user.links.build(link_params)
    connect_https

    if @link.save
      render json: @link, status: 200
    else
      render json: { error: @link.errors.full_messages }, status: 500
    end
  end

  def update
    if @link.update(link_params)
      connect_https; @link.save
      render json: @link, status: 200
    else
      render json: { error: @link.errors.full_messages }, status: 500
    end
  end

  def destroy
    if @link.destroy
      render json: {}, status: 200
    else
      render json: { error: 'failed delete' }, status: 500
    end
  end

  def upvote
    if @link.upvote_by current_user
      render json: @link, include: votes_info, status: 200
    else
      render json: { error: 'failed upvote' }, status: 500
    end
  end

  def downvote
    if @link.downvote_by current_user
      render json: @link, include: votes_info, status: 200
    else
      render json: { error: 'failed downvote' }, status: 500
    end
  end

  private

  def link_params
    params.require(:link).permit(:title, :url)
  end

  def set_link
    @link = Link.find_by(id: params[:id])
    unless @link
      render json: { error: 'no link info' }, status: 500
    end
  end

  def authorized_user!
    if @user.id != @link.user_id
      render json: { error: 'unauthorized' }, status: 500
    end
  end

  def connect_https
    temp = @link.url
    @link.url = 'https://' + temp unless temp.include?('https://') || temp.include?('http://')
  end

  def votes_info
    {
      get_upvotes: {
        only: :voter_id
      },
      get_downvotes: {
        only: :voter_id
      }
    }
  end
end
