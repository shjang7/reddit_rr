require 'faker'

User.destroy_all

10.times do |i|
  User.create!(username: "user-#{i}", email: "user-#{i}@example.com", password: 'foobar', password_confirmation: 'foobar')
end

users = User.all

users.each_with_index do |u, i|
  (i%2 + 1).times do
    u.links.create!({ title: Faker::Hipster.sentence, url: Faker::Internet.url(host: 'example.com') })
  end
end

Link.all.each_with_index do |l, i|
  (i%10).times do |j|
    (i%2 > 0 || j%4 > 0) ? l.upvote_by(users[j]) : l.downvote_by(users[j])
  end
  users[(i+3)%10].comments.create!(body: Faker::Hipster.sentence, link_id: l.id)
end
