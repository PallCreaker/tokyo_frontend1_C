class Special < ActiveRecord::Base
  def self.complete_select(statement)
    specials = Special.connection.select(statement)
    specials.each { |s|
        category_id = s['category_id']
        s[:category] = Category.connection.select('select * from categories where id = '+category_id.to_s).first()
      }

    specials
  end
end
