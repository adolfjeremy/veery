/* eslint-disable no-underscore-dangle */
import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { spinnerActionCreator } from "../spinner/action";
import { receiveThreadsActionCreator } from "../threads/action";
import { receiveUsersActionCreator } from "../users/action";
import asyncPopulateUsersAndThreads from "./action";

/**
 * skenario test
 *
 * - asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const fakeUsersResponse = [
    {
        avatar: "https://generated-image-url.jpg",
        email: "john@example.com",
        id: "john_doe",
        name: "John Doe",
    },
    {
        avatar: "https://generated-image-url.jpg",
        email: "jane@example.com",
        id: "jane_doe",
        name: "Jane Doe",
    },
];

const fakeThreadsResponse = [
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
];

describe("asyncPopulateUsersAndThreads thunk", () => {
    beforeEach(() => {
        api._getAllUsers = api.getAllUsers;
        api._getAllThreads = api.getAllThreads;
    });
    afterEach(() => {
        api.getAllUsers = api._getAllUsers;
        api.getAllThreads = api._getAllThreads;

        delete api._getAllUsers;
        delete api._getAllThreads;
    });

    it("should dispatch action correctly when data fetching success", async () => {
        api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
        api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

        const dispatch = jest.fn();

        await asyncPopulateUsersAndThreads()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(spinnerActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(
            receiveUsersActionCreator(fakeUsersResponse)
        );
        expect(dispatch).toHaveBeenCalledWith(
            receiveThreadsActionCreator(fakeThreadsResponse)
        );
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(dispatch).toHaveBeenCalledWith(spinnerActionCreator(false));
    });
});
