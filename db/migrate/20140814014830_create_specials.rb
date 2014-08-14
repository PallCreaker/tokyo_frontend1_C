class CreateSpecials < ActiveRecord::Migration
  def change
    create_table :specials do |t|

      t.timestamps
    end
  end
end
