import { ActionType } from "./action";

function spinnerReducer(spinner = false, action = {}) {
    switch (action.type) {
        case ActionType.TOGGLE_SPINNER:
            return action.payload.spinner;
        default:
            return spinner;
    }
}

export default spinnerReducer;
