class RenamefirstcontentTohowtostarts < ActiveRecord::Migration
  def change
    rename_column :howtostarts, :first_content, :title
    rename_column :howtostarts, :next_content, :content
  end
end
