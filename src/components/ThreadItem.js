/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import VoteButton from "./VoteButton";

function ThreadItem() {
    return (
        <div className="thread-item">
            <div className="thread-item-vote">
                <div className="thread-item-vote__buttons">
                    <span>20</span>
                    <VoteButton>
                        <AiOutlineArrowUp />
                    </VoteButton>
                </div>
                <div className="thread-item-vote__buttons">
                    <VoteButton>
                        <AiOutlineArrowDown />
                    </VoteButton>
                    <span>3</span>
                </div>
            </div>
            <div className="thread-item-content">
                <div className="thread-item-content__header">
                    <h3>New Patch</h3>
                    <span>
                        posted by
                        <strong> KlapDota </strong>
                        at 6 December 2022
                    </span>
                </div>
                <div className="thread-item-content__body">
                    <p>
                        People always say "give new patch" after a while, but I
                        sometimes feel like we haven't explored even 10% of the
                        game when shit like this happens....
                    </p>
                </div>
                <div className="thread-item-content__footer">
                    <TfiComment />
                    <span>3</span>
                </div>
            </div>
        </div>
    );
}

export default ThreadItem;
