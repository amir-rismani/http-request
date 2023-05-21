// import http from "./httpService";
import axiosInstance from "./axiosInstance";
export default function getComment(commentId) {
    return axiosInstance.get(`/comments/${commentId}`);
}