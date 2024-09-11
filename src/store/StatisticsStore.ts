import {action, makeAutoObservable, runInAction} from 'mobx';
import { getAllStatistics, getDailyStatistics } from '../api/statisticsApi.ts';
import { CampaignStatistics, DailyStatistics } from '../types/types.ts';
import dayjs, {Dayjs} from 'dayjs';
import {appStore} from './AppStore.tsx';

class StatisticsStore {
    dailyStatistics: DailyStatistics[] = [];
    allStatistics: CampaignStatistics[] = [];
    groupingMode: string = 'Без';
    intervalFrom: Dayjs | null  = dayjs('2021-01-01');
    intervalTo: Dayjs | null = dayjs().endOf('day');
    constructor() {
        makeAutoObservable(this);
        this.loadStatistics();
    }
    async loadStatistics() {
        appStore.setIsLoading(true);
        try {
            const [allStats, dailyStats] = await Promise.all([
                getAllStatistics(this.intervalFrom, this.intervalTo),
                getDailyStatistics(this.intervalFrom, this.intervalTo),
            ]);
            runInAction(() => {
                this.allStatistics = allStats;
                this.dailyStatistics = dailyStats;
            });
        } catch (error) {
            console.error('Ошибка загрузки статистики:', error);
        } finally {
            appStore.setIsLoading(false);
        }
    }

    setGroupingMode = action((value: string) => {
        this.groupingMode = value;
    });

    setIntervalFrom = action((value: Dayjs | null) => {
        this.intervalFrom = value;
    });

    setIntervalTo = action((value: Dayjs | null) => {
        this.intervalTo = value;
    });
}

export const statisticsStore = new StatisticsStore();
