import axiosInstance from '../../axios';

export async function GetProductsInCollection(request) {
    try {
        const { data, status } = await axiosInstance.post('/productCollections/products', request);
        return data;
    } catch (e) {
        return {
            success: false,
            message: e.response?.data?.message || `API error: ${e.response?.status || 'Unknown error'}`,
        }
    }
}

export async function SearchProductsInCollection(request) {
    try {
        const { data, status } = await axiosInstance.post('/productCollections/products/search', request);
        return data;
    } catch (e) {
        return {
            success: false,
            message: e.response?.data?.message || `API error: ${e.response?.status || 'Unknown error'}`,
        }
    }
}