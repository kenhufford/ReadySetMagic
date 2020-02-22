class CreateLeague < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name, null: false
    end
    add_reference :leagues, :user, foreign_key: true
    add_index :leagues, :name, unique: true
  end
end
