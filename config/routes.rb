Rails.application.routes.draw do
  scope(:path => '/api/v1') do
    get 'welcome', to: 'root#welcome'
  end

  root 'root#index'
end