class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.string :content, null: false

      t.timestamps null: false
    end
  end
end
