import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_REQUEST_URL,
  timeout: 1000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}`,
  },
});

axiosInstance.interceptors.request.use(
  config => {
    config.method = 'GET';
    return config;
  },
  err => Promise.reject(err)
);

export default axiosInstance;
