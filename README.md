# README

To run the app locally just follow the instructions

## Ruby version

Ruby 2.5.5 was the chosen version for the app.

To install access: https://www.ruby-lang.org and follow the tutorial.

## Dependencies

* The system uses yarn to add the javascript packages.

Access the link: https://yarnpkg.com/lang/pt-br/docs/install/#debian-stable and follow the steps to conclude.

* We use PostgreSQL for the database

Access https://www.postgresql.org/download/ download and configure postgres on your computer.

## Instalation

* After installing the dependencies and ruby itself, it's time to clone this project in
any folder and get ready to install it, and access through your terminal.

* Execute 'gem install bundler', and now you may install the gems.

* Use the command 'bundle install' to get all the gems necessaries for the project.

* Access the file '.env' on the root folder and edit the env variables: DB_USERNAME and DB_PASSWORD,
passing your postgres credentials as values. Ex: DB_PASSWORD=postgres

* Execute 'yarn install' to add all the necessary javascript packages on the system

* Execute the command 'rails db:create' in order for the database to be set, and 'rails db:migrate'
to run the migrations and create the tables on the db.

* Run 'rails db:seed' to create the models that will be used to experiment the app.

## Execution (development)

* On the terminal, execute the server with 'rails s' to run the default rails server.
Or you could run the server with static client side files with 'foreman start -f Procfile.dev',
and 'foreman start -f Procfile.dev-server' to run with the webpack-dev-server

* Everything ready, now you may go to your browser and access: 'localhost:3000' to use the app.
