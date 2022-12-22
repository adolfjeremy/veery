import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import VoteButton from "./VoteButton";
import AvatarSmall from "./AvatarSmall";
import postedAt from "../utils";
import { authUserShape } from "./HeaderBar";

function ThreadDetail({
    authUser,
    id,
    title,
    body,
    createdAt,
    owner,
    upVotesBy,
    downVotesBy,
    upVote,
    downVote,
    neutralizeVote,
}) {
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
                                upVotesBy.includes(authUser.id) ? "voted" : ""
                            }
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
                                downVotesBy.includes(authUser.id) ? "voted" : ""
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
            <div className="thread-item-content">
                <div className="thread-item-content__header">
                    <h3>{title}</h3>
                    <span>
                        {/* eslint-disable react/jsx-one-expression-per-line */}
                        posted by <AvatarSmall image={owner.avatar} />
                        <strong>{owner.name} </strong> {postedAt(createdAt)}
                    </span>
                </div>
                <div className="thread-item-content__body">{parse(body)}</div>
            </div>
        </div>
    );
}

ThreadDetail.propTypes = {
    authUser: PropTypes.shape(authUserShape),
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape(authUserShape),
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    neutralizeVote: PropTypes.func.isRequired,
};

export default ThreadDetail;
