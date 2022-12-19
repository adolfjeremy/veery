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
    async function createThread({ title, body }) {
        const { data } = await axios.post(
            `${BASE_URL}/threads`,
            { title, body, category: "" },
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            }
        );

        const { status, message } = data;
        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { thread },
        } = data;
        return thread;
    }
    async function upVoteThread(id) {
        const { data } = await axios.post(
            `${BASE_URL}/threads/${id}/up-vote`,
            { id },
            {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            }
        );

        const { status, message } = data;
        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { vote },
        } = data;
        return vote;
    }
    async function downVoteThread(id) {
        const { data } = await axios.post(
            `${BASE_URL}/threads/${id}/down-vote`,
            { id },
            {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            }
        );

        const { status, message } = data;
        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { vote },
        } = data;
        return vote;
    }

    async function neutralizeVoteThread(id) {
        const { data } = await axios.post(
            `${BASE_URL}/threads/${id}/neutral-vote`,
            { id },
            {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            }
        );

        const { status, message } = data;
        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { vote },
        } = data;
        return vote;
    }

    async function getThreadDetail(id) {
        const { data } = await axios.get(`${BASE_URL}/threads/${id}`);
        const { status, message } = data;

        if (status !== "success") {
            throw new Error(message);
        }

        const {
            data: { detailThread },
        } = data;

        return detailThread;
    }

    async function addComment({ threadId, content }) {
        const { data } = await axios.post(
            `${BASE_URL}/threads/${threadId}/comments`,
            { content },
            {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            }
        );

        const { status, message } = data;
        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { comment },
        } = data;
        return comment;
    }

    async function upVoteComment({ threadId, commentId }) {
        const { data } = await axios.post(
            `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
            {
                threadId,
                commentId,
            },
            {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            }
        );
        const { status, message } = data;
        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { vote },
        } = data;
        return vote;
    }

    async function downVoteComment({ threadId, commentId }) {
        const { data } = await axios.post(
            `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
            {
                threadId,
                commentId,
            },
            {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            }
        );
        const { status, message } = data;
        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { vote },
        } = data;
        return vote;
    }

    async function nuetralizeVoteComment({ threadId, commentId }) {
        const { data } = await axios.post(
            `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
            {
                threadId,
                commentId,
            },
            {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            }
        );
        const { status, message } = data;
        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { vote },
        } = data;
        return vote;
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
        createThread,
        upVoteThread,
        downVoteThread,
        neutralizeVoteThread,
        getThreadDetail,
        addComment,
        upVoteComment,
        downVoteComment,
        nuetralizeVoteComment,
    };
})();

export default api;
