# frozen_string_literal: true

# index view spec
require 'spec_helper'

describe 'home/index.html.slim' do
  it 'displays coin value correctly' do
    assign(:coin, build(:coin))

    render

    expect(rendered).to match(/3,7545/)
  end
end
