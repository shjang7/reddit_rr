module Api::V1::SessionsHelper
  def login!
    session[:user_id] = @user.id
    current_user
  end

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authenticate_user!
    if !current_user
      render json: {
        status: :fail,
        message: 'unauthenticated'
      }
    end
  end

  def authorized_user!
    if current_user != @user
      render json: {
        status: :fail,
        message: 'unauthorized'
      }
    end
  end

  def logout!
    session.clear
  end
end
