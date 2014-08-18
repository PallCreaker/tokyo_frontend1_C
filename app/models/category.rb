class Category < ActiveRecord::Base
  def self.get_children(parent_id)
    if parent_id.to_s == '0' then
      categories = Category.connection.select('select * from categories where parent_id is NULL')
      categories.each { |c|
        c['children'] = Category.connection.select('select * from categories where parent_id = '+c['id'].to_s)
      }
      categories
    else
      categories = Category.connection.select('select * from categories where parent_id = '+parent_id.to_s)
      categories.each { |c|
        c['children'] = Category.connection.select('select * from categories where parent_id = '+c['id'].to_s)
      }
      categories
    end
  end
end
