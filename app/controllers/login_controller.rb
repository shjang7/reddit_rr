class LoginController < ApiController
  skip_before_action :authenticate_request

  def login
    command = AuthenticateUser.call(params[:username], params[:password])

    if command.success?
      render json: { token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end
