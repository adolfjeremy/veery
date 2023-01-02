/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import VoteButton from "./VoteButton";
import Avatar from "./Avatar";
import postedAt from "../utils";
import { authUserShape } from "./HeaderBar";

function ThreadItem({
    authUser,
    id,
    title,
    body,
    createdAt,
    upVotesBy,
    downVotesBy,
    totalComments,
    user,
    upVote,
    downVote,
    neutralizeVote,
}) {
    const navigate = useNavigate();

    const handleUpvote = (event) => {
        event.stopPropagation();
        upVote(id);
    };
    const handleDownvote = (event) => {
        event.stopPropagation();
        downVote(id);
    };
    const handleNeutralizeThreadVote = (event) => {
        event.stopPropagation();
        neutralizeVote(id);
    };

    const onThreadClick = () => {
        navigate(`/threads/${id}`);
    };

    const onThreadPress = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            navigate(`/threads/${id}`);
        }
    };
    return (
        <div className="thread-item">
            {authUser === null ? (
                <div className="thread-item-vote">
                    <div className="thread-item-vote__buttons">
                        <span>{upVotesBy.length}</span>
                        <VoteButton>
                            <AiOutlineArrowUp />
                        </VoteButton>
                    </div>
                    <div className="thread-item-vote__buttons">
                        <VoteButton>
                            <AiOutlineArrowDown />
                        </VoteButton>
                        <span>{downVotesBy.length}</span>
                    </div>
                </div>
            ) : (
                <div className="thread-item-vote">
                    <div className="thread-item-vote__buttons">
                        <span>{upVotesBy.length}</span>
                        <VoteButton
                            className={
                                upVotesBy?.includes(authUser.id) ? "voted" : ""
                            }
                            type="button"
                            handleOnClick={
                                upVotesBy.includes(authUser.id)
                                    ? handleNeutralizeThreadVote
                                    : handleUpvote
                            }
                        >
                            <AiOutlineArrowUp />
                        </VoteButton>
                    </div>
                    <div className="thread-item-vote__buttons">
                        <VoteButton
                            className={
                                downVotesBy?.includes(authUser.id)
                                    ? "voted"
                                    : ""
                            }
                            handleOnClick={
                                downVotesBy.includes(authUser.id)
                                    ? handleNeutralizeThreadVote
                                    : handleDownvote
                            }
                        >
                            <AiOutlineArrowDown />
                        </VoteButton>
                        <span>{downVotesBy.length}</span>
                    </div>
                </div>
            )}
            <div
                className="thread-item-content"
                onClick={onThreadClick}
                onKeyDown={onThreadPress}
            >
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
                        posted by <Avatar image={user.avatar} type="sm" />
                        <strong>{user.name} </strong> {postedAt(createdAt)}
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
            </div>
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
    createdAt: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalComments: PropTypes.number.isRequired,
    user: PropTypes.shape(usersShape).isRequired,
};

ThreadItem.propTypes = {
    authUser: PropTypes.shape(authUserShape),
    ...threadItemShape,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    neutralizeVote: PropTypes.func.isRequired,
};

export { threadItemShape };

export default ThreadItem;
