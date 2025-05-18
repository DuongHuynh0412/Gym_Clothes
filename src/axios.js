import axios from "axios";
import {getAccessToken} from "./commons/method.common";

const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
});
const accessToken = getAccessToken();
axiosInstance.defaults.headers.common['Authorization'] = accessToken;

export default axiosInstance;