import axios from "axios";

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    (error.response.status >= 400) && (error.response.status <= 500);
  if (!expectedError) {
    error("An unexpected error");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
