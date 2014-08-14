class Interest < ActiveRecord::Base
  def self.complete_select(statement)
    intrests = Interest.connection.select(statement)
    intrests.each { |i|
        category_id = i['category_id']
        i[:category] = Category.connection.select('select * from categories where id = '+category_id.to_s)
      }

    intrests
  end
end
