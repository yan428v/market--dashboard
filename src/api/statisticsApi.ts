import axiosJson from './axiosJson.ts';
import dayjs, {Dayjs} from 'dayjs';


// @ts-expect-error
const statisticsPath = import.meta.env.VITE_STATISTICS_PATH;

// @ts-expect-error
const dailyStatisticsPath = import.meta.env.VITE_DAILY_STATISTICS_PATH;

export const getAllStatistics = async (intervalFrom: Dayjs | null, intervalTo: Dayjs | null ) => {
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

export const getDailyStatistics = async (intervalFrom: Dayjs | null, intervalTo: Dayjs | null ) => {
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

