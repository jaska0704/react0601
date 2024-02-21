import axios from "axios";

const requist = axios.create({ baseURL: import.meta.env.VITE_URL });

requist.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      token: localStorage.getItem("token"),
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
requist.interceptors.response.use(
  (response) => {
    if (response.status == 401) {
        localStorage;
        return (window.location.pathname = "/")
    }
    return response;
  },
  (error) => Promise.reject(error?.response?.data)
);

export default requist;
