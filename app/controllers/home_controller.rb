# frozen_string_literal: true

# Home page controller
class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    code = params[:code]
    @coin = CoinProcessor.call(code)
  end

  def simulate
    if Coin::VALID_CODES.include?(params[:code])
      redirect_to root_path(code: params[:code])
    else
      redirect_to root_path
    end
  end
end
