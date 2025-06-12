// api/axios.ts
import axios, {HttpStatusCode} from "axios";
import {clearAllLocalStorage, clearAllLocalStorageExceptToken} from "./commons/method.common";
import {COMMON_RESULTS} from "./commons/constant.common";


const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 2000,
});


apiClient.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem('accessToken');
        if (!!authToken) {
            config.headers.Authorization = authToken ? `Bearer ${authToken}` : undefined;
        } else {
            config.headers.Authorization = undefined;
        }
        return config;
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response
    }, function (error) {
        if (error.status === HttpStatusCode.Unauthorized) {
            if (error.response?.data?.errorCode !== COMMON_RESULTS.EMPTY_TOKEN) {
                clearAllLocalStorage();
            }else{
                clearAllLocalStorageExceptToken();
            }
        }
        return Promise.reject(error);
    }
)

export default apiClient;