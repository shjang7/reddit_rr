class UsersController < ApiController
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user.as_json(only: :id), status: 200
    else
      render json: { errors: @user.errors.full_messages }, status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
