/* eslint-disable indent */
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
                downVotesBy: ["user-2"],
                totalComments: 0,
            },
        ];

        const action = {
            type: "UP_VOTE_THREAD",
            payload: {
                id: "thread-1",
                userId: "user-2",
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [
                    ...initialState[0].upVotesBy,
                    action.payload.userId,
                ],
                downVotesBy: [
                    ...(initialState[0].downVotesBy.includes(
                        action.payload.userId
                    )
                        ? initialState[0].downVotesBy.filter(
                              (id) => id !== action.payload.userId
                          )
                        : initialState[0].downVotesBy),
                ],
            },
        ]);
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
                upVotesBy: ["user-2"],
                downVotesBy: [],
                totalComments: 0,
            },
        ];

        const action = {
            type: "DOWN_VOTE_THREAD",
            payload: {
                id: "thread-1",
                userId: "user-2",
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual([
            {
                ...initialState[0],
                downVotesBy: [
                    ...initialState[0].downVotesBy,
                    action.payload.userId,
                ],
                upVotesBy: [
                    ...(initialState[0].upVotesBy.includes(
                        action.payload.userId
                    )
                        ? initialState[0].upVotesBy.filter(
                              (id) => id !== action.payload.userId
                          )
                        : initialState[0].upVotesBy),
                ],
            },
        ]);
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

        const action = {
            type: "NEUTRALIZE_VOTE_THREAD",
            payload: {
                id: "thread-1",
                userId: "user-2",
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [
                    ...(initialState[0].upVotesBy.includes(
                        action.payload.userId
                    )
                        ? initialState[0].upVotesBy.filter(
                              (id) => id !== action.payload.userId
                          )
                        : initialState[0].upVotesBy),
                ],
                downVotesBy: [
                    ...(initialState[0].downVotesBy.includes(
                        action.payload.userId
                    )
                        ? initialState[0].downVotesBy.filter(
                              (id) => id !== action.payload.userId
                          )
                        : initialState[0].downVotesBy),
                ],
            },
        ]);
    });
});
