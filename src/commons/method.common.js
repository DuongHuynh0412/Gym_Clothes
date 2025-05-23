export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
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