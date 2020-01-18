class UserTask < ApplicationRecord
    enum state: [:todo, :done]
    
    validates_presence_of :state, :description

    validates :user_id, presence: true, numericality: {
        only_integer: true,
        greater_than_or_equal_to: 0,
    }
end
