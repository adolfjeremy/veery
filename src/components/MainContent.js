import React from "react";
import PropTypes from "prop-types";
import TreadList from "./TreadList";
import { threadItemShape } from "./ThreadItem";

function MainContent({ threads }) {
    return (
        <article>
            <TreadList threads={threads} />
        </article>
    );
}

MainContent.propTypes = {
    threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default MainContent;
