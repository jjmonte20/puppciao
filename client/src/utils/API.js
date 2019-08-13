import axios from "axios";

export default {
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  findMe: function() {
    return axios.get("/api/users");
  },
  loginUser: function(loginUser) {
    return axios.post("/api/log", loginUser);
  },
  logoutUser: function() {
    return axios.get("/api/log");
  }
};
