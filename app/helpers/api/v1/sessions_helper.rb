module Api::V1::SessionsHelper
  def login!
    session[:user_id] = @user.id
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
        errors: 'no authenticated'
      }
    end
  end

  def authorized_user?
    @user ||= User.find(params[:user_id])
    @user == current_user
  end

  def authorized_user!
    if !params[:user_id] || !authorized_user?
      render json: {
        status: :fail,
        errors: 'no authorized'
      }
    end
  end

  def logout!
    session.clear
  end
end
