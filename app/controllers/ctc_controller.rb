class CtcController < ApplicationController
  def index
  end

  def matching
    user_id = params[:user_id]
    @recommended_users = User.get_recommended(user_id)
  end

  def dummy_category
    render :json => Category.select('*')
  end
  def dummy_interest
    render :json => Interest.select('*')
  end
  def dummy_user
    render :json => User.select('*')
  end
  def dummy_comment
    render :json => Comment.select('*')
  end
  def dummy_request
    render :json => Request.select('*')
  end
  def dummy_special
    render :json => Special.select('*')
  end
  def dummy_question
    render :json => Question.select('*')
  end

  def fetch_interests
    my_id = params[:user_id]
    my_special = Special.where(user_id: my_id).first()
    my_special_id = my_special[:category_id]

    users_array = []
    target_interests = Interest.where(category_id: my_special_id)
    target_interests.each { |t|
        users_array << t[:user_id]
      }
    users = User.complete_select('select * from users where id in ('+users_array.join(',')+')') unless users_array.length == 0
    render :json => users if users
    render :json => [] unless users
  end

  def fetch_specialists
    my_id = params[:user_id]
    my_interest = Interest.where(user_id: my_id).first()
    my_interest_id = my_interest[:category_id]

    users_array = []
    target_specials = Special.where(category_id: my_interest_id)
    target_specials.each { |t|
        users_array << t[:user_id]
    }
    specialists = User.complete_select('select * from users where id in ('+users_array.join(',')+')') unless users_array.length == 0
    render :json => specialists if specialists
    render :json => [] unless specialists
  end
end
