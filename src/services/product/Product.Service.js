import axiosInstance from '../../axios'

export async function GetProductsInfo(code) {
    const {data} = await axiosInstance.get(`/productColors/getDataByCode/${code}`);
    return data;
}