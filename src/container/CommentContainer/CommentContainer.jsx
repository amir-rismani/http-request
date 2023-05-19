import { useEffect, useState } from "react";
import CommentDetails from "../../components/CommentDetails/CommentDetails";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import http from "../../services/httpService";
import "./CommentContainer.css";

const CommentContainer = () => {
    const [comments, setComments] = useState(null);
    const [selectedCommentId, setSelectedCommentId] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        getAllComments()
    }, []);

    const clickHandler = async (commentId) => {
        setSelectedCommentId(commentId);
    }

    const deleteHandler = async (commentId) => {
        http.delete(`/comments/${commentId}`)
            .then((response) => {
                getAllComments();
                setSelectedCommentId(null);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const addHandler = async (commentValues) => {
        await http.post('/comments', commentValues);
        getAllComments()
    }

    const getAllComments = () => {
        http.get('/comments')
            .then((response) => {
                setComments(response.data)
            })
            .catch((error) => {
                console.log(error)
                setError(true)
                // setError({message: error.message})
            });
    }

    return (
        <main>
            <CommentList comments={comments} onClickComment={clickHandler} error={error} />
            <CommentDetails commentId={selectedCommentId} deleteHandler={deleteHandler} />
            <CommentForm addHandler={addHandler} />
        </main>
    );
}

export default CommentContainer;