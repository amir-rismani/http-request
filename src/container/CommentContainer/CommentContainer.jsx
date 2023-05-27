import { useEffect, useState } from "react";
import CommentDetails from "../../components/CommentDetails/CommentDetails";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import getAllComments from "../../services/getAllCommentsService";
import addComment from "../../services/addCommentService";
import deleteComment from "../../services/deleteCommentService";
import "./CommentContainer.css";
import { toast } from "react-toastify";

const CommentContainer = () => {
    const [comments, setComments] = useState(null);
    // const [selectedCommentId, setSelectedCommentId] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        getComments()
    }, []);

    // const clickHandler = async (commentId) => {
    //     setSelectedCommentId(commentId);
    // }

    // const addHandler = async (commentValues) => {
    //     await addComment(commentValues);
    //     toast.success('Add comment successfully.')
    //     getComments()
    // }

    const getComments = async () => {
        try {
            const { data } = await getAllComments();
            setComments(data)
        } catch (error) {
            setError(true);
            toast.error('Get comments failed.');
            // setError({message: error.message})
        }
    }

    return (
        <main>
            <CommentList comments={comments} error={error} />
            {/* <CommentDetails commentId={selectedCommentId} deleteHandler={deleteHandler} />
            <CommentForm addHandler={addHandler} /> */}
        </main>
    );
}

export default CommentContainer;