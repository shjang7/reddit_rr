class LoginController < ApiController
  def login
    @user = User.find_by(username: login_params[:username])

    if @user&.authenticate(login_params[:password])
      render json: @user.as_json(only: :id), status: 200
    else
      render json: { msg: ['no such user', 'verify credentials and try again or signup'] }, status: 401
    end
  end

  private

  def login_params
    params.require(:login).permit(:username, :password)
  end
end
