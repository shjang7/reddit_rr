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

  # def authorized_user?
  #   print 'params[:user_id]', params
  #   @user ||= User.find(1)# if params[:user_id]
  #   # @user ||= User.find(params[:user_id]) if params[:user_id]
  #   # @user == current_user
  #   print 'authorized_user?', @user.id, ', cur', current_user.id, ', '
  #   @user.id == current_user.id
  # end
  #
  # def authorized_user!
  #   if !authorized_user?
  #     render json: {
  #       status: :fail,
  #       message: 'unauthorized'
  #     }
  #   end
  # end

  def logout!
    session.clear
    print current_user
  end
end
