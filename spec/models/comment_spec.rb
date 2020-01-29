require 'rails_helper'

RSpec.describe Comment, type: :model do
  context 'with no user' do
    it 'fail at create' do
      comment = Comment.new( attributes_for(:comment) )
      expect(comment).to be_invalid
    end
  end

  context 'with user' do
    let(:user) { create(:user) }
    let(:link) { create(:link, user_id: user.id) }

    it 'is valid, create, and destroy' do
      comment = user.comments.build( attributes_for(:comment, link_id: link.id) )
      expect(comment).to be_valid
      comment.save!
      expect do
        delete_comment = comment.destroy
      end.to change(Comment, :count).by(-1)
    end

    it 'is invalid with blank body' do
      comment = user.comments.build( attributes_for(:comment, link_id: link.id, body: '') )
      expect(comment).to be_invalid
    end
  end
end
