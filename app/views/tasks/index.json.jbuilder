json.array!(@tasks) do |task|
  json.extract! task, :id, :name, :due_date
  json.url task_url(task, format: :json)
end
