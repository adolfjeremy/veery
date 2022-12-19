/* eslint-disable indent */
import { ActionType } from "./action";

function threadDetailReducer(threadDetail = null, action = {}) {
    switch (action.type) {
        case ActionType.RECIEVE_THREAD_DETAIL:
            return action.payload.threadDetail;
        case ActionType.ADD_COMMENT:
            return {
                ...threadDetail,
                comments: [action.payload.comment, ...threadDetail.comments],
            };
        case ActionType.UP_VOTE_COMMENT:
            return {
                ...threadDetail,
                comments: threadDetail.comments.map((comment) => {
                    if (comment.id === action.payload.commentId) {
                        return {
                            ...comment,
                            downVotesBy: comment.downVotesBy.includes(
                                action.payload.userId
                            )
                                ? comment.downVotesBy.filter(
                                      (id) => id !== action.payload.userId
                                  )
                                : comment.downVotesBy,
                            upVotesBy: comment.upVotesBy.includes(
                                action.payload.userId
                            )
                                ? comment.upVotesBy
                                : comment.upVotesBy.concat([
                                      action.payload.userId,
                                  ]),
                        };
                    }
                    return comment;
                }),
            };
        case ActionType.DOWN_VOTE_COMMENT:
            return {
                ...threadDetail,
                comments: threadDetail.comments.map((comment) => {
                    if (comment.id === action.payload.commentId) {
                        return {
                            ...comment,
                            upVotesBy: comment.upVotesBy.includes(
                                action.payload.userId
                            )
                                ? comment.upVotesBy.filter(
                                      (id) => id !== action.payload.userId
                                  )
                                : comment.upVotesBy,
                            downVotesBy: comment.downVotesBy.includes(
                                action.payload.userId
                            )
                                ? comment.downVotesBy
                                : comment.downVotesBy.concat([
                                      action.payload.userId,
                                  ]),
                        };
                    }
                    return comment;
                }),
            };
        case ActionType.NEUTRALIZE_VOTE_COMMENT:
            return {
                ...threadDetail,
                comments: threadDetail.comments.map((comment) => {
                    if (comment.id === action.payload.commentId) {
                        return {
                            ...comment,
                            upVotesBy: comment.upVotesBy.includes(
                                action.payload.userId
                            )
                                ? comment.upVotesBy.filter(
                                      (id) => id !== action.payload.userId
                                  )
                                : comment.upVotesBy,
                            downVotesBy: comment.downVotesBy.includes(
                                action.payload.userId
                            )
                                ? comment.downVotesBy.filter(
                                      (id) => id !== action.payload.userId
                                  )
                                : comment.downVotesBy,
                        };
                    }
                    return comment;
                }),
            };
        default:
            return threadDetail;
    }
}

export default threadDetailReducer;
