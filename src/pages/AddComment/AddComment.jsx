import { useState } from "react";
import "./AddComment.css"
import addComment from "../../services/addCommentService";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddComment = ({ addHandler }) => {
    const navigate = useNavigate();
    const [commentValues, setCommentValues] = useState({
        name: "",
        email: "",
        body: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const changeHandler = (event) => {
        setCommentValues({
            ...commentValues,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            setSubmitting(true);
            await addComment(commentValues);
            toast.success('Add comment successfully.')
            navigate("/")
            setSubmitting(false);

            setCommentValues({
                name: "",
                email: "",
                body: "",
            })
        } catch {
            console.error('error');
            setSubmitting(false);
        }

    }

    return (
        <section className="comment-form">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={commentValues.name} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={commentValues.email} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Message</label>
                    <textarea type="text" id="body" name="body" value={commentValues.body} onChange={changeHandler} />
                </div>
                <button type="submit">Add {submitting && <span className="loading"><AiOutlineLoading /></span>}</button>
            </form>
        </section>

    );
}

export default AddComment;