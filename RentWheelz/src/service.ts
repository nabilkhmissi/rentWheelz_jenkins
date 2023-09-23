import axios from "axios";

export function fetchCars() {
    return axios.get("http://localhost:3000/api/v1/cars")
}