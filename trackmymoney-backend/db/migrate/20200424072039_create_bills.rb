class CreateBills < ActiveRecord::Migration[6.0]
  def change
    create_table :bills do |t|
      t.string :name
      t.integer :cost
      t.string :status
      t.date :date
    end
  end
end
