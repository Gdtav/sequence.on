Rails.application.routes.draw do
  resources :songs
  resources :sheets
  resources :notes
  get 'dashboard/index'
  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
