import axiosInstance from "../../axios";

export async function ApplyPromotion(promotionCode, amount) {
    try {
        const request = {
            amount: amount
        }
        const {data} = await axiosInstance.post(`/promotions/${promotionCode}/apply`, request);
        return data;
    } catch (e) {
        return {
            success: false,
            message: e.response?.data?.message || `API error: ${e.response?.status || 'Unknown error'}`,
        }
    }
}