# frozen_string_literal: true

# Main service for select coin, make the request to api and process the response
module CoinProcessor
  class << self
    def call(code)
      code = 'USD' if code.nil?
      json_response = CoinsPriceFetcher.call(code)

      find_and_update_coin(json_response[code])
    end

    private

    def find_and_update_coin(json)
      return Coin.first if json.nil? || !Coin::VALID_CODES.include?(json['code'])

      coin = Coin.find_by_code(json['code'])

      return coin if coin.last_value == json['high']

      coin.update(last_value: json['high'])
      coin
    end
  end
end
