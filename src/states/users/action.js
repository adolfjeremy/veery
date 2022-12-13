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
        try {
            await api.register({ name, email, password });
            const token = await api.login({ email, password });
            api.putAccessToken(token);
            const authUser = await api.getOwnProfile();

            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error.message);
        }
    };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
