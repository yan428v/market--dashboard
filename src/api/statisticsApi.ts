import axiosJson from './axiosJson.ts';

export const getAllStatistics = async () => {
    try {
        const response = await axiosJson.get('/statistics');
        // console.log(response.data.data)
        return response.data.data;
    } catch (e) {
        console.error('Error fetching users:', e);
        throw e;
    }
};
export const getDailyStatistics = async () => {
    try {
        const response = await axiosJson.get('/statistics/daily');
        // console.log(response.data.data)
        return response.data.data;
    } catch (e) {
        console.error('Error fetching users:', e);
        throw e;
    }
};

