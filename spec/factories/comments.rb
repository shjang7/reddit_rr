FactoryBot.define do
  factory :comment do
    link_id { 1 }
    text { "" }
    user { nil }
  end
end
