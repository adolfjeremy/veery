import api from "../../utils/api";

const ActionType = {
    RECIEVE_THREAD_DETAIL: "RECIEVE_THREAD_DETAIL",
    CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
    ADD_COMMENT: "ADD_COMMENT",
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

export {
    ActionType,
    receiveThreadDetailActionCreator,
    clearThreadDetailActionCreator,
    addCommentActionCreator,
    asyncReceiveThreadDetail,
    asyncAddComment,
};
