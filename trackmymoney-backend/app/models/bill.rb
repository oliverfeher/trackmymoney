class Bill < ApplicationRecord
    belongs_to :user
    validates :cost, presence: true
    validates :name, presence: true
    validates :date, presence: true
end