import apiClient from "../../axios";
import {commonSearchOptions} from "../../commons/constant.common";

export async function handleSearchArticle(searchModel, searchOptions) {
    let options = { ...commonSearchOptions, page: searchOptions?.page || 1, pageSize: searchOptions?.pageSize || 10 };
    return await apiClient.post("/articles/search", {
        searchModel,
        searchOptions: options
    })
        .then(res => ({
            result: res.data || [],
            totalCount: res.data.totalCount || 0,
            page: res.data.page || 1,
            pageSize: res.data.pageSize || 10,
            message: res.data.message
        }))
        .catch(err => {
            console.error(err);
            throw err;
        });
}