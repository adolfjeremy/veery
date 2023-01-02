/**
 * test scenario for users reducer
 * - threadsReducer
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_USER action
 */

import usersReducer from "./reducer";

describe("usersReducer function", () => {
    it("should return the initial state when given by unknown action", () => {
        const initialState = [];

        const action = { type: "UNKNOWN" };

        const nextState = usersReducer(initialState, action);

        expect(nextState).toEqual(initialState);
    });

    it("should return the users when given by RECEIVE_USER action", () => {
        const initialState = [];

        const action = {
            type: "RECEIVE_USER",
            payload: {
                users: [
                    {
                        id: "john_doe",
                        name: "John Doe",
                        email: "john@example.com",
                        avatar: "https://generated-image-url.jpg",
                    },
                    {
                        id: "jane_doe",
                        name: "Jane Doe",
                        email: "jane@example.com",
                        avatar: "https://generated-image-url.jpg",
                    },
                ],
            },
        };

        const nextState = usersReducer(initialState, action);

        expect(nextState).toEqual(action.payload.users);
    });
});
