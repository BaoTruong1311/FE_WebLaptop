import axios from "axios";

const API_URL = "http://localhost:8080";


export default axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json",
    },
});
export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}


