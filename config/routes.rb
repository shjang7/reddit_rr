Rails.application.routes.draw do
  get 'static/index'

  resources :links, only: %i[create destroy index show update] do
    resources :comments, only: %i[create destroy index]
    member do
      post 'upvote', to: 'links#upvote'
      post 'downvote', to: 'links#downvote'
    end
  end
  resources :users, only: :create
  post '/profiles', to: 'profiles#index'
  post '/profiles/:id', to: 'profiles#show'
  post '/me', to: 'profiles#me'
  post '/login', to: 'login#login'

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'

  match '*unmatched', to: 'errors#not_found', via: :all
end
