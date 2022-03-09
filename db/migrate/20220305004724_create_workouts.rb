class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :body
      t.string :group
      t.integer :day_id
      t.timestamps
    end
  end
end
