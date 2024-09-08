import {makeAutoObservable} from 'mobx';
import { getMarketsByUserId } from '../api/marketApi.ts';
import { IMarket } from '../types/types.ts';

class MarketStore {
    markets: IMarket[] = [];
    currentMarket: IMarket | null = null;

    constructor() {
        makeAutoObservable(this);
    }
    // async setMarkets(userId: number) {
    //     data = await getMarketsByUserId(userId);
    //     runInAction(() => {
    //         this.markets = data;
    //     });
    // }
    async setMarkets(userId: number) {
        this.markets = await getMarketsByUserId(userId);
    }
    clearMarkets() {
        this.markets = [];
    }

    setCurrentMarket(market: IMarket) {
        this.currentMarket = market;
    }
}

export const marketStore = new MarketStore();
