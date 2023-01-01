import { showLoading, hideLoading } from "react-redux-loading-bar";
import { spinnerActionCreator } from "../spinner/action";
import api from "../../utils/api";

const ActionType = {
    RECIEVE_THREAD_DETAIL: "RECIEVE_THREAD_DETAIL",
    CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
    UP_VOTE_THREAD_DETAIL: "UP_VOTE_THREAD_DETAIL",
    DOWN_VOTE_THREAD_DETAIL: "DOWN_VOTE_THREAD_DETAIL",
    NEUTRALIZE_VOTE_THREAD_DETAIL: "NEUTRALIZE_VOTE_THREAD_DETAIL",
    ADD_COMMENT: "ADD_COMMENT",
    UP_VOTE_COMMENT: "UP_VOTE_COMMENT",
    DOWN_VOTE_COMMENT: "DOWN_VOTE_COMMENT",
    NEUTRALIZE_VOTE_COMMENT: "NEUTRALIZE_VOTE_COMMENT",
};

function receiveThreadDetailActionCreator(threadDetail) {
    return {
        type: ActionType.RECIEVE_THREAD_DETAIL,
        payload: {
            threadDetail,
        },
    };
}

function clearThreadDetailActionCreator() {
    return {
        type: ActionType.CLEAR_THREAD_DETAIL,
    };
}

function upVoteThreadDetailActionCreator({ id, userId }) {
    return {
        type: ActionType.UP_VOTE_THREAD_DETAIL,
        payload: {
            id,
            userId,
        },
    };
}

function downVoteThreadDetailActionCreator({ id, userId }) {
    return {
        type: ActionType.DOWN_VOTE_THREAD_DETAIL,
        payload: {
            id,
            userId,
        },
    };
}

function neutralizeVoteThreadDetailActionCreator({ id, userId }) {
    return {
        type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
        payload: {
            id,
            userId,
        },
    };
}

function addCommentActionCreator(comment) {
    return {
        type: ActionType.ADD_COMMENT,
        payload: { comment },
    };
}

function upVoteCommentActionCreator({ commentId, userId }) {
    return {
        type: ActionType.UP_VOTE_COMMENT,
        payload: {
            commentId,
            userId,
        },
    };
}

function downVoteCommentActionCreator({ commentId, userId }) {
    return {
        type: ActionType.DOWN_VOTE_COMMENT,
        payload: {
            commentId,
            userId,
        },
    };
}

function neutralizeVoteCommentActioCreator({ commentId, userId }) {
    return {
        type: ActionType.NEUTRALIZE_VOTE_COMMENT,
        payload: {
            commentId,
            userId,
        },
    };
}

function asyncReceiveThreadDetail(threadId) {
    return async (dispatch) => {
        dispatch(spinnerActionCreator(true));
        dispatch(showLoading());
        dispatch(clearThreadDetailActionCreator());
        try {
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(receiveThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
        dispatch(spinnerActionCreator(false));
    };
}

function asyncUpVoteThreadDetail(id) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser } = getState();
        dispatch(upVoteThreadDetailActionCreator({ id, userId: authUser.id }));
        try {
            await api.upVoteThread(id);
        } catch (error) {
            alert(error.message);
            dispatch(
                upVoteThreadDetailActionCreator({ id, userId: authUser.id })
            );
        }
        dispatch(hideLoading());
    };
}

function asyncDownVoteThreadDetail(id) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser } = getState();
        dispatch(
            downVoteThreadDetailActionCreator({ id, userId: authUser.id })
        );
        try {
            await api.downVoteThread(id);
        } catch (error) {
            alert(error.message);
            dispatch(
                downVoteThreadDetailActionCreator({ id, userId: authUser.id })
            );
        }
        dispatch(hideLoading());
    };
}

function asyncNeutralizeVoteThreadDetail(id) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser } = getState();
        dispatch(
            neutralizeVoteThreadDetailActionCreator({ id, userId: authUser.id })
        );
        try {
            await api.neutralizeVoteThread(id);
        } catch (error) {
            alert(error.message);
            dispatch(
                neutralizeVoteThreadDetailActionCreator({
                    id,
                    userId: authUser.id,
                })
            );
        }
        dispatch(hideLoading());
    };
}

function asyncAddComment({ threadId, content }) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const threadComment = await api.addComment({ threadId, content });
            dispatch(addCommentActionCreator(threadComment));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

function asyncUpVoteComment({ threadId, commentId }) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser } = getState();
        dispatch(
            upVoteCommentActionCreator({
                commentId,
                userId: authUser.id,
            })
        );
        try {
            await api.upVoteComment({ threadId, commentId });
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

function asyncDownVoteComment({ threadId, commentId }) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser } = getState();
        dispatch(
            downVoteCommentActionCreator({
                commentId,
                userId: authUser.id,
            })
        );
        try {
            await api.downVoteComment({ threadId, commentId });
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

function asyncNeutralizeVoteComment({ threadId, commentId }) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser } = getState();
        dispatch(
            neutralizeVoteCommentActioCreator({
                commentId,
                userId: authUser.id,
            })
        );
        try {
            await api.nuetralizeVoteComment({ threadId, commentId });
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

export {
    ActionType,
    receiveThreadDetailActionCreator,
    clearThreadDetailActionCreator,
    upVoteThreadDetailActionCreator,
    downVoteThreadDetailActionCreator,
    neutralizeVoteThreadDetailActionCreator,
    addCommentActionCreator,
    upVoteCommentActionCreator,
    downVoteCommentActionCreator,
    neutralizeVoteCommentActioCreator,
    asyncReceiveThreadDetail,
    asyncUpVoteThreadDetail,
    asyncDownVoteThreadDetail,
    asyncNeutralizeVoteThreadDetail,
    asyncAddComment,
    asyncUpVoteComment,
    asyncDownVoteComment,
    asyncNeutralizeVoteComment,
};
