class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.integer :parent_id
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
