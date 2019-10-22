import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://reddit-ranker.herokuapp.com/api/auth",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
