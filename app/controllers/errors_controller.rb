class ErrorsController < ActionController::Base
  def exception
    render json: { error: "Internal Error" }, status: 500
  end

  def not_found
    render json: { error: "Not Found" }, status: 404
  end
end
