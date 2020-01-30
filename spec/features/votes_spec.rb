require 'rails_helper'

RSpec.feature 'Votes', type: :feature do
  scenario 'a user upvote or downvote for a post' do
    mos = create(:user)
    link = create(:link, user_id: mos.id)
    jen = create(:user)

    vote_result = link.upvote_by jen
    expect(vote_result).to be true
    expect(link.get_upvotes.size).to be 1
    expect(jen.voted_up_on?(link)).to be true

    vote_result = link.downvote_by mos
    expect(vote_result).to be true
    expect(link.get_upvotes.size).to be 1
    expect(link.get_downvotes.size).to be 1
    expect(mos.voted_down_on?(link)).to be true
    expect(link.weighted_total).to be 2
    
    expect(mos.likes link).to be true
    expect(mos.voted_up_on?(link)).to be true
    expect(link.get_upvotes.size).to be 2

    expect(jen.dislikes link).to be true
    expect(jen.voted_down_on?(link)).to be true
    expect(link.get_downvotes.size).to be 1
  end
end
