import http from "./httpService";

export default function deleteComment(commentId) {
    return http.delete(`/comments/${commentId}`);
}