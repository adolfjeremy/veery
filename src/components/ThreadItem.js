import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import VoteButton from "./VoteButton";
import postedAt from "../utils";

function ThreadItem({
    id,
    title,
    body,
    category,
    createdAt,
    upVotesBy,
    downVotesBy,
    totalComments,
    user,
    upVote,
    downVote,
}) {
    const handleUpvote = (event) => {
        event.stopPropagation();
        upVote(id);
    };
    return (
        <div className="thread-item" id={category}>
            <div className="thread-item-vote">
                <div className="thread-item-vote__buttons">
                    <span>{upVotesBy.length}</span>
                    <button type="button" onClick={handleUpvote}>
                        <AiOutlineArrowUp />
                    </button>
                </div>
                <div className="thread-item-vote__buttons">
                    <VoteButton handleOnClick={downVote}>
                        <AiOutlineArrowDown />
                    </VoteButton>
                    <span>{downVotesBy.length}</span>
                </div>
            </div>
            <Link to={`/${id}`} className="thread-item-content">
                <div className="thread-item-content__header">
                    <h3 title={title}>
                        {parse(
                            title.length > 50
                                ? `${title.substring(0, 50)}...`
                                : title
                        )}
                    </h3>
                    <span>
                        {/* eslint-disable react/jsx-one-expression-per-line */}
                        posted by <strong>{user.name}</strong>{" "}
                        {postedAt(createdAt)}
                    </span>
                </div>
                <div className="thread-item-content__body">
                    {parse(
                        body.length > 99 ? `${body.substring(0, 99)}...` : body
                    )}
                </div>
                <div className="thread-item-content__footer">
                    <TfiComment />
                    <span>{totalComments}</span>
                </div>
            </Link>
        </div>
    );
}

const usersShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
};

const threadItemShape = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalComments: PropTypes.number.isRequired,
    user: PropTypes.shape(usersShape).isRequired,
};

ThreadItem.propTypes = {
    ...threadItemShape,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
};

export { threadItemShape };

export default ThreadItem;
