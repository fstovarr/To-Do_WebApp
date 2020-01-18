import axios from "axios";
import { URI } from "./constants";

const Http = axios.create({
    baseURL: URI,
    timeout: 60000
});

export default Http;