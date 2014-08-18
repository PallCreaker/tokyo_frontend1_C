class CreateReadAttrs < ActiveRecord::Migration
  def change
    create_table :read_attrs do |t|
      t.integer :user_id, null: false
      t.integer :hts_id, null: false
      t.boolean :is_read, null: false, default: false

      t.timestamps null: false
    end
  end
end
