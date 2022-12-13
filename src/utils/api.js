import axios from "axios";

const api = (() => {
    const BASE_URL = "https://forum-api.dicoding.dev/v1";

    function putAccessToken(token) {
        localStorage.setItem("accessToken", token);
    }

    function getAccessToken() {
        return localStorage.getItem("accessToken");
    }

    async function getLeaderboards() {
        const { data } = await axios.get(`${BASE_URL}/leaderboards`);
        const { status, message } = data;

        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { leaderboards },
        } = data;
        return leaderboards;
    }

    async function register({ name, email, password }) {
        const { data } = await axios.post(`${BASE_URL}/register`, {
            name,
            email,
            password,
        });
        const { status, message } = data;

        if (status !== "success") {
            throw new Error(message);
        }

        const {
            data: { user },
        } = data;
        return user;
    }

    async function login({ email, password }) {
        const { data } = await axios.post(`${BASE_URL}/login`, {
            email,
            password,
        });
        const { status, message } = data;

        if (status !== "success") {
            throw new Error(message);
        }

        const {
            data: { token },
        } = data;
        return token;
    }

    async function getOwnProfile() {
        const { data } = await axios.get(`${BASE_URL}/users/me`, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        });

        const { status, message } = data;
        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { user },
        } = data;
        return user;
    }

    async function getAllUsers() {
        const { data } = await axios.get(`${BASE_URL}/users`);
        const { status, message } = data;

        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { users },
        } = data;
        return users;
    }

    async function getAllThreads() {
        const { data } = await axios.get(`${BASE_URL}/threads`);
        const { status, message } = data;

        if (status !== "success") {
            throw new Error(message);
        }

        const {
            data: { threads },
        } = data;

        return threads;
    }
    return {
        putAccessToken,
        getAccessToken,
        getLeaderboards,
        register,
        login,
        getOwnProfile,
        getAllUsers,
        getAllThreads,
    };
})();

export default api;
