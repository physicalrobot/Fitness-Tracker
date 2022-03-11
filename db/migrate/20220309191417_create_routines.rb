class CreateRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :routines do |t|
      t.string :name
      t.integer :workout_id
      t.integer :day_id
      t.timestamps
    end
  end
end
