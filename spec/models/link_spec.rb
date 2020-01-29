require 'rails_helper'

RSpec.describe Link, type: :model do
  context 'with no user' do
    it 'fail at create' do
      link = Link.new( attributes_for(:link) )
      expect(link).to be_invalid
    end
  end

  context 'with user' do
    let(:user) { create(:user) }

    it 'is valid, create, and destroy' do
      link = user.links.build( attributes_for(:link) )
      expect(link).to be_valid
      link.save!
      expect do
        delete_link = link.destroy
      end.to change(Link, :count).by(-1)
    end

    it 'is invalid with blank title' do
      link = user.links.build( attributes_for(:link, title: '') )
      expect(link).to be_invalid
    end

    it 'is invalid with blank url' do
      link = user.links.build( attributes_for(:link, url: '') )
      expect(link).to be_invalid
    end
  end
end
