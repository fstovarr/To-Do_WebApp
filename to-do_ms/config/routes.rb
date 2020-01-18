Rails.application.routes.draw do
  delete "user_tasks/:id/all", to: "user_tasks#destroy_all"
  resources :user_tasks, only: [:show, :create, :update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
