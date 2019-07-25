Rails.application.routes.draw do
  root to: 'home#index'

  post 'simulate', to: 'home#simulate'
end
