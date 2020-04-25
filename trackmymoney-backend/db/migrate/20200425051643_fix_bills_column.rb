class FixBillsColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :bills, :status
    add_column :bills, :paid, :boolean, default: "false"
  end
end
