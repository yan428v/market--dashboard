import {action, makeAutoObservable, runInAction} from 'mobx';
import { getAllStatistics, getDailyStatistics } from '../api/statisticsApi.ts';
import { CampaignStatistics, DailyStatistics } from '../types/types.ts';
import dayjs, {Dayjs} from 'dayjs';

class StatisticsStore {
    dailyStatistics: DailyStatistics[] = [];
    allStatistics: CampaignStatistics[] = [];
    groupingMode: string = 'Без';
    intervalFrom: Dayjs | null  = dayjs('2021-01-01');
    intervalTo: Dayjs | null = dayjs().endOf('day');
    constructor() {
        makeAutoObservable(this);
    }

    async loadDailyStatistics() {
        const data = await getDailyStatistics(this.intervalFrom, this.intervalTo);
        runInAction(() => {
            this.dailyStatistics = data;
        });
    }

    async loadAllStatistics() {
        const data = await getAllStatistics(this.intervalFrom, this.intervalTo);
        runInAction(() => {
            this.allStatistics = data;
        });
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
