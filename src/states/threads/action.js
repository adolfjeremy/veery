import api from "../../utils/api";

const ActionType = {
    RECEIVE_THREADS: "RECEIVE_THREADS",
    ADD_THREAD: "ADD_THREAD",
};

function receiveThreadsActionCreator(threads) {
    return {
        type: ActionType.RECEIVE_THREADS,
        payload: {
            threads,
        },
    };
}

function addThreadActionCreator(thread) {
    return {
        type: ActionType.ADD_THREAD,
        payload: {
            thread,
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

function asyncAddThread({ title, body }) {
    return async (dispatch) => {
        try {
            const thread = await api.createThread({ title, body });
            dispatch(addThreadActionCreator(thread));
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error.message);
        }
    };
}

export {
    ActionType,
    receiveThreadsActionCreator,
    addThreadActionCreator,
    asyncReceiveThreads,
    asyncAddThread,
};
