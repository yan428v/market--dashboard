import axiosJson from './axiosJson.ts';


// @ts-expect-error
const marketPath = import.meta.env.VITE_MARKET_PATH;
export const addMarket = async (data: {marketName: string; token: string; userId: number;}) => {
    try {
        const response = await axiosJson.post(marketPath, data);
        return response.data.data;
    } catch (error) {
        console.error('Error adding market:', error);
        throw error;
    }
};


export const getMarketsByUserId = async (userId: number) => {
    try {
        const response = await axiosJson.get(`${marketPath}/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error('Error getting markets:', error);
        throw error;
    }
};
