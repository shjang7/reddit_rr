Rails.application.routes.draw do
  get 'static/index'
  namespace :api do
    namespace :v1 do
      resources :links, only: [:index]
    end
  end

  root 'static#index'
end
