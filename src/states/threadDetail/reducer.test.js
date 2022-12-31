/* eslint-disable indent */
import threadDetailReducer from "./reducer";

/**
 * test scenario for threads reducer
 * - threadsDetailReducer
 *  - should return the initial state when given by unknown action
 *  - should return the thread detail when given by RECIEVE_THREAD_DETAIL action
 *  - should return the thread detail with new comment when given by ADD_COMMENT action
 *  - should return the thread detail with the upvoted thread detail
 *    when given by UP_VOTE_THREAD_DETAIL
 *  - should return the thread detail with the downvoted thread detail
 *    when given by DOWN_VOTE_THREAD_DETAIL
 *  - should return the thread detail without the downvoted/upvoted
 *    thread detail when given by NEUTRALIZE_VOTE_THREAD_DETAIL
 *  - should return the thread detail with upvoted comment when given by UP_VOTE_COMMENT action
 *  - should return the thread detail with downvoted comment when given by DOWN_VOTE_COMMENT action
 *  - should return the thread detail without downvoted/upvoted comment
 *    when given by NEUTRALIZE_VOTE_COMMENT action
 */

describe("threadDetailReducer function", () => {
    it("should return the initial state when given by unknown action", () => {
        const initialState = [];
        const action = { type: "UNKNOWN" };

        const nextState = threadDetailReducer(initialState, action);

        expect(nextState).toEqual(initialState);
    });

    it("should return the thread detail with new comment when given by ADD_COMMENT action", () => {
        const initialState = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [],
        };

        const action = {
            type: "ADD_COMMENT",
            payload: {
                comment: {
                    id: "comment-1",
                    content: "Ini adalah komentar pertama",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    owner: {
                        id: "users-1",
                        name: "John Doe",
                        avatar: "https://generated-image-url.jpg",
                    },
                    upVotesBy: [],
                    downVotesBy: [],
                },
            },
        };

        const nextState = threadDetailReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            comments: [action.payload.comment, ...initialState.comments],
        });
    });

    it("should return the thread detail when given by RECIEVE_THREAD_DETAIL action", () => {
        const initialState = {};

        const action = {
            type: "RECIEVE_THREAD_DETAIL",
            payload: {
                threadDetail: {
                    id: "thread-1",
                    title: "Thread Pertama",
                    body: "Ini adalah thread pertama",
                    category: "General",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    owner: {
                        id: "users-1",
                        name: "John Doe",
                        avatar: "https://generated-image-url.jpg",
                    },
                    upVotesBy: [],
                    downVotesBy: [],
                    comments: [],
                },
            },
        };
        const nextState = threadDetailReducer(initialState, action);

        expect(nextState).toEqual(action.payload.threadDetail);
    });

    it("should return the thread detail with the upvoted thread detail when given by UP_VOTE_THREAD_DETAIL", () => {
        const initialState = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [],
        };
        const initialState2 = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: ["users-2"],
            comments: [],
        };

        const action = {
            type: "UP_VOTE_THREAD_DETAIL",
            payload: {
                id: "thread-2",
                userId: "users-2",
            },
        };

        const nextState = threadDetailReducer(initialState, action);
        const nextState2 = threadDetailReducer(initialState2, action);
        const nextState3 = threadDetailReducer(nextState, action);

        expect(nextState).toEqual({
            ...initialState,
            upVotesBy: [action.payload.userId],
        });
        expect(nextState2).toEqual({
            ...initialState2,
            upVotesBy: [action.payload.userId],
            downVotesBy: [],
        });
        expect(nextState3).toEqual({
            ...nextState,
            upVotesBy: [action.payload.userId],
        });
    });

    it("should return the thread detail with the downvoted thread detailwhen given by DOWN_VOTE_THREAD_DETAIL", () => {
        const initialState = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [],
        };
        const initialState2 = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: ["users-2"],
            downVotesBy: [],
            comments: [],
        };

        const action = {
            type: "DOWN_VOTE_THREAD_DETAIL",
            payload: {
                id: "thread-1",
                userId: "users-2",
            },
        };

        const nextState = threadDetailReducer(initialState, action);
        const nextState2 = threadDetailReducer(initialState2, action);
        const nextState3 = threadDetailReducer(nextState, action);

        expect(nextState).toEqual({
            ...initialState,
            downVotesBy: [action.payload.userId],
        });
        expect(nextState2).toEqual({
            ...initialState2,
            upVotesBy: [],
            downVotesBy: [action.payload.userId],
        });
        expect(nextState3).toEqual({
            ...nextState,
            downVotesBy: [action.payload.userId],
        });
    });

    it("should return the thread detail without the downvoted/upvoted thread detail when given by NEUTRALIZE_VOTE_THREAD_DETAIL", () => {
        const initialState = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: ["users-2"],
            downVotesBy: [],
            comments: [],
        };

        const initialState2 = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: ["users-2"],
            comments: [],
        };

        const action = {
            type: "NEUTRALIZE_VOTE_THREAD_DETAIL",
            payload: {
                id: "thread-1",
                userId: "users-2",
            },
        };

        const nextState = threadDetailReducer(initialState, action);
        const nextState2 = threadDetailReducer(initialState2, action);
        const nextState3 = threadDetailReducer(nextState, action);

        expect(nextState).toEqual({
            ...initialState,
            upVotesBy: [],
        });
        expect(nextState2).toEqual({
            ...initialState2,
            downVotesBy: [],
        });
        expect(nextState3).toEqual(nextState2);
    });

    it("should return the thread detail with upvoted comment when given by UP_VOTE_COMMENT action", () => {
        const initialState = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [
                {
                    id: "comment-1",
                    content: "Ini adalah komentar pertama",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    owner: {
                        id: "users-1",
                        name: "John Doe",
                        avatar: "https://generated-image-url.jpg",
                    },
                    upVotesBy: [],
                    downVotesBy: [],
                },
            ],
        };

        const initialState2 = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [
                {
                    id: "comment-1",
                    content: "Ini adalah komentar pertama",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    owner: {
                        id: "users-1",
                        name: "John Doe",
                        avatar: "https://generated-image-url.jpg",
                    },
                    upVotesBy: [],
                    downVotesBy: ["users-2"],
                },
            ],
        };

        const action = {
            type: "UP_VOTE_COMMENT",
            payload: {
                commentId: "comment-1",
                userId: "users-2",
            },
        };

        const nextState = threadDetailReducer(initialState, action);
        const nextState2 = threadDetailReducer(initialState2, action);
        const nextState3 = threadDetailReducer(nextState, action);

        expect(nextState).toEqual({
            ...initialState,
            comments: [
                {
                    ...initialState.comments[0],
                    upVotesBy: [action.payload.userId],
                },
            ],
        });
        expect(nextState2).toEqual({
            ...initialState2,
            comments: [
                {
                    ...initialState2.comments[0],
                    upVotesBy: [action.payload.userId],
                    downVotesBy: [],
                },
            ],
        });
        expect(nextState3).toEqual(nextState2);
    });

    it("should return the thread detail with upvoted comment when given by DOWN_VOTE_COMMENT action", () => {
        const initialState = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [
                {
                    id: "comment-1",
                    content: "Ini adalah komentar pertama",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    owner: {
                        id: "users-1",
                        name: "John Doe",
                        avatar: "https://generated-image-url.jpg",
                    },
                    upVotesBy: [],
                    downVotesBy: [],
                },
            ],
        };

        const initialState2 = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [
                {
                    id: "comment-1",
                    content: "Ini adalah komentar pertama",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    owner: {
                        id: "users-1",
                        name: "John Doe",
                        avatar: "https://generated-image-url.jpg",
                    },
                    upVotesBy: ["users-2"],
                    downVotesBy: [],
                },
            ],
        };

        const action = {
            type: "DOWN_VOTE_COMMENT",
            payload: {
                commentId: "comment-1",
                userId: "users-2",
            },
        };

        const nextState = threadDetailReducer(initialState, action);
        const nextState2 = threadDetailReducer(initialState2, action);
        const nextState3 = threadDetailReducer(nextState, action);

        expect(nextState).toEqual({
            ...initialState,
            comments: [
                {
                    ...initialState.comments[0],
                    downVotesBy: [action.payload.userId],
                },
            ],
        });
        expect(nextState2).toEqual({
            ...initialState2,
            comments: [
                {
                    ...initialState2.comments[0],
                    upVotesBy: [],
                    downVotesBy: [action.payload.userId],
                },
            ],
        });
        expect(nextState3).toEqual(nextState2);
    });

    it("should return the thread detail without downvoted/upvoted comment when given by NEUTRALIZE_VOTE_COMMENT action", () => {
        const initialState = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [
                {
                    id: "comment-1",
                    content: "Ini adalah komentar pertama",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    owner: {
                        id: "users-1",
                        name: "John Doe",
                        avatar: "https://generated-image-url.jpg",
                    },
                    upVotesBy: [],
                    downVotesBy: ["users-2"],
                },
            ],
        };

        const initialState2 = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [
                {
                    id: "comment-1",
                    content: "Ini adalah komentar pertama",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    owner: {
                        id: "users-1",
                        name: "John Doe",
                        avatar: "https://generated-image-url.jpg",
                    },
                    upVotesBy: ["users-2"],
                    downVotesBy: [],
                },
            ],
        };

        const action = {
            type: "NEUTRALIZE_VOTE_COMMENT",
            payload: {
                commentId: "comment-1",
                userId: "users-2",
            },
        };

        const nextState = threadDetailReducer(initialState, action);
        const nextState2 = threadDetailReducer(initialState2, action);
        const nextState3 = threadDetailReducer(nextState, action);

        expect(nextState).toEqual({
            ...initialState,
            comments: [
                {
                    ...initialState.comments[0],
                    downVotesBy: [],
                },
            ],
        });
        expect(nextState2).toEqual({
            ...initialState2,
            comments: [
                {
                    ...initialState2.comments[0],
                    upVotesBy: [],
                },
            ],
        });
        expect(nextState3).toEqual(nextState2);
    });
});
