class CtcController < ApplicationController
  def index
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
end
