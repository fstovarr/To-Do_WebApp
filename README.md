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
npm run serve # The server will run on port 8000
```
- Open the browser and go to http://localhost:8080/

## Tests

### 1. View the list of users

![alt text](https://i.ibb.co/fn2BQcm/image.png "Logo Title Text 1")

The previous image is the main screen of the web app, in the left side you will find the users list and in the right side their tasks.

### 2. Update the user's information

Click the pencil button in the user's right, it shows a dialog in which his information could be updated. You can edit the user's name and when you finish, press the OK button to save the changes.

![alt text](https://i.ibb.co/G9m5LnY/image.png "Logo Title Text 1")

### 3. Delete users

Press the thrash button in the right of the user, it will destroy his information and his tasks in the system.

### 4. List the tasks of a single user

When the app's user clicks on the eye button, the right side of screen will change and it will show the next view. Here will be all tasks of user 

![alt text](https://i.ibb.co/51nM2Xk/image.png "Logo Title Text 1")

### 5. Create tasks

Below the "TASKS" title, you will find a Add Task button, please press it. Then it will shown a dialog with description field of task. When you press the OK button, the task will be saved in the information of the selected user.

![alt text](https://i.ibb.co/DknG6Sc/image.png "Logo Title Text 1")

### 6. Update tasks

In the task's right, press in the pencil button, it show a dialog with description and state fields to be modified.

![alt text](https://i.ibb.co/9ZJFtk8/image.png "Logo Title Text 1")

### 7. Delete tasks

You could delete a task pressing the trash button in the right side of the task.

### 8. Test REST endpoints manually

In this [link](https://www.getpostman.com/collections/990a93dc2b6c0417f018) you will find a POSTMAN Collection, in which are the services used in the app.