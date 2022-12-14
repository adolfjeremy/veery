import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
    RECEIVE_THREADS: "RECEIVE_THREADS",
    ADD_THREAD: "ADD_THREAD",
    UP_VOTE_THREAD: "UP_VOTE_THREAD",
    DOWN_VOTE_THREAD: "DOWN_VOTE_THREAD",
    NEUTRALIZE_VOTE_THREAD: "NEUTRALIZE_VOTE_THREAD",
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

function upVoteThreadActionCreator({ id, userId }) {
    return {
        type: ActionType.UP_VOTE_THREAD,
        payload: {
            id,
            userId,
        },
    };
}

function downVoteThreadActionCreator({ id, userId }) {
    return {
        type: ActionType.DOWN_VOTE_THREAD,
        payload: {
            id,
            userId,
        },
    };
}

function neutralizeVoteThreadActionCreator({ id, userId }) {
    return {
        type: ActionType.NEUTRALIZE_VOTE_THREAD,
        payload: {
            id,
            userId,
        },
    };
}

function asyncAddThread({ title, body }) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const thread = await api.createThread({ title, body });
            dispatch(addThreadActionCreator(thread));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}
function asyncUpVoteThread(id) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser } = getState();
        dispatch(upVoteThreadActionCreator({ id, userId: authUser.id }));
        try {
            await api.upVoteThread(id);
        } catch (error) {
            alert(error.message);
            dispatch(upVoteThreadActionCreator({ id, userId: authUser.id }));
        }
        dispatch(hideLoading());
    };
}

function asyncDownVoteThread(id) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser } = getState();
        dispatch(downVoteThreadActionCreator({ id, userId: authUser.id }));
        try {
            await api.downVoteThread(id);
        } catch (error) {
            alert(error.message);
            dispatch(downVoteThreadActionCreator({ id, userId: authUser.id }));
        }
        dispatch(hideLoading());
    };
}

function asyncNeutralizeVoteThread(id) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser } = getState();
        dispatch(
            neutralizeVoteThreadActionCreator({ id, userId: authUser.id })
        );
        try {
            await api.neutralizeVoteThread(id);
        } catch (error) {
            alert(error.message);
            dispatch(
                neutralizeVoteThreadActionCreator({ id, userId: authUser.id })
            );
        }
        dispatch(hideLoading());
    };
}

export {
    ActionType,
    receiveThreadsActionCreator,
    addThreadActionCreator,
    upVoteThreadActionCreator,
    downVoteThreadActionCreator,
    neutralizeVoteThreadActionCreator,
    asyncAddThread,
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncNeutralizeVoteThread,
};
