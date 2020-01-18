# To-Do_WebApp

## Servers configuration

First of all, clone this repository `git clone https://github.com/fstovarr/To-Do_WebApp.git`
Below you will find the instructions to run the system's servers:

### 1. Users micro-service:
Pre-requisites:
Ruby 2.6.3, Ruby on Rails framework and MySQL installed on the machine.

- Open the file `users_ms/config/database.yml` and edit the username and password fields with the credentials of MySQL. (Note that MySQL must be running on port 3306)
- Into `users_ms` folder, run the following instructions:
```
bundle install
rails db:drop db:create db:migrate db:seed
rails server --port 3000
```

### 2. Tasks micro-service:
Pre-requisites:
Ruby 2.6.3, Ruby on Rails framework and MySQL installed on the machine.

- Open the file `to-do_ms/config/database.yml` and edit the username and password fields with the credentials of MySQL. (Note that MySQL must be running on port 3306)
- Into `to-do_ms` folder, run the following instructions:
```
bundle install
rails db:drop db:create db:migrate db:seed
rails server --port 3001
```

### 3. API-Gateway:
Pre-requisites:
Node.js and npm installed on the machine and the port 8001 free.

- Into `api_gateway` folder, run the following instructions:
```
npm install
npm run start # The server will run on port 8001
```

### 4. WebApp:
Pre-requisites:
Node.js, npm and Vue installed on the machine and the port 8000 free.

- Into `web_app` folder, run the following instructions:
```
npm install
npm run serve # The server will run on port 8001
```
- Open the browser and go to http://localhost:8080/

## Tests

