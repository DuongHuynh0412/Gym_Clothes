// api/axios.ts
import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 2000,
});

// Store token in memory at module level
const authToken = localStorage.getItem('accessToken');

apiClient.interceptors.request.use(
    (config) => {
        config.headers.Authorization = authToken ? `Bearer ${authToken}` : undefined;
        return config;
    }
);

export default apiClient;