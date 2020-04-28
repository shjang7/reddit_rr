module SessionsHelper
  # def login!
  #   session[:user_id] = @user.id
  #   current_user
  # end
  #
  # def remember!
  #   @user.generate_token
  #   cookies.permanent.signed[:user_id] = @user.id
  #   cookies.permanent[:remember_token] = @user.remember_token
  #   @user.update_token
  # end
  #
  # def logged_in?
  #   !current_user.nil?
  # end
  #
  # def current_user
  #   if (user_id = session[:user_id])
  #     current_user = User.find_by(id: user_id)
  #   elsif (user_id = cookies.signed[:user_id])
  #     user = User.find_by(id: user_id)
  #     if user &.authenticated?(cookies[:remember_token])
  #       login!
  #       current_user = user
  #     end
  #   end
  # end
  #
  # def current_user=(user)
  #   @current_user = user
  # end
  #
  # def authenticate_user!
  #   if !current_user
  #     render json: {
  #       status: :fail,
  #       errors: ['unauthenticated']
  #     }
  #   end
  # end
  #
  # def authorized_user!
  #   if current_user != @user
  #     render json: {
  #       status: :fail,
  #       errors: ['unauthorized']
  #     }
  #   end
  # end
  #
  # def logout!
  #   cookies.delete(:user_id)
  #   cookies.delete(:remember_token)
  #   session.delete(:user_id)
  #   current_user = nil
  # end
end
