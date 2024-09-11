import { jwtDecode } from 'jwt-decode';
import {makeAutoObservable} from 'mobx';
import { validateToken } from '../api/authApi.ts';
import { appStore } from './AppStore.tsx';
import { marketStore } from './MarketStore.ts';
import {IUser} from '../types/types.ts';

class AuthStore {
    token: string | null = null;
    tokenValid: boolean | null = null;
    user: IUser | null = null;

    constructor() {
        makeAutoObservable(this);
        this.token = localStorage.getItem('token');
        this.tokenValid = this.token ? !this.isTokenExpired(this.token) : false;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    clearUser() {
        this.user = null;
    }

    async setToken(token: string) {
        try {
            this.token = token;
            localStorage.setItem('token', token);
            this.tokenValid = await this.isValidToken() || false;
            const decodedToken: any = jwtDecode(token);
            this.setUser(decodedToken);

            if (this.user && this.user.userId) {
                await marketStore.setMarkets(this.user.userId);
            }
        } catch (e) {
            appStore.showErrorMessage(e, 'Token is not valid');
            this.tokenValid = false;
        }
    }

    clearToken() {
        this.token = null;
        this.tokenValid = null;
        this.user = null;
        marketStore.clearMarkets();
        localStorage.removeItem('token');
    }

    async isValidToken() {
        try {
            if (this.token && !this.isTokenExpired(this.token)) {
                return await validateToken(this.token);
            } else {
                this.tokenValid = false;
            }
        } catch (e) {
            appStore.showErrorMessage(e, 'Token validation error');
            this.tokenValid = false;
            return false;
        }
    }

    isTokenExpired(token: string): boolean {
        try {
            const decoded: any = jwtDecode(token);
            const now = Math.floor(Date.now() / 1000);
            return decoded.exp < now;
        } catch (e) {
            console.error('Token is expired: ', e);
            return true;
        }
    }
}

export const authStore = new AuthStore();
