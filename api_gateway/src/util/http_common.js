import axios from "axios";
import { URLS } from "./constants";

const Http = axios.create({
  baseURL: URLS.to_do,
  timeout: 6000
});

export default Http;
