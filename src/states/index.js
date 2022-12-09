import { configureStore } from "@reduxjs/toolkit";
import leaderboardReducer from "./leaderboards/reducer";
import threadsReducer from "./threads/reducer";

const store = configureStore({
    reducer: {
        leaderboards: leaderboardReducer,
        threads: threadsReducer,
    },
});

export default store;
