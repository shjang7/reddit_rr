FactoryBot.define do
  factory :user do
    username { Faker::Internet.username }
    sequence(:email) { |n| "tester#{n}@example.com" }
    password { Faker::Alphanumeric.alphanumeric(number: 6) }
  end
end
