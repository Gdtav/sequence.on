class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :pitch
      t.integer :time
      t.integer :length

      t.timestamps
    end
  end
end
