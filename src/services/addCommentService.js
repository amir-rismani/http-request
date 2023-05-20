import http from "./httpService";

export default function addComment(data) {
    return http.post('/comments', data)
}