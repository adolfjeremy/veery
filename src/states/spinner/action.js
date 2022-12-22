const ActionType = {
    TOGGLE_SPINNER: "TOGGLE_SPINNER",
};

function spinnerActionCreator(spinner) {
    return {
        type: ActionType.TOGGLE_SPINNER,
        payload: { spinner },
    };
}

function showSpinner() {
    return (dispatch) => {
        dispatch(spinnerActionCreator(true));
    };
}

function hideSpinner() {
    return (dispatch) => {
        dispatch(spinnerActionCreator(false));
    };
}

// eslint-disable-next-line object-curly-newline
export { ActionType, spinnerActionCreator, showSpinner, hideSpinner };
