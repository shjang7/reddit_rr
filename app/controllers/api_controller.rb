class ApiController < ApplicationController
  before_action :set_default_format

  def fallback_index_html
    render :file => 'public/index.html'
  end

  private

  def set_default_format
    request.format = :json
  end
end
