# frozen_string_literal: true

# index view spec
require 'spec_helper'

describe 'home/index.html.slim' do
  it 'displays coin value correctly' do
    create(:coin)
    assign(:coins, Coin.all)

    render

    expect(rendered).to match(/123/)
  end
end
