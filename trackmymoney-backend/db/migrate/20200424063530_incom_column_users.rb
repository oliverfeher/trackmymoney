class IncomColumnUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :income, :integer
  end
end
