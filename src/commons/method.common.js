export function getAccessToken() {
    return localStorage.getItem("accessToken");
}

export function clearAccessToken() {
    return localStorage.removeItem("accessToken");
}
export function clearAllLocalStorage() {
    return localStorage.clear()
}

export function clearAllLocalStorageExceptToken() {
    localStorage.removeItem("shopping-cart");
    localStorage.removeItem("favorite-list");
}

export function convertImageUrl(imageUrl) {
    if(!imageUrl){
        return '';
    }
    if(imageUrl?.includes(process.env.REACT_APP_FILE_URL)) {
        return imageUrl;
    }else{
        return `${process.env.REACT_APP_FILE_URL}${imageUrl}`;
    }
}

export function SetLocalStorage({key, data}){
    return localStorage.setItem(key, JSON.stringify(data))
}

export function GetLocalStorage(key){
    return localStorage.getItem(key)
}

export function UpdateShoppingCartLocal({sizeObject, productColorCode, productColorName, imageUrl, productName}){
    let shoppingCart = GetLocalStorage('shopping-cart')
    if (!shoppingCart) {
        SetLocalStorage({
            key: 'shopping-cart',
            data: [
                {
                    productSize: sizeObject,
                    productColorCode: productColorCode,
                    productName: productName,
                    productColorName: productColorName,
                    imageUrl: imageUrl,
                    productAmount: 1
                }
            ]
        })
    } else {
        const productInShoppingCart = JSON.parse(shoppingCart);
        const existedIndex = productInShoppingCart.findIndex(item => {
            return item.productColorCode === productColorCode
                && item.productSize?.Product_Size_Code === sizeObject.Product_Size_Code
        });
        if (existedIndex > -1) {
            productInShoppingCart[existedIndex].productAmount += 1;
            shoppingCart = productInShoppingCart;
        } else {
            shoppingCart = [
                ...productInShoppingCart,
                {
                    productSize: sizeObject,
                    productColorCode: productColorCode,
                    productName: productName,
                    productColorName: productColorName,
                    imageUrl: imageUrl,
                    productAmount: 1
                }
            ]
        }
        SetLocalStorage({
            key: 'shopping-cart',
            data: shoppingCart
        })
    }
}