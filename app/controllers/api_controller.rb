class ApiController < ApplicationController
  before_action :set_default_format

  protected

  def current_user
    @user ||= current_user!
  end

  def current_user!
    @user ||= User.find_by(id: params[:user][:id].to_i)
    unless @user
      render json: { errors: ['no user info'] }, status: 500
    end
  end

  private

  def set_default_format
    request.format = :json
  end
end
