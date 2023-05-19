import { useRef } from "react";
import "./Comment.css"
const Comment = ({ comment, onClickComment }) => {
    const selectedComment = useRef();
    const clickHandler = (commentId) => {
        onClickComment(commentId);
        selectedComment.current.parentElement.childNodes.forEach(childNode => {
            childNode.classList.remove('selected')
        })
        selectedComment.current.classList.add('selected')
    }
    return (
        <div ref={selectedComment} className="comment" onClick={() => clickHandler(comment.id)}>
            <div className="record-field">
                <span className="label">Name:</span>
                <span>{comment.name}</span>
            </div>
            <div className="record-field">
                <span className="label">Email:</span>
                <span>{comment.email}</span>
            </div>
        </div>
    );
}

export default Comment;