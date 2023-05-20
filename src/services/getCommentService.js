import http from "./httpService";

export default function getComment(commentId) {
    return http.get(`/comments/${commentId}`);
}