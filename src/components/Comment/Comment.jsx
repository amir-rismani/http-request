import "./Comment.css"
const Comment = ({ comment, onClickComment }) => {
    return (
        <div className="comment" onClick={() => onClickComment(comment.id)}>
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