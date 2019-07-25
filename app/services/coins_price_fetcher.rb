# frozen_string_literal: true

# Service for making the request to the api and return response as json
module CoinsPriceFetcher
  class << self
    def call(code)
      url = "https://economia.awesomeapi.com.br/all/#{code}-BRL"

      request = RestClient.get(url)
      return {} unless request.code == 200

      JSON.parse(request)
    end
  end
end
