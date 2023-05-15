import Comment from "../Comment/Comment";
import "./CommentList.css"
const CommentList = ({ comments, onClickComment }) => {
    return (
        <section className="comment-list">
            {
                comments ?
                    comments.map(comment => <Comment comment={comment} key={comment.id} onClickComment={onClickComment} />)
                    : <p>Comments are loading...</p>
            }
        </section>
    );
}

export default CommentList;