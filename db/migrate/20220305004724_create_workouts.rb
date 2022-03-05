class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :body
      t.string :muscle
      t.timestamps
  end
end
end
