class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token, raise: false

  # def current_user
  #   @user ||= User.find_by(id: params[:user][:id].to_i)
  # end
end
