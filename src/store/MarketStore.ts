import {makeAutoObservable, runInAction} from 'mobx';
import { getMarketsByUserId } from '../api/marketApi.ts';
import { IMarket } from '../types/types.ts';

class MarketStore {
    markets: IMarket[] = [];
    currentMarket: IMarket | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async setMarkets(userId: number) {
        const data = await getMarketsByUserId(userId);
        runInAction(() => {
            this.markets = data;
        });
    }

    clearMarkets() {
        this.markets = [];
    }
    clearCurrentMarket() {
        this.currentMarket = null;
        localStorage.removeItem('currentMarket');
    }

    setCurrentMarket(market: IMarket) {
        console.log(this.currentMarket?.marketName);
        this.currentMarket = market;

        localStorage.setItem('currentMarket', JSON.stringify(this.currentMarket));

        console.log(this.currentMarket.marketName);

    }
    // saveMarketsToLocalStorage() {
    //     localStorage.setItem('markets', JSON.stringify(this.markets));
    // }
}

export const marketStore = new MarketStore();
