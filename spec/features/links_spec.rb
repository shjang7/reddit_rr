require 'rails_helper'

RSpec.feature 'Comments', type: :feature do
  scenario 'user creates a new comment' do
    user = create(:user)
    link = create(:link, user_id: user.id)
    new_comment = user.comments.build(body: 'sample comment', link_id: link.id)
    expect(new_comment).to be_valid()
  end
end
