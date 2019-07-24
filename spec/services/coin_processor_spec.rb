# frozen_string_literal: true

# Coin Processor service spec
require 'rails_helper'

RSpec.describe CoinProcessor, type: :model do
  describe 'call' do
    let(:json) do
      lambda do |code|
        { code.to_s => {
          'code' => code.to_s,
          'high' => '3,7545'
        } }
      end
    end

    context '#CoinsPriceFetcher call' do
      before do
        create(:coin, code: 'USD')
        create(:coin, code: 'EUR')
      end

      it 'passes param USD if code is nil' do
        expect(CoinsPriceFetcher).to receive(:call).with('USD') { json['USD'] }

        described_class.call(nil)
      end

      it 'passes param EUR if code is EUR' do
        expect(CoinsPriceFetcher).to receive(:call).with('EUR') { json['EUR'] }

        described_class.call('EUR')
      end
    end

    context '#return' do
      before do
        create_list(:coin, 10)
      end

      let(:coin) { Coin.first }

      it 'returns first Coin if code not valid' do
        expect(CoinsPriceFetcher).to receive(:call).with('Foo') { json['Foo'] }

        expect(described_class.call('Foo')).to eql(coin)
      end

      it 'returns first Coin if json is nil' do
        allow(CoinsPriceFetcher).to receive(:call) { {} }

        expect(described_class.call('Foo')).to eql(coin)
      end

      it 'returns found Coin if same value' do
        usd_coin = create(:coin, code: 'USD', last_value: '3,7545')
        allow(CoinsPriceFetcher).to receive(:call) { json['USD'] }

        expect(described_class.call('USD')).to eql(usd_coin)
      end

      it 'returns updated coin if not same value' do
        usd_coin = create(:coin, code: 'USD', last_value: '3,5264')
        value = '3,7545'

        allow(CoinsPriceFetcher).to receive(:call) { json['USD'] }
        described_class.call('USD')

        usd_coin.reload
        expect(usd_coin.last_value).to eql(value)
      end
    end
  end
end
