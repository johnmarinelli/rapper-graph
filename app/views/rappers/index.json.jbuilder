json.array!(@rappers) do |rapper|
  json.extract! rapper, :id, :name, :year, :influenced, :beef, :collaborated
  json.url rapper_url(rapper, format: :json)
end
