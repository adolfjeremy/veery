import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { setAuthUserActionCreator } from "../authUser/action";

const ActionType = {
    RECEIVE_USER: "RECEIVE_USER",
};

function receiveUsersActionCreator(users) {
    return {
        type: ActionType.RECEIVE_USER,
        payload: {
            users,
        },
    };
}

function asyncRegisterUser({ name, email, password }) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.register({ name, email, password });
            const token = await api.login({ email, password });
            api.putAccessToken(token);
            const authUser = await api.getOwnProfile();

            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            alert(error.response.data.message);
        }
        dispatch(hideLoading());
    };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
