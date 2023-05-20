import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

axios.interceptors.request.use((request) => {
    console.log('request', request);
    return request;
}, (error) => {
    console.log('error', error);
    return Promise.reject();
});

axios.interceptors.response.use((response) => {
    console.log('response', response);
    return response;
}, (error) => {
    console.log('error', error);
    return Promise.reject();
});

const http = {
    post: axios.post,
    get: axios.get,
    put: axios.put,
    delete: axios.delete
}

export default http;