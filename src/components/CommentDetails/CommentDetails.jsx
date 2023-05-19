import { useEffect, useState } from "react";
import "./CommentDetails.css";
import axios from "axios";
const CommentDetails = ({ commentId, deleteHandler }) => {
    const [comment, setComment] = useState(null);

    useEffect(() => {
        if (commentId) {
            async function getComment() {
                const { data } = await axios.get(`http://localhost:3001/comments/${commentId}`);
                setComment(data)
            }

            getComment();
        }
    }, [commentId]);

    const deleteCommentHandler = (commentId) => {
        deleteHandler(commentId);
        setComment(null);
    }

    let commentDetails = <p>Please select a comment for show details.</p>;
    if (comment && commentId) commentDetails = <p>Loading details...</p>
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