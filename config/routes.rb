Rails.application.routes.draw do
  get 'static/index'
  
  namespace :api do
    namespace :v1 do
      resources :links, only: [:index]
      resources :users, only: %i[create show index]

      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
      post '/logged_in', to: 'sessions#is_logged_in?'
    end
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
