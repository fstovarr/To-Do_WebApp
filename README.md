# To-Do_WebApp

## Architecture

The next image shows the Block Diagram for the present system. Below this section, you will find the instructions to run the servers and the way to run tests to prove its correct operation.

![Architecture block diagram](https://i.imgur.com/zMP1LUt.png)

The platform must be scalable and flexible, so all the micro services and other components are dockerized and ready to execute with a sofware of Container Orchestration, like Rancher Server or Kubernetes. This software will allow to the system to scale according to its growth.

## Servers configuration

First of all, clone this repository `git clone https://github.com/fstovarr/To-Do_WebApp.git`
Below you will find the instructions to run the system's servers:

### 1. Run all microservices with Docker
Pre-requisites:
Docker and docker-compose installed on the machine and the ports 3000, 3001 and 8001 free.

- Into the main folder (To-Do_WebApp) execute the next code in the console.
```
docker-compose up --build
```
- Wait until all servers start.

### 2. WebApp:
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