import { configureStore } from "@reduxjs/toolkit";
import leaderboardReducer from "./leaderboards/reducer";
import usersReducer from "./users/reducer";
import threadsReducer from "./threads/reducer";

const store = configureStore({
    reducer: {
        leaderboards: leaderboardReducer,
        users: usersReducer,
        threads: threadsReducer,
    },
});

export default store;
