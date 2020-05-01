source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.3'

gem 'acts_as_votable', '~> 0.12.1'
gem 'bcrypt', '~> 3.1', '>= 3.1.13'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'faker', '~> 2.10', '>= 2.10.1'
gem 'jwt', '~> 2.2', '>= 2.2.1'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem 'rails', '~> 6.0.2', '>= 6.0.2.2'
gem 'rack-cors', '~> 1.1', '>= 1.1.1'
gem 'simple_command', '~> 0.1.0'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
