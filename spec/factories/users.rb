FactoryBot.define do
  factory :user do
    username { Faker::FunnyName.two_word_name }
    sequence(:email) { |n| "tester#{n}@example.com" }
    password { Faker::Alphanumeric.alphanumeric(number: 6) }
  end
end
