/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { authUserShape } from "./HeaderBar";

function RegisterInput({ authUser, addThread }) {
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
                placeholder="title"
                required
            />
            <textarea
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="body"
                required
            />
            <button
                type="button"
                onClick={onHandleAddThread}
                // eslint-disable-next-line no-unneeded-ternary
                disabled={authUser === null ? true : false}
            >
                Post
            </button>
        </form>
    );
}

RegisterInput.propTypes = {
    authUser: PropTypes.shape(authUserShape),
    addThread: PropTypes.func.isRequired,
};

export default RegisterInput;
