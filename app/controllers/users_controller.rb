class UsersController < ApiController
  # index, show -> only for logged in user?
  def create
    @user = User.new(user_params)
    if @user.save
      # login!
      # remember!
      # render json: @user.as_json(only: %i[id username email]), status: 200
      render json: @user.id, status: 200
    else
      render json: { msg: @user.errors.full_messages }, status: 500
    end
  end

  def index
    @users = User.all
    if @users
      render json: @users.as_json(only: %i[id username email created_at]), status: 200
    else
      render json: { msg: ['no users found'] }, status: 500
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render json: @user.as_json(only: %i[id username email created_at]), status: 200
    else
      render json: { msg: ['user not found'] }, status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
