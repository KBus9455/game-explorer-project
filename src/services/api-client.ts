import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c7c2b67ad0754f5292a6cad7566d1941",
  },
});
