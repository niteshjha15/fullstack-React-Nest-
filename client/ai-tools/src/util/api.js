import axios from "axios";
let BASE_URL = "http://localhost:8000";

const request = axios.create({
  baseURL: "http://localhost:8000",
});

axios.interceptors.request.use(
  (config) => {
    const token = "token here";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest.url === "http://127.0.0.1:3000/v1/auth/token"
    ) {
      router.push("/login");
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorageService.getRefreshToken();
      const res = await axios
            .post("/auth/token", {
                refresh_token: refreshToken,
            });
        if (res.status === 201) {
            localStorageService.setToken(res.data);
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + localStorageService.getAccessToken();
            return axios(originalRequest);
        }
    }
    return Promise.reject(error);
  }
);
