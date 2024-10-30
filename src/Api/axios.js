import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5173",
  withCredentials: true,
});

export default Axios;
