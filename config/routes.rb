Rails.application.routes.draw do

  root 'api/messages#index'

  namespace :api do
    resources :messages
  end
  
end