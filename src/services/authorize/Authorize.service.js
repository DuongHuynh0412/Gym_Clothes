import axiosInstance from "../../axios";

export const HandleLogin = async (loginReq) => {
    const {data} = await axiosInstance.post('/user/login', loginReq);
    console.log('data', data)
}