class ErrorsController < ActionController::Base
  def exception
    render json: { errors: ["Internal Error"] }, status: 500
  end

  def not_found
    render json: { errors: ["Not Found"] }, status: 404
  end
end
