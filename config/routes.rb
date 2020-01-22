Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :links, only: [:index]
    end
  end
end
