require 'rails_helper'

RSpec.describe Coin, type: :model do
  context 'Factory' do
    it 'has a valid factory' do
      expect(create(:coin)).to be_valid
    end
  end
end
