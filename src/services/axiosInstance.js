import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Authorization': 'AUTH TOKEN'
    }
})

export default axiosInstance;