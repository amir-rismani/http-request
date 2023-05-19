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
        getAllComments()
    }, []);


    const clickHandler = async (commentId) => {
        setSelectedCommentId(commentId);
    }

    const deleteHandler = async (commentId) => {
        axios.delete(`http://localhost:3001/comments/${commentId}`)
            .then((response) => {
                getAllComments()
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const addHandler = async (commentValues) => {
        await axios.post('http://localhost:3001/comments', commentValues);
        getAllComments()
    }

    const getAllComments = () => {
        axios.get('http://localhost:3001/comments')
            .then((response) => {
                setComments(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <main>
            <CommentList comments={comments} onClickComment={clickHandler} />
            <CommentDetails commentId={selectedCommentId} deleteHandler={deleteHandler} />
            <CommentForm addHandler={addHandler} />
        </main>
    );
}

export default CommentContainer;