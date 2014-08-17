class Special < ActiveRecord::Base
  def self.complete_select(statement, user_id = nil)
    specials = Special.connection.select(statement)
    specials.each { |s|
        category_id = s['category_id']
        s[:category] = Category.connection.select('select * from categories where id = '+category_id.to_s).first()
        s[:how_to_start] = Howtostart.connection.select('select * from howtostarts where author_id = '+user_id.to_s+' and category_id = '+category_id.to_s)
      }

    specials
  end
end
