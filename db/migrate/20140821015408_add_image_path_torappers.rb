class AddImagePathTorappers < ActiveRecord::Migration
  def change
    add_column :rappers, :image_path, :string
  end
end
