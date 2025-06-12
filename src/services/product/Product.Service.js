import axiosInstance from '../../axios'

export async function GetProductsInfo(code) {
    try {
        const {data} = await axiosInstance.get(`/productColors/getDataByCode/${code}`);
        return data;
    } catch (e) {
        console.log('e', e)
        return {
            success: false,
            message: e.response?.data?.message || `API error: ${e.response?.status || 'Unknown error'}`,
        }
    }
}

export async function GetProductsColorInfo(searchModel) {
    try {
        const request = {
            searchModel: searchModel,
            searchOptions: {
                page: 1,
                pageSize: 1000
            }
        }
        const {data} = await axiosInstance.post(`/productColors/search`, request);
        return data;
    } catch (e) {
        return {
            success: false,
            message: e.response?.data?.message || `API error: ${e.response?.status || 'Unknown error'}`,
        }
    }
}