import axios from "axios";
import { URLS } from "./constants";

const Http = {
  users: axios.create({
    baseURL: URLS.users,
    timeout: 6000
  }),
  tasks: axios.create({
    baseURL: URLS.tasks,
    timeout: 6000
  })
};

export default Http;
