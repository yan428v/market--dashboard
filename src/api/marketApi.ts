import axiosJson from './axiosJson.ts';
import {IMarket} from '../types/types.ts';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const addMarketPath = import.meta.env.VITE_ADD_MARKET_PATH;
export const addMarket = async (data: IMarket) => {
    // console.log(data);
    try {
        const response = await axiosJson.post('/markets', data);
        return response.data.data;
    } catch (error) {
        console.error('Error adding market:', error);
        throw error;
    }
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const getMarketsPath = import.meta.env.VITE_GET_MARKETS_PATH;
export const getMarketsByUserId = async (userId: number) => {
    try {
        const response = await axiosJson.get(`/markets/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error('Error getting markets:', error);
        throw error;
    }
};
