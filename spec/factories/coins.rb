# frozen_string_literal: true

# Factory for Coin model
FactoryBot.define do
  factory :coin do
    name { 'MyString' }
    code { 'MyString' }
    full_name { 'MyString' }
    last_value { '3,7545' }
  end
end
