import { useEffect, useState } from "react";
import CommentDetails from "../../components/CommentDetails/CommentDetails";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import axios from "axios";
import "./CommentContainer.css";

const CommentContainer = () => {
    const [comments, setComments] = useState(null);
    const [selectedCommentId, setSelectedCommentId] = useState(null);
    useEffect(() => {
        // then/catch
        axios.get('http://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                setComments(response.data.slice(0, 4))
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    const clickHandler = async (commentId) => {
        setSelectedCommentId(commentId);
    }

    return (
        <main>
            <CommentList comments={comments} onClickComment={clickHandler} />
            <CommentDetails commentId={selectedCommentId} />
            <CommentForm />
        </main>
    );
}

export default CommentContainer;