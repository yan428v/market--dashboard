import axiosJson from './axiosJson.ts';
import dayjs from 'dayjs';

export const getAllStatistics = async (intervalFrom?: string | number | Date | dayjs.Dayjs | null | undefined, intervalTo?: string | number | Date | dayjs.Dayjs | null | undefined) => {
    try {
        const formattedIntervalFrom = dayjs(intervalFrom).format('YYYY-MM-DD');
        const formattedIntervalTo = dayjs(intervalTo).format('YYYY-MM-DD');

        console.log(formattedIntervalFrom);
        console.log(formattedIntervalTo);
        const response = await axiosJson.get('/statistics', {
            params: {
                intervalFrom: formattedIntervalFrom,
                intervalTo: formattedIntervalTo
            }
        });
        console.log(response.data.data);
        return response.data.data;
    } catch (e) {
        console.error('Error fetching statistics:', e);
        throw e;
    }
};

export const getDailyStatistics = async (intervalFrom?: string | number | Date | dayjs.Dayjs | null | undefined, intervalTo?: string | number | Date | dayjs.Dayjs | null | undefined) => {
    try {
        const formattedIntervalFrom = dayjs(intervalFrom).format('YYYY-MM-DD');
        const formattedIntervalTo = dayjs(intervalTo).format('YYYY-MM-DD');

        const response = await axiosJson.get('/statistics/daily', {
            params: {
                intervalFrom: formattedIntervalFrom,
                intervalTo: formattedIntervalTo
            }
        });
        console.log(response.data.data);
        return response.data.data;
    } catch (e) {
        console.error('Error fetching daily statistics:', e);
        throw e;
    }
};

