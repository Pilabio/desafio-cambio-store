source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.5'

gem 'bootsnap',       '>= 1.1.0', require: false
gem 'coffee-rails',   '~> 4.2'
# Use environment variables with dotenv
gem 'dotenv-rails',   '~> 2.7', '>= 2.7.4'
gem 'foreman',        '~> 0.85.0'
gem 'jbuilder',       '~> 2.5'
gem 'mini_racer',     platforms: :ruby
# Use pg on sqlight's place
gem 'pg',             '~> 1.1', '>= 1.1.4'
gem 'puma',           '~> 3.11'
gem 'rails',          '~> 5.2.3'
gem 'react_on_rails', '~> 11.3'
gem 'sass-rails',     '~> 5.0'
gem 'thor',           '~> 0.19.1'
gem 'turbolinks',     '~> 5'
gem 'uglifier',       '>= 1.3.0'
gem 'webpacker',      '~> 4.x'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'chromedriver-helper'
  gem 'selenium-webdriver'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
