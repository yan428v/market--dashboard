import {makeAutoObservable, runInAction} from 'mobx';
import { getMarketsByUserId } from '../api/marketApi.ts';
import { IMarket } from '../types/types.ts';

class MarketStore {
    markets: IMarket[] = [];
    currentMarket: IMarket | null = null;

    constructor() {
        makeAutoObservable(this);

        const savedMarkets = localStorage.getItem('markets');
        if (savedMarkets) {
            this.markets = JSON.parse(savedMarkets);
        }

        const savedCurrentMarket = localStorage.getItem('currentMarket');
        if (savedCurrentMarket) {
            this.currentMarket = JSON.parse(savedCurrentMarket);
        }
    }

    async setMarkets(userId: number) {
        const data = await getMarketsByUserId(userId);
        runInAction(() => {
            this.markets = data;
            localStorage.setItem('markets', JSON.stringify(this.markets));
            if (data.length === 1) {
                this.currentMarket = data[0];
                localStorage.setItem('currentMarket', JSON.stringify(this.currentMarket));
            }
        });
    }

    clearMarkets() {
        this.markets = [];
        localStorage.removeItem('markets');
    }
    clearCurrentMarket() {
        this.currentMarket = null;
        localStorage.removeItem('currentMarket');
    }

    setCurrentMarket(market: IMarket) {
        this.currentMarket = market;
        localStorage.setItem('currentMarket', JSON.stringify(this.currentMarket));
    }
}

export const marketStore = new MarketStore();
