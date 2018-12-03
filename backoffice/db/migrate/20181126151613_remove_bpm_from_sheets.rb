class RemoveBpmFromSheets < ActiveRecord::Migration[5.2]
  def change
    remove_column :sheets, :bpm, :integer
  end
end
