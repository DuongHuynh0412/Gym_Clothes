import axiosInstance from "../../axios";
import {useNavigate} from "react-router-dom";

export const HandleLogin = async (loginReq) => {
    const {data} = await axiosInstance.post('/login', loginReq);
    if(data && data.token) {
        localStorage.setItem('accessToken', data.token);
    }
    return data.success;
}