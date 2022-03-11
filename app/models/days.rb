class Day < ActiveRecord::Base
  has_many :routines
  has_many :workouts, through: :routines 
    
end