Rails.application.routes.draw do
  get 'launch/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "launch#index"
end
