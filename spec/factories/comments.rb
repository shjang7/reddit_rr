FactoryBot.define do
  factory :comment do
    link
    user
    body { 'sample comment' }
  end
end
