import { DeleteUser, UpdateUser, GetUsers } from "../controllers/users";
import { GetTasks, CreateTask, DeleteTask, UpdateTask } from "../controllers/tasks";

export default [
  {
    name: "/tasks",
    children: [
      { name: "/:id", type: "GET", controller: GetTasks },
      { name: "/", type: "POST", controller: CreateTask },
      { name: "/:id", type: "DELETE", controller: DeleteTask },
      { name: "/:id", type: "PUT", controller: UpdateTask },
    ]
  },
  {
    name: "/users",
    children: [
      { name: "/", type: "GET", controller: GetUsers },
      { name: "/:id", type: "PUT", controller: UpdateUser },
      { name: "/:id", type: "DELETE", controller: DeleteUser },
    ]
  }
];
