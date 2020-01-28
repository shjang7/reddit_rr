FactoryBot.define do
  factory :link do
    user
    title { Faker::Games::LeagueOfLegends.champion }
    url { Faker::Internet.domain_name(subdomain: true, domain: "example") }
  end
end
