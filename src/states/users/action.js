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

export { ActionType, receiveUsersActionCreator };
