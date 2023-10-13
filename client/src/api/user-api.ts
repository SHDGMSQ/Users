import axios, {AxiosResponse} from "axios";

//api
export const userAPI = {
    findUsers(controller: AbortController, email: string, number?: string): Promise<AxiosResponse<ResponseUserType[]>> {
        return axios.get<ResponseUserType[]>(`http://localhost:5000/api/user/${email}/${number}`, {signal: controller.signal});
    },
};

//types
export type ResponseUserType = {
    email: string,
    number: string
}