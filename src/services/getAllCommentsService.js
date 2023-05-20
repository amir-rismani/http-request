import http from "./httpService";

export default function getAllComments() {
    return http.get('/comments');
}