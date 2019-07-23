# frozen_string_literal: true

# Home page controller
class HomeController < ApplicationController
  def index
    code = params[:code]
    @coin = CoinProcessor.call(code)
  end
end
