(1..10).each do |usr|
    UserTask.create description: "Test", state: :todo, user_id: usr
end