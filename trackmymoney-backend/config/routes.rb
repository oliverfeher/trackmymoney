Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get '/users/:id', to: 'users#show'
      get '/users', to: 'users#index'
      resource :users, only: [:update, :create]
      post "/login", to: "sessions#new"
      post "/logout", to: "sessions#destroy"
    end
  end
end
