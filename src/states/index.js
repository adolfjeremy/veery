import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import leaderboardReducer from "./leaderboards/reducer";
import usersReducer from "./users/reducer";
import threadsReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import spinnerReducer from "./spinner/reducer";

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        leaderboards: leaderboardReducer,
        users: usersReducer,
        threads: threadsReducer,
        threadDetail: threadDetailReducer,
        loadingBar: loadingBarReducer,
        spinner: spinnerReducer,
    },
});

export default store;
