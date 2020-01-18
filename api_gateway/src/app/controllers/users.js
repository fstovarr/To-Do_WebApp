import Http from "../../util/http_common";

export const GetUsers = async function (req, res) {
  let response = await Http.users.get("/users");
  res.status(response.status).json(response.data);
};

export const DeleteUser = async function (req, res) {
  let userId = req.params.id;
  let response = await Http.users.delete(`/users/${userId}`);
  response = await Http.tasks.delete(`/user_tasks/${userId}/all`);
  res.status(response.status).json(response.data);
};

export const UpdateUser = async function (req, res) {
  let response = await Http.users.put(`/users/${req.params.id}`, req.body);
  res.status(response.status).json(response.data);
};