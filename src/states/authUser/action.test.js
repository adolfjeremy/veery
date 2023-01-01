/* eslint-disable no-underscore-dangle */
import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { asyncSetAuthUser, setAuthUserActionCreator } from "./action";

/**
 * skenario test
 *
 * - asyncSetAuthUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
const fakeTokenResponse = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

const fakeOwnUserResponse = {
    id: "john_doe",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://generated-image-url.jpg",
};

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncSetAuthUser thunk", () => {
    beforeEach(() => {
        api._login = api.login;
        api._getOwnProfile = api.getOwnProfile;
        api._putAccessToken = api.putAccessToken;
    });
    afterEach(() => {
        api.login = api._login;
        api.getOwnProfile = api._getOwnProfile;
        api.putAccessToken = api._putAccessToken;

        delete api._login;
        delete api._getOwnProfile;
        delete api._putAccessToken;
    });

    it("should dispatch action correctly when data fetching success", async () => {
        api.login = () => Promise.resolve(fakeTokenResponse);
        api.getOwnProfile = () => Promise.resolve(fakeOwnUserResponse);
        api.putAccessToken = () => Promise.resolve();

        const dispatch = jest.fn();
        window.alert = jest.fn();

        await asyncSetAuthUser({
            email: "polmed123@gmail.com",
            password: "polmed123",
        })(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(
            setAuthUserActionCreator(fakeOwnUserResponse)
        );
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it("should dispatch action and call alert correctly when data fetching failed", async () => {
        api.login = () => Promise.reject(fakeErrorResponse);
        api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
        api.putAccessToken = () => Promise.reject();

        const dispatch = jest.fn();

        await asyncSetAuthUser({
            email: "polmed123@gmail.com",
            password: "polmed123",
        })(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
});
