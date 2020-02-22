class DropLeague < ActiveRecord::Migration[5.2]
  def change
    drop_table :league
  end
end
