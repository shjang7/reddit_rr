require 'rails_helper'

RSpec.describe Api::V1::SessionsController, type: :controller do
  context '#create, #is_logged_in, #destroy' do
    let(:user) { create(:user) }

    it 'returns fail at login, logged_in, logout' do
      post :create, params: { session: { username: user.username, password: '' }}
      login = JSON.parse(response.body)['status']
      expect(login).to be(401)

      get :is_logged_in?
      logged_in = JSON.parse(response.body)['logged_in']
      expect(logged_in).to be(false)
    end

    it 'returns success at login, logged_in, logout' do
      get :is_logged_in?
      logged_in = JSON.parse(response.body)['logged_in']
      expect(logged_in).to be(false)
      
      post :create, params: { session: { username: user.username, password: user.password }}
      login = JSON.parse(response.body)['status']
      expect(login).to be(201)

      get :is_logged_in?
      logged_in = JSON.parse(response.body)['logged_in']
      expect(logged_in).to be(true)

      delete :destroy
      logout = JSON.parse(response.body)['logged_out']
      expect(logout).to be(true)
    end
  end
end
