require 'rails_helper'

RSpec.describe Api::V1::LinksController, type: :controller do
  context '#create, #destroy' do
    let(:link_attr) { attributes_for(:link) }
    let(:other_user) { create(:user) }
    let(:other_link) { create(:link, user_id: other_user.id) }
    before { @user = create(:user) }

    it 'fails creating links without login' do
      post :create, params: { link: link_attr }
      expect(parsed_result['status']).to eq('fail')
      expect(parsed_result['errors']).to eq(['unauthenticated'])
    end

    it 'creates a link and delete' do
      login!
      post :create, params: { link: link_attr }
      expect(parsed_result['status']).to eq('created')

      delete :destroy, params: { id: parsed_result['location']['id'] }
      expect(parsed_result['status']).to eq('destroyed')

      delete :destroy, params: { id: other_link.id }
      expect(parsed_result['status']).to eq('fail')
      expect(parsed_result['errors']).to eq(['unauthorized'])

      logout!
      delete :destroy, params: { id: other_link.id }
      expect(parsed_result['status']).to eq('fail')
      expect(parsed_result['errors']).to eq(['unauthenticated'])
    end
  end
end
