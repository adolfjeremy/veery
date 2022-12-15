/* eslint-disable indent */
import { ActionType } from "./action";

function threadsReducer(threads = [], action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_THREADS:
            return action.payload.threads;
        case ActionType.ADD_THREAD:
            return [action.payload.thread, ...threads];
        case ActionType.UP_VOTE_THREAD:
            return threads.map((thread) => {
                if (thread.id === action.payload.id) {
                    return {
                        ...thread,
                        upVotesBy: thread.upVotesBy.find(
                            (id) => id === action.payload.userId
                        )
                            ? thread.upVotesBy.filter(
                                  (id) => id !== action.payload.userId
                              )
                            : thread.upVotesBy.concat([action.payload.userId]),
                    };
                }
                return thread;
            });
        default:
            return threads;
    }
}

export default threadsReducer;
