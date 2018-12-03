Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for  :users,
              path: ''

  authenticated :user do
    root to: redirect('/dashboard'), as: :authenticated_root
  end
  root to: redirect('sign_in')
end
