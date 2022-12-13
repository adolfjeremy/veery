/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from "react";
import PropTypes from "prop-types";

function RegisterInput({ addThread }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const onHandleAddThread = () => {
        addThread({ title, body });
        setTitle("");
        setBody("");
    };
    return (
        <form className="thread-input">
            <h1>Create Thread</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <div
                className="form_div"
                data-placeholder="body"
                contentEditable
                onInput={(e) => setBody(e.target.innerHTML)}
                value={body}
            ></div>
            <button type="button" onClick={onHandleAddThread}>
                Post
            </button>
        </form>
    );
}

RegisterInput.propTypes = {
    addThread: PropTypes.func.isRequired,
};

export default RegisterInput;
