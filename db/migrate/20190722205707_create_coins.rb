class CreateCoins < ActiveRecord::Migration[5.2]
  def change
    create_table :coins do |t|
      t.string :name
      t.string :code
      t.string :full_name
      t.integer :last_value

      t.timestamps
    end
  end
end
