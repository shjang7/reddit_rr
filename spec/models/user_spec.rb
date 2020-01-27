require 'rails_helper'

RSpec.describe User, type: :model do
  context 'with valid attributes' do
    it 'has correct informations' do
      jen = User.new(
        username: 'sample-user-0',
        email: 'sample-user-0@example.com',
        password: 'foobar',
        password_confirmation: 'foobar'
      )
      expect(jen).to be_valid
    end

    it 'has a right factory' do
      expect(build(:user)).to be_valid
    end
  end

  context 'with invalid attributes for blank' do
    it 'has blank username' do
      user = build(:user, username: '')
      expect(user).to_not be_valid
    end

    it 'has blank email' do
      user = build(:user, email: '')
      expect(user).to_not be_valid
    end

    it 'has blank password' do
      user = build(:user, password: '')
      expect(user).to_not be_valid
    end
  end

  context 'with invalid attributes for wrong info' do
    it 'is invalid with duplicate username' do
      mos = create(:user)
      jen = build(:user, email: mos.username)
      expect(jen).to_not be_valid
    end

    it 'is invalid with duplicate email' do
      mos = create(:user)
      jen = build(:user, email: mos.email)
      expect(jen).to_not be_valid
    end

    it 'is invalid with short username under 4 characters' do
      user = build(:user, username: '123')
      expect(user).to_not be_valid
    end
  end
end
