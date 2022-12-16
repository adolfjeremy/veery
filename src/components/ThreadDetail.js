/* eslint-disable react/prop-types */
import React from "react";
import parse from "html-react-parser";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import VoteButton from "./VoteButton";
import AvatarSmall from "./AvatarSmall";
import postedAt from "../utils";

function ThreadDetail({
    title,
    body,
    createdAt,
    owner,
    upVotesBy,
    downVotesBy,
    comments,
}) {
    return (
        <div className="thread-item">
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
            <div className="thread-item-content">
                <div className="thread-item-content__header">
                    <h3 title={title}>{parse(title)}</h3>
                    <span>
                        {/* eslint-disable react/jsx-one-expression-per-line */}
                        posted by <AvatarSmall image={owner.avatar} />
                        <strong>{owner.name} </strong> {postedAt(createdAt)}
                    </span>
                </div>
                <div className="thread-item-content__body">{parse(body)}</div>
                <div className="thread-item-content__footer">
                    <TfiComment />
                    <span>{Object.keys(comments).length}</span>
                </div>
            </div>
        </div>
    );
}

export default ThreadDetail;
