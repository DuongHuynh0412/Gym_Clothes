import {getAccessToken} from "../../commons/method.common";

function privateRoute({children}){
    const accessToken = getAccessToken();
    if(!accessToken){
        location.href = '/login';
        return;
    }
    return children;
}

export default privateRoute;