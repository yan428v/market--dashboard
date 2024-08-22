import { makeAutoObservable } from 'mobx';
import {getAllStatistics, getDailyStatistics} from '../api/statisticsApi.ts';
import {CampaignStatistics, DailyStatistics} from '../types/types.ts';

class StatisticsStore {
    dailyStatistics: DailyStatistics[] = [];
    allStatistics: CampaignStatistics[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async loadDailyStatistics() {
        this.dailyStatistics = await getDailyStatistics();
    }

    async loadAllStatistics() {
        this.allStatistics = await getAllStatistics();
    }
}

export const statisticsStore = new StatisticsStore();
