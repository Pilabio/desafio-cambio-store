# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.5'

gem 'bootsnap',           '>= 1.1.0', require: false
gem 'coffee-rails',       '~> 4.2'
# Use environment variables with dotenv
gem 'dotenv-rails',       '~> 2.7', '>= 2.7.4'
gem 'font-awesome-rails', '~> 4.7', '>= 4.7.0.5'
gem 'foreman',            '~> 0.85.0'
gem 'jbuilder',           '~> 2.5'
gem 'mini_racer',         platforms: :ruby
gem 'pg',                 '~> 1.1', '>= 1.1.4'
gem 'puma',               '~> 4.3'
gem 'rails',              '~> 5.2.3'
gem 'react_on_rails',     '~> 11.3'
gem 'rest-client',        '~> 2.0', '>= 2.0.2'
gem 'sass-rails',         '~> 5.0'
gem 'slim',               '~> 4.0', '>= 4.0.1'
gem 'thor',               '~> 0.19.1'
gem 'turbolinks',         '~> 5'
gem 'uglifier',           '>= 1.3.0'
gem 'webpacker',          '~> 4.x'

group :development, :test do
  gem 'better_errors',         '~> 2.5', '>= 2.5.1'
  gem 'bullet',                '~> 6.0', '>= 6.0.1'
  gem 'byebug',                platforms: %i[mri mingw x64_mingw]
  gem 'factory_bot_rails',     '~> 5.0', '>= 5.0.2'
  gem 'pry-rails',             '~> 0.3.9'
  gem 'rspec-rails',           '~> 3.8', '>= 3.8.2'
  gem 'rubocop-rspec',         '~> 1.31'
  gem 'spring-commands-rspec', '~> 1.0', '>= 1.0.4'
end

group :development do
  gem 'listen',                '>= 3.0.5', '< 3.2'
  gem 'rubocop',               '~> 0.70.0', require: false
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console',           '>= 3.3.0'
end

group :test do
  gem 'capybara',         '>= 2.15'
  gem 'database_cleaner', '~> 1.7'
  gem 'selenium-webdriver'
  gem 'vcr',              '~> 5.0'
  gem 'webmock',          '~> 3.6'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
