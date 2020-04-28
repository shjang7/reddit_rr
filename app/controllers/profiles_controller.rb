class ProfilesController < ApiController
  before_action :find_user, only: :show

  def index
    @users = User.all
    if @users
      render json: user_info(@users), status: 200
    else
      render json: { errors: ['no users found'] }, status: 500
    end
  end

  def show
    render json: user_info(@user), status: 200
  end

  def me
    render json: user_info(@current_user), status: 200
  end

  private

  def find_user
    @user = User.find_by(id: params[:id])
    unless @user
      render json: { errors: ['user not found'] }, status: 500
    end
  end

  def user_info(user)
    user.as_json(only: %i[id username email created_at])
  end
end
