import {action, makeAutoObservable, runInAction} from 'mobx';
import dayjs, {Dayjs} from 'dayjs';
import {getChartStatistics} from '../api/chartApi.ts';
import {ChartStatistics} from '../types/types.ts';
import {appStore} from './AppStore.tsx';
import {authStore} from './AuthStore.ts';
import {marketStore} from './MarketStore.ts';

class ChartStore {
    chartStatistics: ChartStatistics | null = null;
    intervalFrom: Dayjs | null  = dayjs().subtract(6, 'days').startOf('day');
    intervalTo: Dayjs | null = dayjs().subtract(1, 'day').endOf('day');
    constructor() {
        makeAutoObservable(this);
        if (authStore.tokenValid && authStore.user?.userId && marketStore.currentMarket) {
            this.loadChartStatistics();
        }
    }

    async loadChartStatistics() {
        appStore.setIsLoading(true);
        try {
            const data = await getChartStatistics(this.intervalFrom, this.intervalTo);
            runInAction(() => {
                this.chartStatistics = data;
            });
        } catch (error) {
            console.error('Ошибка загрузки статистики:', error);
        } finally {
            appStore.setIsLoading(false);
        }
    }

    setIntervalFrom = action((value: Dayjs | null) => {
        this.intervalFrom = value;
    });

    setIntervalTo = action((value: Dayjs | null) => {
        this.intervalTo = value;
    });
}

export const chartStore = new ChartStore();
