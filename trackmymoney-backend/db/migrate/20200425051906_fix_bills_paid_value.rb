class FixBillsPaidValue < ActiveRecord::Migration[6.0]
  def change
    remove_column :bills, :paid
    add_column :bills, :paid, :boolean, default: false
  end
end
