import dayjs from 'dayjs';
import axiosJson from './axiosJson.ts';

export const getChartStatistics = async (
    intervalFrom?: string | number | Date | dayjs.Dayjs | null | undefined,
    intervalTo?: string | number | Date | dayjs.Dayjs | null | undefined) => {
    try {
        const formattedIntervalFrom = dayjs(intervalFrom).format('YYYY-MM-DD');
        const formattedIntervalTo = dayjs(intervalTo).format('YYYY-MM-DD');
        const response = await axiosJson.get('/chartStatistics', {
            params: {
                intervalFrom: formattedIntervalFrom,
                intervalTo: formattedIntervalTo
            }
        });
        return response.data.data;
    } catch (e) {
        console.error('Error fetching statistics:', e);
        throw e;
    }
};
