/* eslint-disable no-underscore-dangle */
import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { addThreadActionCreator, asyncAddThread } from "./action";

/**
 * skenario test
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const fakeAddThreadResponse = {
    body: "Ini adalah thread pertama",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    upVotesBy: [],
    id: "thread-1",
    ownerId: "users-1",
    title: "Thread Pertama",
    totalComments: 0,
    downVotesBy: [],
};

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncAddThread thunk", () => {
    beforeEach(() => {
        api._createThread = api.createThread;
    });
    afterEach(() => {
        api.createThread = api._createThread;

        delete api._createThread;
    });

    it("should dispatch action correctly when data fetching success", async () => {
        api.createThread = () => Promise.resolve(fakeAddThreadResponse);

        const dispatch = jest.fn();

        await asyncAddThread({
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
        })(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(
            addThreadActionCreator(fakeAddThreadResponse)
        );
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it("should dispatch action and call alert correctly when data fetching failed", async () => {
        api.createThread = () => Promise.reject(fakeErrorResponse);

        const dispatch = jest.fn();
        window.alert = jest.fn();

        await asyncAddThread({
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
        })(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
});
