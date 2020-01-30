Rails.application.routes.draw do
  get 'static/index'

  namespace :api do
    namespace :v1 do
      resources :comments, only: %i[create destroy]
      resources :links, only: %i[create destroy index show] do
        resources :comments, only: %i[index]
        member do
          put 'upvote', to: 'links#upvote'
          put 'downvote', to: 'links#downvote'
        end
      end
      resources :users, only: %i[create show index]
    end
  end
  post '/login', to: 'api/v1/sessions#create'
  delete '/logout', to: 'api/v1/sessions#destroy'
  get '/logged_in', to: 'api/v1/sessions#is_logged_in?'

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
