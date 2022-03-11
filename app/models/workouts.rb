class Workout < ActiveRecord::Base
has_many :routines
has_many :days, through: :routines
    
end