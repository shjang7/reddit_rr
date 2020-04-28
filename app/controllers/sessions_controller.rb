class SessionsController < ApiController
  def create
    @user = User.find_by(username: session_params[:username])

    if @user&.authenticate(session_params[:password])
      login!
      remember!
      render json: {
        status: 201,
        logged_in: true,
        user: @user.as_json(only: %i[id username email])
      }
    else
      render json: {
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user.as_json(only: %i[id username email])
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end

  private

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
