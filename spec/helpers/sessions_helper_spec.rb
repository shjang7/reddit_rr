require 'rails_helper'

RSpec.describe Api::V1::SessionsHelper, type: :helper do
  context 'providing login related methods' do
    it 'login, check login status, and logout' do
      @user = create(:user)
      login!
      expect(logged_in?).to be(true)
      expect(authorized_user?).to be(true)
      expect(current_user.id).to equal(@user.id)
      logout!
      expect(logged_in?).to be(false)
      expect(authorized_user?).to be(false)
      expect(current_user).to be_blank()
    end
  end
end
