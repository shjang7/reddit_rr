require 'rails_helper'

RSpec.feature 'Votes', type: :feature do
  scenario 'a user upvote or downvote for a post' do
    mos = create(:user)
    link = mos.links.build( attributes_for(:link) )
    expect(link).to be_valid()
    link.save!

    jen = create(:user)

    jen.likes link
    expect(link.get_upvotes.size).to be 1
    expect(jen.voted_up_on?(link)).to be true

    mos.dislikes link
    expect(link.get_upvotes.size).to be 1
    expect(link.get_downvotes.size).to be 1
    expect(mos.voted_down_on?(link)).to be true
  end
end
