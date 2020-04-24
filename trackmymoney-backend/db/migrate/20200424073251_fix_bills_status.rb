class FixBillsStatus < ActiveRecord::Migration[6.0]
  def change
    change_column :bills, :status, :string, :default => "unpaid"
  end
end
