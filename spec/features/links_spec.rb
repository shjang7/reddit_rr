require 'rails_helper'

RSpec.feature 'Links', type: :feature do
  scenario 'user creates a new link' do
    user = create(:user)
    new_link = user.links.build(title: 'sample link', url: 'www.example.com')
    expect(new_link).to be_valid()
  end
end
