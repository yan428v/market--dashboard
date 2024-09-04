import dayjs from 'dayjs';
import axiosJson from './axiosJson.ts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const chartStatisticsPath = import.meta.env.VITE_CHART_STATISTICS_PATH;

export const getChartStatistics = async (
    intervalFrom?: string | number | Date | dayjs.Dayjs | null | undefined,
    intervalTo?: string | number | Date | dayjs.Dayjs | null | undefined) => {
    try {
        const formattedIntervalFrom = dayjs(intervalFrom).format('YYYY-MM-DD');
        const formattedIntervalTo = dayjs(intervalTo).format('YYYY-MM-DD');
        const response = await axiosJson.get(chartStatisticsPath, {
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
