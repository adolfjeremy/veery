import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../threads/action";
import { spinnerActionCreator } from "../spinner/action";

function asyncPopulateUsersAndThreads() {
    return async (dispatch) => {
        dispatch(spinnerActionCreator(true));
        dispatch(showLoading());
        try {
            const users = await api.getAllUsers();
            const threads = await api.getAllThreads();

            dispatch(receiveUsersActionCreator(users));
            dispatch(receiveThreadsActionCreator(threads));
        } catch (error) {
            alert(error.response.data.message);
        }
        dispatch(hideLoading());
        dispatch(spinnerActionCreator(false));
    };
}

export default asyncPopulateUsersAndThreads;
