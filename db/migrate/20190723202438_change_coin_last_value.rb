class ChangeCoinLastValue < ActiveRecord::Migration[5.2]
  def change
    change_column :coins, :last_value, :string
  end
end
