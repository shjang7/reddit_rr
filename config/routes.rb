Rails.application.routes.draw do
  resources :links, only: %i[create destroy index show update] do
    resources :comments, only: %i[create destroy index]
    member do
      get 'upvote', to: 'links#upvote'
      get 'downvote', to: 'links#downvote'
    end
  end
  resources :profiles, only: %i[index show]
  get '/me', to: 'profiles#me'
  post '/signup', to: 'auth#signup'
  post '/login', to: 'auth#login'

  get '*path', to: 'application#fallback_index_html', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'links#index'

  match '*unmatched', to: 'errors#not_found', via: :all
end
