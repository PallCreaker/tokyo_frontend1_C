class LoginController < ApplicationController
  def index
  end

  def next
    parent_cate_id = params[:category_id]
    @categories = Category.get_children parent_cate_id
  end

  def last
  end
end
