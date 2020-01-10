import axios from "axios";

export var axiosWithAuth = function axiosWithAuth() {
  var token = localStorage.getItem("token");
  //console.log(token);
  return axios.create({
    baseURL: "https://celeb-doa-api.herokuapp.com/api",
    headers: {
      token: token
    }
  });
};