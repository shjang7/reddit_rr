FactoryBot.define do
  factory :user do
    username { Faker::Alphanumeric.alpha(number: 4) }
    sequence(:email) { |n| "tester#{n}@example.com" }
    password { Faker::Alphanumeric.alphanumeric(number: 6) }
  end
end
