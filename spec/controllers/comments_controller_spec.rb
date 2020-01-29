require 'rails_helper'

RSpec.describe Api::V1::CommentsController, type: :controller do
  context '#create, #destroy' do
    let(:link) { create(:link, user_id: @user.id) }
    let(:comment_attr) { attributes_for(:comment, link_id: link.id) }
    let(:other_user) { create(:user) }
    let(:other_comment) { create(:comment, link_id: link.id, user_id: other_user.id) }
    before { @user = create(:user) }

    it 'fails creating comments without login' do
      post :create, params: { link: comment_attr }
      expect(parsed_result['status']).to eq('fail')
      expect(parsed_result['errors']).to eq(['unauthenticated'])
    end

    it 'creates a comment and delete' do
      login!
      post :create, params: { comment: comment_attr }
      expect(parsed_result['status']).to eq('created')

      delete :destroy, params: { id: parsed_result['location']['id'] }
      expect(parsed_result['status']).to eq('destroyed')

      delete :destroy, params: { id: other_comment.id }
      expect(parsed_result['status']).to eq('fail')
      expect(parsed_result['errors']).to eq(['unauthorized'])

      logout!
      delete :destroy, params: { id: other_comment.id }
      expect(parsed_result['status']).to eq('fail')
      expect(parsed_result['errors']).to eq(['unauthenticated'])
    end
  end
end
