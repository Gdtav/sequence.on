class CreateSheets < ActiveRecord::Migration[5.2]
  def change
    create_table :sheets do |t|
      t.integer :bpm
      t.integer :instrument

      t.timestamps
    end
  end
end
