require 'rails_helper'

RSpec.feature 'Users', type: :feature do
  scenario 'delete a user and related links and comments deleted' do
    user = create(:user)
    link = user.links.build( attributes_for(:link) )
    expect(link).to be_valid()
    link.save!

    comment = user.comments.build( attributes_for(:comment, link_id: link.id) )
    expect(comment).to be_valid()
    comment.save!

    expect do
      user.destroy
    end.to change(User, :count).by(-1)
    .and change(Link, :count).by(-1)
    .and change(Comment, :count).by(-1)
  end
end
