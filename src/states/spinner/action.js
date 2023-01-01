const ActionType = {
    TOGGLE_SPINNER: "TOGGLE_SPINNER",
};

function spinnerActionCreator(spinner) {
    return {
        type: ActionType.TOGGLE_SPINNER,
        payload: { spinner },
    };
}

export { ActionType, spinnerActionCreator };
