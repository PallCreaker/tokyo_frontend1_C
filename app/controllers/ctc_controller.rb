class CtcController < ApplicationController
  def index
    @user = User.complete_select("select * from users where id = "+params[:user_id].to_s, params[:user_id]).first()
  end

  def matching
    user_id = params[:user_id]
    @recommended_users = User.get_recommended(user_id)
  end

  def matching_json
    user_id = params[:user_id]
    @recommended_users = User.get_recommended(user_id)
    render :json => @recommended_users
  end

  def notification

  end

  def question

  end

  def questions

  end

  def create
    # render :nothing => true
    @category = params[:category] unless params[:category].nil?
    @user = User.new(fb_name: 'fujitakazumasa')

    if @user.save then
        Interest.new(user_id: @user.id, category_id: @category.to_i).save
        render :json => @user
    else
      render :json => @user.errors
    end
  end

  def submit_hts
    @user_id = params[:user_id] unless params[:user_id].nil?
    @hts_id = params[:hts_id] unless params[:hts_id].nil?
    @title = params[:title] unless params[:title].nil?
    @category_id = params[:category_id] unless params[:category_id].nil?
    @content = params[:content] unless params[:content].nil?
    @read = ReadAttr.create(user_id: @user_id.to_i, hts_id: @hts_id.to_i,is_read: true)
    @read.save
    @hts = Howtostart.create(category_id: @category_id.to_i, author_id: @user_id.to_i, title: @title, content: @content)

    if @hts.save
      render :json => @hts
    else
      render :json => @hts.errors
    end
  end

  def create_read
    @user_id = params[:user_id] unless params[:user_id].nil?
    @hts_id = params[:hts_id] unless params[:hts_id].nil?
    @read = ReadAttr.create(user_id: @user_id.to_i, hts_id: @hts_id.to_i,is_read: true)

    if @read.save then
      render :json => @read
    else
      render :json => @read.errors
    end
  end

  def get_leaves
    render :json => Category.get_leaves
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
  private
    def ctc_params
      params.require(:data).permit(:category)
    end
end
