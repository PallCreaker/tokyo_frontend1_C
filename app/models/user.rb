class User < ActiveRecord::Base

  def self.complete_select(statement)
    users = User.connection.select(statement)
    users.each { |u|
        user_id = u['id']
        u[:specials] = Special.complete_select('select * from specials where user_id = '+user_id.to_s)
        u[:interests] = Interest.complete_select('select * from interests where user_id = '+user_id.to_s)
      }

    users
  end
end
