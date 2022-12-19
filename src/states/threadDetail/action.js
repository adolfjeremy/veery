import api from "../../utils/api";

const ActionType = {
    RECIEVE_THREAD_DETAIL: "RECIEVE_THREAD_DETAIL",
    CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
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

function addCommentActionCreator(comment) {
    return {
        type: ActionType.ADD_COMMENT,
        payload: { comment },
    };
}

function upVoteCommentActionCreator({ threadId, commentId, userId }) {
    return {
        type: ActionType.UP_VOTE_COMMENT,
        payload: {
            threadId,
            commentId,
            userId,
        },
    };
}

function downVoteCommentActionCreator({ threadId, commentId, userId }) {
    return {
        type: ActionType.DOWN_VOTE_COMMENT,
        payload: {
            threadId,
            commentId,
            userId,
        },
    };
}

function neutralizeVoteCommentActioCreator({ threadId, commentId, userId }) {
    return {
        type: ActionType.NEUTRALIZE_VOTE_COMMENT,
        payload: {
            threadId,
            commentId,
            userId,
        },
    };
}

function asyncReceiveThreadDetail(threadId) {
    return async (dispatch) => {
        dispatch(clearThreadDetailActionCreator());
        try {
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(receiveThreadDetailActionCreator(threadDetail));
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error.message);
        }
    };
}

function asyncAddComment({ threadId, content }) {
    return async (dispatch) => {
        try {
            const threadComment = await api.addComment({ threadId, content });
            dispatch(addCommentActionCreator(threadComment));
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error.message);
        }
    };
}

function asyncUpVoteComment({ threadId, commentId }) {
    return async (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(
            upVoteCommentActionCreator({
                threadId,
                commentId,
                userId: authUser.id,
            })
        );
        try {
            await api.upVoteComment({ threadId, commentId });
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error.message);
        }
    };
}

function asyncDownVoteComment({ threadId, commentId }) {
    return async (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(
            downVoteCommentActionCreator({
                threadId,
                commentId,
                userId: authUser.id,
            })
        );
        try {
            await api.downVoteComment({ threadId, commentId });
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error.message);
        }
    };
}

function asyncNeutralizeVoteComment({ threadId, commentId }) {
    return async (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(
            neutralizeVoteCommentActioCreator({
                threadId,
                commentId,
                userId: authUser.id,
            })
        );
        try {
            await api.nuetralizeVoteComment({ threadId, commentId });
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error.message);
        }
    };
}

export {
    ActionType,
    receiveThreadDetailActionCreator,
    clearThreadDetailActionCreator,
    addCommentActionCreator,
    upVoteCommentActionCreator,
    downVoteCommentActionCreator,
    neutralizeVoteCommentActioCreator,
    asyncReceiveThreadDetail,
    asyncAddComment,
    asyncUpVoteComment,
    asyncDownVoteComment,
    asyncNeutralizeVoteComment,
};
