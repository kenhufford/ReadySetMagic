class CreateLeagueTable < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name, null: false
    end
    add_foreign_key :leagues, :users
    add_index :league, :name, unique: true
  end
end
