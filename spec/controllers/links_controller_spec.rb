require 'rails_helper'

RSpec.describe Api::V1::LinksController, type: :controller do
  describe '#create' do
    let(:link_attr) { attributes_for(:link) }
    before do
      @user = create(:user)
    end

    it 'returns created' do
      login!
      post :create, params: { link: link_attr }
      status = JSON.parse(response.body)['status']
      expect(status).to eq('created')
    end
  end
end
