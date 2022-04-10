import axios from "axios";
var url = "http://localhost:8000/api/";

export default axios.create({
    baseURL: url,
    headers: {
        "Content-type": "application/json",
        "x-access-token": localStorage.getItem("token")
    }
});