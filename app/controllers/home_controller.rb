# frozen_string_literal: true

# Home page controller
class HomeController < ApplicationController
  def index
    @coins = Coin.all
  end
end
