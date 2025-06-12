import axiosInstance from "../../axios";

export async function CreateReservation(createModel) {
    try {
        const {data} = await axiosInstance.post(`/reservations/create`, createModel);
        return data;
    } catch (e) {
        throw e
    }
}