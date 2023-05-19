import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/",
})

export default instance;


// goto this url for this code : https://axios-http.com/docs/instance