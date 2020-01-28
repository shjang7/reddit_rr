FactoryBot.define do
  factory :comment do
    link_id { 1 }
    body { 'sample comment' }
    user_id { 1 }
  end
end
