import axiosJson from './axiosJson.ts';
import dayjs from 'dayjs';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const statisticsPath = import.meta.env.VITE_STATISTICS_PATH;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const dailyStatisticsPath = import.meta.env.VITE_DAILY_STATISTICS_PATH;

export const getAllStatistics = async (
    intervalFrom?: string | number | Date | dayjs.Dayjs | null | undefined,
    intervalTo?: string | number | Date | dayjs.Dayjs | null | undefined) => {
    try {
        const formattedIntervalFrom = dayjs(intervalFrom).format('YYYY-MM-DD');
        const formattedIntervalTo = dayjs(intervalTo).format('YYYY-MM-DD');

        const response = await axiosJson.get(statisticsPath, {
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

export const getDailyStatistics = async (
    intervalFrom?: string | number | Date | dayjs.Dayjs | null | undefined,
    intervalTo?: string | number | Date | dayjs.Dayjs | null | undefined) => {
    try {
        const formattedIntervalFrom = dayjs(intervalFrom).format('YYYY-MM-DD');
        const formattedIntervalTo = dayjs(intervalTo).format('YYYY-MM-DD');
        const response = await axiosJson.get(dailyStatisticsPath, {
            params: {
                intervalFrom: formattedIntervalFrom,
                intervalTo: formattedIntervalTo
            }
        });
        return response.data.data;
    } catch (e) {
        console.error('Error fetching daily statistics:', e);
        throw e;
    }
};

