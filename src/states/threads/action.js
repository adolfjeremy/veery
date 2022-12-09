import api from "../../utils/api";

const ActionType = {
    RECEIVE_THREADS: "RECEIVE_THREADS",
};

function receiveThreadsActionCreator(threads) {
    return {
        type: ActionType.RECEIVE_THREADS,
        payload: {
            threads,
        },
    };
}

function asyncReceiveThreads() {
    return async (dispatch) => {
        try {
            const threads = await api.getAllThreads();
            dispatch(receiveThreadsActionCreator(threads));
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert("polmed");
        }
    };
}

export { ActionType, receiveThreadsActionCreator, asyncReceiveThreads };
