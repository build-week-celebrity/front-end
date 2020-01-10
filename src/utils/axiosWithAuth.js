import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("Authorization");
    console.log(token);
    return axios.create({
        baseURL: "https://celeb-doa-api.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    });
};