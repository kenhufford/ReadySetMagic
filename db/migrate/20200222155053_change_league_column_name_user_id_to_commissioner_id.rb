class ChangeLeagueColumnNameUserIdToCommissionerId < ActiveRecord::Migration[5.2]
  def change
    rename_column :leagues, :user_id, :commissioner_id
  end
end
