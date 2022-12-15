import React from "react";
import PropTypes from "prop-types";
import ThreadItem, { threadItemShape } from "./ThreadItem";

function TreadList({ threads, upVote, downVote }) {
    return (
        <div className="thread">
            {threads.map((thread) => (
                <ThreadItem
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...thread}
                    key={thread.id}
                    upVote={upVote}
                    downVote={downVote}
                />
            ))}
        </div>
    );
}

TreadList.propTypes = {
    threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
};

export default TreadList;
