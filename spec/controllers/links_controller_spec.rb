require 'rails_helper'

RSpec.describe Api::V1::LinksController, type: :controller do
  context 'fails without login' do
    let(:link_attr) { attributes_for(:link) }
    let(:user) { create(:user) }
    let(:link) { create(:link, user_id: user.id) }

    it 'creating links' do
      post :create, params: { link: link_attr }
      expect(parsed_result['status']).to eq('fail')
      expect(parsed_result['errors']).to eq(['unauthenticated'])
    end

    it 'delete a link' do
      delete :destroy, params: { id: link.id }
      expect(parsed_result['status']).to eq('fail')
      expect(parsed_result['errors']).to eq(['unauthenticated'])
    end

    it 'votes up' do
      post :upvote, params: { id: link.id }
      expect(parsed_result['status']).to eq('fail')
    end

    it 'votes down' do
      post :downvote, params: { id: link.id }
      expect(parsed_result['status']).to eq('fail')
    end
  end

  context 'success with login' do
    let(:link_attr) { attributes_for(:link) }
    let(:author) { create(:user) }
    let(:link) { create(:link, user_id: author.id) }

    before do
      @user = create(:user)
      login!
    end

    it 'create and delete a link' do
      post :create, params: { link: link_attr }
      expect(parsed_result['status']).to eq('created')
      expect(parsed_result['location']).to include('id')

      delete :destroy, params: { id: parsed_result['location']['id'] }
      expect(parsed_result['status']).to eq('destroyed')
    end

    it 'votes up' do
      post :upvote, params: { id: link.id }
      expect(parsed_result['status']).to eq('success')
      expect(parsed_result['weight']).to eq(1)
      expect(parsed_result['up_count']).to eq(1)
      expect(parsed_result['down_count']).to eq(0)
    end

    it 'votes down' do
      post :downvote, params: { id: link.id }
      expect(parsed_result['status']).to eq('success')
      expect(parsed_result['weight']).to eq(1)
      expect(parsed_result['up_count']).to eq(0)
      expect(parsed_result['down_count']).to eq(1)
    end
  end
end
