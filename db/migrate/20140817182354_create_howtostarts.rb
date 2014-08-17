class CreateHowtostarts < ActiveRecord::Migration
  def change
    create_table :howtostarts do |t|
      t.integer :category_id,null: false
      t.integer :author_id,null: false
      t.string :first_content, null: false
      t.string :next_content, null: false

      t.timestamps null: false
    end
  end
end
