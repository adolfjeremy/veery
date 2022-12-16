/* eslint-disable object-curly-newline */
import React from "react";
import PropTypes from "prop-types";
import ThreadItem, { threadItemShape } from "./ThreadItem";
import { authUserShape } from "./HeaderBar";

function ThreadList({ authUser, threads, upVote, downVote, neutralizeVote }) {
    if (!threads.length) {
        return <div className="thread">no thread found</div>;
    }
    return (
        <div className="thread">
            {threads.map((thread) => (
                <ThreadItem
                    authUser={authUser}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...thread}
                    key={thread.id}
                    upVote={upVote}
                    downVote={downVote}
                    neutralizeVote={neutralizeVote}
                />
            ))}
        </div>
    );
}

ThreadList.propTypes = {
    authUser: PropTypes.shape(authUserShape),
    threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    neutralizeVote: PropTypes.func.isRequired,
};

export default ThreadList;
