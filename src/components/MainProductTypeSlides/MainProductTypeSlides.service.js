import axiosInstance from '../../axios'

export async function GetProductsInCollection(request) {
    const {data} = await axiosInstance.post('/productCollections/products', request);
    return data;
}

export async function SearchProductsInCollection(request) {
    const {data} = await axiosInstance.post('productCollections/products/search', request);
    return data;
}