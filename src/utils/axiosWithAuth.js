import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    return axios.create({
        baseURL: "https://celeb-doa-api.herokuapp.com/api",
        headers: {
            token: token
        }
    });
};