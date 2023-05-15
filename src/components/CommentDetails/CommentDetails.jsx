import { useEffect, useState } from "react";
import "./CommentDetails.css";
import axios from "axios";
const CommentDetails = ({ commentId }) => {
    const [comment, setComment] = useState(null);

    useEffect(() => {
        if (commentId) {
            async function getComment() {
                const { data } = await axios.get(`http://jsonplaceholder.typicode.com/comments/${commentId}`);
                setComment(data)
            }

            getComment();
        }
    }, [commentId]);

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
    </>
    return commentDetails;
}

export default CommentDetails;