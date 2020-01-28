require 'rails_helper'

RSpec.describe Api::V1::CommentsController, type: :controller do
  context '#create, #destroy' do
    let(:link) { create(:link, user_id: @user.id) }
    let(:comment_attr) { attributes_for(:comment, link_id: link.id) }

    before do
      @user = create(:user)
    end

    it 'fails creating comments without login' do
      post :create, params: { link: comment_attr }

      body = JSON.parse(response.body)
      expect(body).to include 'status'
      expect(body).to include 'errors'
      expect(body['status']).to eq('fail')
      expect(body['errors']).to eq('no authenticated')
    end

    it 'creates a comment and delete' do
      login!
      post :create, params: { comment: comment_attr }

      body = JSON.parse(response.body)
      expect(body).to include 'status'
      expect(body).to include 'location'
      expect(body['status']).to eq('created')

      delete :destroy, params: { id: body['location']['id'] }
      expect(JSON.parse(response.body)['status']).to eq('fail')
      expect(JSON.parse(response.body)['errors']).to eq('no authorized')

      delete :destroy, params: { id: body['location']['id'], user_id: @user.id }
      expect(JSON.parse(response.body)['status']).to eq('destroyed')
    end
  end
end
