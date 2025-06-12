import {clearAccessToken, getAccessToken} from "../../commons/method.common";
import { Navigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import React from "react";

const PrivateRouter = ({ children }) => {
    const token = getAccessToken();

    let isAuthorized = false;

    if (token) {
        try {
            const decodedData = jwtDecode(token);
            const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
            const isTokenExpired = decodedData.exp && decodedData.exp < currentTime;
            isAuthorized = !isTokenExpired;
            if(!isAuthorized) {
                clearAccessToken();
            }
        } catch (error) {
            isAuthorized = false;
        }
    }

    return isAuthorized ? children : (<Navigate to="/" replace />);
};

export default PrivateRouter;