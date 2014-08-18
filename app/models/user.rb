class User < ActiveRecord::Base

  def self.complete_select(statement, reader_id)
    users = User.connection.select(statement)
    users.each { |u|
        author_id = u['id']
        u[:specials] = Special.complete_select('select * from specials where user_id = '+author_id.to_s ,author_id, reader_id)
        u[:interests] = Interest.complete_select('select * from interests where user_id = '+author_id.to_s)
      }

    users
  end

  def self.get_recommended(user_id)
    my_interest = Interest.where(user_id: user_id).first()
    my_interest_id = my_interest[:category_id]

    users_array = []
    target_specials = Special.where(category_id: my_interest_id)
    target_specials.each { |t|
        users_array << t[:user_id]
    }
    specialists = User.complete_select('select * from users where id in ('+users_array.join(',')+')', user_id) unless users_array.length == 0
    specialists = [] unless specialists
    specialists
  end
end
