json.extract! song, :id, :name, :bpm, :created_at, :updated_at
json.url song_url(song, format: :json)
