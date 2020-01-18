import Http from "../../util/http_common";

export const GetUsers = async function (req, res) {
  let response = await Http.users.get("/users");
  res.status(response.status).json(response.data);
};

export const DeleteUser = async function (req, res) {
  let response = await Http.users.delete(`/users/${req.params.id}`);
  res.status(response.status).json(response.data);
};

export const UpdateUser = async function (req, res) {
  let response = await Http.users.put(`/users/${req.params.id}`, req.body);
  res.status(response.status).json(response.data);
};