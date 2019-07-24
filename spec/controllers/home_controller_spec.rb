# frozen_string_literal: true

# Coin model spec
require 'rails_helper'

RSpec.describe HomeController, type: :controller do
  context '#get index' do
    it 'calls CoinProcessor with nil if no param' do
      expect(CoinProcessor).to receive(:call).with(nil)

      get :index
    end

    it 'calls CoinProcessor with code' do
      expect(CoinProcessor).to receive(:call).with('USD')

      get :index, params: { code: 'USD' }
    end
  end
end
