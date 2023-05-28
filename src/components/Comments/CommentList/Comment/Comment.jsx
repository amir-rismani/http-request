import "./Comment.css"
import { Link } from "react-router-dom";
const Comment = ({ comment }) => {
    return (
        <Link to={`/show-comment/${comment.id}`}>
            <div className="comment">
                <div className="record-field">
                    <span className="label">Name:</span>
                    <span>{comment.name}</span>
                </div>
                <div className="record-field">
                    <span className="label">Email:</span>
                    <span>{comment.email}</span>
                </div>
            </div>
        </Link>
    );
}

export default Comment;