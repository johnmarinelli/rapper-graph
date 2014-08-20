class CreateRappers < ActiveRecord::Migration
  def change
    create_table :rappers do |t|
      t.string :name
      t.integer :year
      t.string :influenced
      t.string :beef
      t.string :collaborated

      t.timestamps
    end
  end
end
