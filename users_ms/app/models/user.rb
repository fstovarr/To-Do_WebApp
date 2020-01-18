class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :registerable, :recoverable, :rememberable, :validatable
  
  validates_presence_of :name
end
