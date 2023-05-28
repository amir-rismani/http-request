import { useEffect, useState } from "react";
import "./CommentDetails.css";
import getComment from "../../services/getCommentService";
import deleteComment from "../../services/deleteCommentService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CommentDetails = () => {
    const [comment, setComment] = useState(null);

    const params = useParams();
    const navigate = useNavigate();
    const commentId = params.id;
    useEffect(() => {
        if (commentId) {
            getComment(commentId)
                .then((response) => setComment(response.data))
                .catch(error => console.log(error))
        }
    }, [commentId]);

    const deleteCommentHandler = async (commentId) => {
        try {
            await deleteComment(commentId)
            toast.success('Delete comment successfully.')
            navigate('/');
        } catch (error) {
            toast.error(error.message)
        } setComment(null);
    }

    let commentDetails = <p>Please select a comment for show details.</p>;
    if (commentId) commentDetails = <p>Loading details...</p>
    if (comment) commentDetails = <>
        <h1>Comment Details</h1>
        <div className="record-field">
            <span className="label">Name:</span>
            <span>{comment.name}</span>
        </div>
        <div className="record-field">
            <span className="label">Email:</span>
            <span>{comment.email}</span>
        </div>
        <div className="record-field">
            <span className="label">Body:</span>
            <span>{comment.body}</span>
        </div>
        <div className="actions">
            <button className="inline delete" onClick={() => deleteCommentHandler(commentId)}>Delete</button>
        </div>
    </>
    return <div className="comment-details">{commentDetails}</div>;
}

export default CommentDetails;