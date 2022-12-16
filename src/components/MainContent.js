/* eslint-disable object-curly-newline */
import React from "react";
import PropTypes from "prop-types";
import ThreadList from "./ThreadList";
import { threadItemShape } from "./ThreadItem";
import CreateThreadInput from "./CreateThreadInput";
import { authUserShape } from "./HeaderBar";

function MainContent({
    authUser,
    threads,
    addThread,
    upVote,
    downVote,
    neutralizeVote,
}) {
    return (
        <article>
            <CreateThreadInput authUser={authUser} addThread={addThread} />
            <ThreadList
                authUser={authUser}
                threads={threads}
                upVote={upVote}
                downVote={downVote}
                neutralizeVote={neutralizeVote}
            />
        </article>
    );
}

MainContent.propTypes = {
    authUser: PropTypes.shape(authUserShape),
    threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
    addThread: PropTypes.func.isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    neutralizeVote: PropTypes.func.isRequired,
};

export default MainContent;
