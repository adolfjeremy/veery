import React from "react";
import PropTypes from "prop-types";
import ThreadItem, { threadItemShape } from "./ThreadItem";

function TreadList({ threads }) {
    return (
        <div className="thread">
            {threads.map((thread) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <ThreadItem {...thread} key={thread.id} />
            ))}
        </div>
    );
}

TreadList.propTypes = {
    threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default TreadList;
