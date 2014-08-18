class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.integer :comment_id, null: false
      t.integer :question_id, null: false
      t.integer :from_user_id, null: false
      t.integer :to_user_id, null: false

      t.timestamps null: false
    end
  end
end
