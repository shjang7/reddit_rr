class LoginController < ApiController
  def login
    @user = User.find_by(username: login_params[:username])

    if @user&.authenticate(login_params[:password])
      render json: @user.as_json(only: :id), status: 200
    else
      render json: { errors: ['no such user'] }, status: 500
    end
  end

  private

  def login_params
    params.require(:login).permit(:username, :password)
  end
end
