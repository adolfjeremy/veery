import threadsReducer from "./reducer";

/**
 * test scenario for threads reducer
 * - threadsReducer
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with new thread when given by ADD_THREAD action
 *  - should return the threads with the upvoted thread when given by UP_VOTE_THREAD
 *  - should return the threads with the downvoted thread when given by DOWN_VOTE_THREAD
 *  - should return the threads without the downvoted/upvoted
 *    thread when given by NEUTRALIZE_VOTE_THREAD
 */

describe("threadsReducer function", () => {
    it("should return the initial state when given by unknown action", () => {
        const initialState = [];
        const action = { type: "UNKNOWN" };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual(initialState);
    });

    it("should return the threads when given by RECEIVE_THREADS action", () => {
        const initialState = [];

        const action = {
            type: "RECEIVE_THREADS",
            payload: {
                threads: [
                    {
                        id: "thread-1",
                        title: "Thread Pertama",
                        body: "Ini adalah thread pertama",
                        category: "General",
                        createdAt: "2021-06-21T07:00:00.000Z",
                        ownerId: "users-1",
                        upVotesBy: [],
                        downVotesBy: [],
                        totalComments: 0,
                    },
                    {
                        id: "thread-2",
                        title: "Thread Kedua",
                        body: "Ini adalah thread kedua",
                        category: "General",
                        createdAt: "2021-06-21T07:00:00.000Z",
                        ownerId: "users-2",
                        upVotesBy: [],
                        downVotesBy: [],
                        totalComments: 0,
                    },
                ],
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual(action.payload.threads);
    });

    it("should return the threads with new thread when given by ADD_THREAD action", () => {
        const initialState = [
            {
                id: "thread-1",
                title: "Thread Pertama",
                body: "Ini adalah thread pertama",
                category: "General",
                createdAt: "2021-06-21T07:00:00.000Z",
                ownerId: "users-1",
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0,
            },
        ];

        const action = {
            type: "ADD_THREAD",
            payload: {
                thread: {
                    id: "thread-2",
                    title: "Thread Kedua",
                    body: "Ini adalah thread kedua",
                    category: "General",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    ownerId: "users-2",
                    upVotesBy: [],
                    downVotesBy: [],
                    totalComments: 0,
                },
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual([action.payload.thread, ...initialState]);
    });

    it("should return the threads with the upvoted thread when given by UP_VOTE_THREAD", () => {
        const initialState = [
            {
                id: "thread-1",
                title: "Thread Pertama",
                body: "Ini adalah thread pertama",
                category: "General",
                createdAt: "2021-06-21T07:00:00.000Z",
                ownerId: "users-1",
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0,
            },
        ];
        const initialState2 = [
            {
                id: "thread-1",
                title: "Thread Pertama",
                body: "Ini adalah thread pertama",
                category: "General",
                createdAt: "2021-06-21T07:00:00.000Z",
                ownerId: "users-1",
                upVotesBy: [],
                downVotesBy: ["users-2"],
                totalComments: 0,
            },
        ];

        const action = {
            type: "UP_VOTE_THREAD",
            payload: {
                id: "thread-1",
                userId: "users-2",
            },
        };

        const nextState = threadsReducer(initialState, action);
        const nextState2 = threadsReducer(initialState2, action);
        const nextState3 = threadsReducer(nextState, action);

        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [action.payload.userId],
            },
        ]);

        expect(nextState2).toEqual([
            {
                ...initialState2[0],
                upVotesBy: [action.payload.userId],
                downVotesBy: [],
            },
        ]);

        expect(nextState3).toEqual(nextState2);
    });

    it("should return the threads with the downvoted thread when given by DOWN_VOTE_THREAD", () => {
        const initialState = [
            {
                id: "thread-1",
                title: "Thread Pertama",
                body: "Ini adalah thread pertama",
                category: "General",
                createdAt: "2021-06-21T07:00:00.000Z",
                ownerId: "users-1",
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0,
            },
        ];
        const initialState2 = [
            {
                id: "thread-1",
                title: "Thread Pertama",
                body: "Ini adalah thread pertama",
                category: "General",
                createdAt: "2021-06-21T07:00:00.000Z",
                ownerId: "users-1",
                upVotesBy: ["users-2"],
                downVotesBy: [],
                totalComments: 0,
            },
        ];

        const action = {
            type: "DOWN_VOTE_THREAD",
            payload: {
                id: "thread-1",
                userId: "users-2",
            },
        };

        const nextState = threadsReducer(initialState, action);
        const nextState2 = threadsReducer(initialState2, action);
        const nextState3 = threadsReducer(nextState, action);

        expect(nextState).toEqual([
            {
                ...initialState[0],
                downVotesBy: [action.payload.userId],
            },
        ]);

        expect(nextState2).toEqual([
            {
                ...initialState2[0],
                upVotesBy: [],
                downVotesBy: [action.payload.userId],
            },
        ]);

        expect(nextState3).toEqual(nextState2);
    });

    it("should return the threads without the downvoted/upvoted thread when given by NEUTRALIZE_VOTE_THREAD", () => {
        const initialState = [
            {
                id: "thread-1",
                title: "Thread Pertama",
                body: "Ini adalah thread pertama",
                category: "General",
                createdAt: "2021-06-21T07:00:00.000Z",
                ownerId: "users-1",
                upVotesBy: [],
                downVotesBy: ["user-2"],
                totalComments: 0,
            },
        ];

        const initialState2 = [
            {
                id: "thread-1",
                title: "Thread Pertama",
                body: "Ini adalah thread pertama",
                category: "General",
                createdAt: "2021-06-21T07:00:00.000Z",
                ownerId: "users-1",
                upVotesBy: ["user-2"],
                downVotesBy: [],
                totalComments: 0,
            },
        ];

        const action = {
            type: "NEUTRALIZE_VOTE_THREAD",
            payload: {
                id: "thread-1",
                userId: "user-2",
            },
        };

        const nextState = threadsReducer(initialState, action);
        const nextState2 = threadsReducer(initialState2, action);
        const nextState3 = threadsReducer(initialState, action);

        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [],
                downVotesBy: [],
            },
        ]);
        expect(nextState2).toEqual([
            {
                ...initialState[0],
                upVotesBy: [],
                downVotesBy: [],
            },
        ]);
        expect(nextState3).toEqual(nextState2);
    });
});
