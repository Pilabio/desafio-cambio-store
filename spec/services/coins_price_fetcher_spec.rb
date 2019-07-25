# frozen_string_literal: true

# Coins Price Fetcher service spec
require 'rails_helper'

RSpec.describe CoinsPriceFetcher, type: :model do
  context '#call' do
    let(:url) { 'https://economia.awesomeapi.com.br/all/USD-BRL' }

    it 'calls RestClient' do
      VCR.use_cassette('CoinsPriceFetcher:10') do
        expect(RestClient).to receive(:get).with(url).and_call_original

        described_class.call('USD')
      end
    end

    it 'returns json on response code 200' do
      json = described_class.call('USD')

      expect(json['USD']['code']).to eql('USD')
      expect(json['USD']['high'].length).to eql(6)
    end

    it 'returns different coins based on code' do
      VCR.use_cassette('CoinsPriceFetcher:25') do
        json = described_class.call('USD')

        expect(json['USD']).not_to be_nil

        json2 = described_class.call('EUR')

        expect(json2['EUR']).not_to be_nil
      end
    end

    it 'returns empty hash on response code not 200' do
      response = double

      allow(response).to receive(:code) { 422 }
      allow(RestClient).to receive(:get) { response }

      expect(described_class.call('USD')).to eql({})
    end
  end
end
