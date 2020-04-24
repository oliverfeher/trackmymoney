class FixBills < ActiveRecord::Migration[6.0]
  def change
    add_column :bills, :user_id, :integer
  end
end
