require 'rails_helper'

RSpec.describe Api::V1::CommentsController, type: :controller do
  describe '#create' do
    before do
      @user = create(:user)
      @link = create(:link, user_id: @user.id)
    end

    it 'returns created' do
      login!
      post :create, params: { comment: { body: 'sample comment', link_id: @link.id }}
      status = JSON.parse(response.body)['status']
      expect(status).to eq('created')
    end
  end
end
