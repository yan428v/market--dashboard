import axiosJson from "./axiosJson.ts";

export const getAllStatistics = async () => {
    try {
        const response = await axiosJson.get('/statistics')
        console.log(response.data)
        return response.data
    } catch (e) {
        console.error('Error fetching users:', e)
        throw e
    }
}
