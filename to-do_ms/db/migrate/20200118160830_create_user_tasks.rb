class CreateUserTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :user_tasks do |t|
      t.string :description, null: false
      t.integer :state, null: false, default: 0
      t.integer :user_id, null: false, index: true

      t.timestamps
    end
  end
end
