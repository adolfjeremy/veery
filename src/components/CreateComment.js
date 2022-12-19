/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
import React, { useState } from "react";
import PropTypes from "prop-types";

function CreateComment({ threadId, addComment }) {
    const [content, setContent] = useState();
    const handleAddComment = (e) => {
        e.preventDefault();
        addComment({ threadId, content });
        setContent("");
    };
    // eslint-disable-next-line no-console
    console.log(content);

    return (
        <form className="create-comment-form" onSubmit={handleAddComment}>
            <div
                contentEditable
                className="form-div"
                data-placeholder="create your comment"
                onInput={(e) => setContent(e.target.innerHTML)}
                suppressContentEditableWarning
                value={content}
            ></div>
            <button type="submit">post comment</button>
        </form>
    );
}

CreateComment.propTypes = {
    threadId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired,
};

export default CreateComment;
