import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function CreateComment({ threadId, addComment }) {
    const [content, onContentChange, setContent] = useInput("");
    const handleAddComment = (e) => {
        e.preventDefault();
        addComment({ threadId, content });
        setContent("");
    };

    return (
        <form className="create-comment-form" onSubmit={handleAddComment}>
            <textarea
                className="form-div"
                placeholder="create your comment"
                onChange={onContentChange}
                value={content}
                spellCheck="false"
                rows="5"
            />
            <button type="submit">post comment</button>
        </form>
    );
}

CreateComment.propTypes = {
    threadId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired,
};

export default CreateComment;
