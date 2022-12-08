import api from "../../utils/api";

const ActionType = {
    SET_LEADERBOARDS: "SET_LEADERBOARDS",
};

function setLeaderbaordActionCreator(leaderboards) {
    return {
        type: ActionType.SET_LEADERBOARDS,
        payload: { leaderboards },
    };
}

function asyncSetLeaderboard() {
    return async (dispatch) => {
        try {
            const leaderboards = await api.getLeaderboards();

            dispatch(setLeaderbaordActionCreator(leaderboards));
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert("polmed");
        }
    };
}

export { ActionType, setLeaderbaordActionCreator, asyncSetLeaderboard };
