import axios from "axios";

export function fetchCars() {
    const server_url = import.meta.env.VITE_SERVER_URL
    return axios.get(`${server_url}/api/v1/cars`)
}