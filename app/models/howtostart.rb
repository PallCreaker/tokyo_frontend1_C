class Howtostart < ActiveRecord::Base
  def self.get_with_read_attr(author_id, category_id, reader_id)
    htses = Howtostart.connection.select('select * from howtostarts where author_id = '+author_id.to_s+' and category_id = '+category_id.to_s)
    htses.each { |h|
      read = ReadAttr.connection.select('select * from read_attrs where user_id = '+reader_id.to_s+' and hts_id = '+h['id'].to_s)[0];
      h['is_read'] = read['is_read'] if read
      h['is_read'] = false unless read
    }
    # manual join
  end
end
