import http from "./httpService";
const token = "API_TOKEN"
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

export default function deleteComment(commentId) {
    return http.delete(`/comments/${commentId}`, config);
}