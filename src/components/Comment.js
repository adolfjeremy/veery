import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import VoteButton from "./VoteButton";
import Avatar from "./Avatar";

function Comment() {
    return (
        <div className="comment-container">
            <h2>Comment</h2>
            <div className="comment-list">
                <div className="comment-item">
                    <div className="thread-item-vote">
                        <div className="thread-item-vote__buttons">
                            <span>3</span>
                            <VoteButton>
                                <AiOutlineArrowUp />
                            </VoteButton>
                        </div>
                        <div className="thread-item-vote__buttons">
                            <VoteButton>
                                <AiOutlineArrowDown />
                            </VoteButton>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="comment-item-content">
                        <div className="comment-item-content__header">
                            <Avatar image="https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random" />
                            <span className="username">Polmed123</span>
                            <span>3 h</span>
                        </div>
                        <div className="comment-item-content__body">
                            Menurut teman-teman, bagaimana pengalaman belajar
                            kelas React di Dicoding? Apakah mudah ataukah sulit?
                            Yuk, ceritakan di sini.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
