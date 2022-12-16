import api from "../../utils/api";

const ActionType = {
    RECIEVE_THREAD_DETAIL: "RECIEVE_THREAD_DETAIL",
    CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
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

export {
    ActionType,
    receiveThreadDetailActionCreator,
    clearThreadDetailActionCreator,
    asyncReceiveThreadDetail,
};
