import React from "react";
import PropTypes from "prop-types";
import { authUserShape } from "./HeaderBar";
import useInput from "../hooks/useInput";

function RegisterInput({ authUser, addThread }) {
    const [title, onTitleChange, setTitle] = useInput("");
    const [body, onBodyChange, setBody] = useInput("");
    const onHandleAddThread = (e) => {
        e.preventDefault();
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
                onChange={onTitleChange}
                placeholder="title"
            />
            <textarea
                type="text"
                value={body}
                onChange={onBodyChange}
                placeholder="body"
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
