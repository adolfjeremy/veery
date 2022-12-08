import { configureStore } from "@reduxjs/toolkit";
import leaderboardReducer from "./leaderboards/reducer";

const store = configureStore({
    reducer: {
        leaderboards: leaderboardReducer,
    },
});

export default store;
