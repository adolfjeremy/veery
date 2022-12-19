import React, { useState } from "react";
import PropTypes from "prop-types";

function CreateComment({ threadId, addComment }) {
    const [content, setContent] = useState();
    const handleAddComment = () => {
        addComment({ threadId, content });
        setContent("");
    };

    return (
        <form className="create-comment-form">
            <div
                contentEditable
                className="form-div"
                data-placeholder="create your comment"
                onInput={(e) => setContent(e.target.innerHTML)}
                value={content}
            />
            <button type="button" onClick={handleAddComment}>
                post comment
            </button>
        </form>
    );
}

CreateComment.propTypes = {
    threadId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired,
};

export default CreateComment;
