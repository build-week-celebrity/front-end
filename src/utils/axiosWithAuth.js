import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("Authorization");
    return axios.create({
        baseURL: "https://celeb-doa-api.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    });
};