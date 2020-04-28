Rails.application.routes.draw do
  get 'static/index'

  resources :comments, only: %i[create destroy]
  resources :links, only: %i[create destroy index show update] do
    resources :comments, only: %i[index]
    member do
      post 'upvote', to: 'links#upvote'
      post 'downvote', to: 'links#downvote'
    end
  end
  resources :users, only: %i[create show index]
  post '/login', to: 'login#login'

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'

  match '*unmatched', to: 'errors#not_found', via: :all
end
