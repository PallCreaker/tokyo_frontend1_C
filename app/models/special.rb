class Special < ActiveRecord::Base
  def self.complete_select(statement, author_id, reader_id)
    specials = Special.connection.select(statement)
    specials.each { |s|
        category_id = s['category_id']
        s[:category] = Category.connection.select('select * from categories where id = '+category_id.to_s).first()
        s[:how_to_start] = Howtostart.get_with_read_attr(author_id, category_id, reader_id)
      }

    specials
  end
end
