import React from "react";
import PropTypes from "prop-types";
import TreadList from "./TreadList";
import { threadItemShape } from "./ThreadItem";
import CreateThreadInput from "./CreateThreadInput";

function MainContent({ threads, addThread }) {
    return (
        <article>
            <CreateThreadInput addThread={addThread} />
            <TreadList threads={threads} />
        </article>
    );
}

MainContent.propTypes = {
    threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
    addThread: PropTypes.func.isRequired,
};

export default MainContent;
