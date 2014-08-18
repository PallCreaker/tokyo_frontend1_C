class CreateSpecials < ActiveRecord::Migration
  def change
    create_table :specials do |t|
      t.integer :user_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end
  end
end
