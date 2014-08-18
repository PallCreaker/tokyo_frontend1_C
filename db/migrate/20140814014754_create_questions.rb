class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :user_id, null: false
      t.integer :category_id, null: false
      t.string :content, null: false
      t.integer :status, null: false

      t.timestamps null: false
    end
  end
end
