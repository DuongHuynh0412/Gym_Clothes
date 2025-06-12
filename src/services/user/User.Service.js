import axiosInstance from "../../axios";

export async function GetFavoriteItems() {
    try {
        const {data} = await axiosInstance.get(`/systemUsers/favoriteItems/getAll`);
        return data;
    } catch (e) {
        throw e
    }
}


export async function UpdateFavoriteList(updateModel) {
    try {
        const {data} = await axiosInstance.post('/systemUsers/favoriteItems/update', updateModel);
        return data;
    } catch (e) {
        return null;
    }
}

export async function GetShoppingBag() {
    try {
        const {data} = await axiosInstance.get(`/systemUsers/shoppingBag/getAll`);
        return data;
    } catch (e) {
        throw e
    }
}


export async function UpdateShoppingBag(updateModel) {
    try {
        const {data} = await axiosInstance.post('/systemUsers/shoppingBag/update', updateModel);
        return data;
    } catch (e) {
        return null;
    }
}

export async function AddShoppingBag(updateModel) {
    try {
        const {data} = await axiosInstance.post('/systemUsers/shoppingBag/addProduct', updateModel);
        return data;
    } catch (e) {
        return null;
    }
}