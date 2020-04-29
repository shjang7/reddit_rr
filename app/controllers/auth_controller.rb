class AuthController < ApiController
  skip_before_action :authenticate_request

  def signup
    @user = User.new(auth_params)
    if @user.save
      login!(auth_params[:username], auth_params[:password])
    else
      render json: { errors: @user.errors.full_messages }, status: 500
    end
  end

  def login
    login!(auth_params[:username], auth_params[:password])
  end

  private

  def login!(username, password)
    command = AuthenticateUser.call(username, password)
    if command.success?
      render json: { token: command.result }, status: 200
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def auth_params
    params.require(:user).permit(:username, :email, :password)
  end
end
