import "./CommentForm.css"
const CommentForm = () => {
    return (
        <section className="comment-form">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Message</label>
                    <input type="text" id="body" name="body" />
                </div>
                <button type="submit">Add</button>
            </form>
        </section>

    );
}

export default CommentForm;