class Rapper < ActiveRecord::Base
  validates :name, presence: true, length: { minimum: 2 }
  validates :year, presence: true, length: { minimum: 4 }
end
