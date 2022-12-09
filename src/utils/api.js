import axios from "axios";

const api = (() => {
    const BASE_URL = "https://forum-api.dicoding.dev/v1";

    async function getLeaderboards() {
        const response = await axios.get(`${BASE_URL}/leaderboards`);
        const { status, message } = response.data;

        if (status !== "success") {
            throw new Error(message);
        }
        const {
            data: { leaderboards },
        } = response.data;
        return leaderboards;
    }

    async function getAllThreads() {
        const response = await axios.get(`${BASE_URL}/threads`);
        const { status, message } = response.data;

        if (status !== "success") {
            throw new Error(message);
        }

        const {
            data: { threads },
        } = response.data;

        return threads;
    }
    return { getLeaderboards, getAllThreads };
})();

export default api;
