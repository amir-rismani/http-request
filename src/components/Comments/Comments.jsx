import { useEffect, useState } from "react";
import CommentList from "./CommentList/CommentList";
import getAllComments from "../../services/getAllCommentsService";
import "./Comments.css";
import { toast } from "react-toastify";

const Comments = () => {
    const [comments, setComments] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        getComments()
    }, []);

    const getComments = async () => {
        try {
            const { data } = await getAllComments();
            setComments(data)
        } catch (error) {
            setError(true);
            toast.error('Get comments failed.');
        }
    }

    return <CommentList comments={comments} error={error} />
}

export default Comments;