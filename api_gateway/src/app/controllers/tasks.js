import Http from "../../util/http_common";

export const GetTasks = async function (req, res) {
  let response = await Http.tasks.get(`/user_tasks/${req.params.id}`);
  res.status(response.status).json(response.data);
};

export const CreateTask = async function (req, res) {
  let response = await Http.tasks.post(`/user_tasks`, req.body);
  res.status(response.status).json(response.data);
};

export const UpdateTask = async function (req, res) {
  let response = await Http.tasks.put(`/user_tasks/${req.params.id}`, req.body);
  res.status(response.status).json(response.data);
};

export const DeleteTask = async function (req, res) {
  let response = await Http.tasks.delete(`/user_tasks/${req.params.id}`);
  res.status(response.status).json(response.data);
};