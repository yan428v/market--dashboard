import { jwtDecode } from 'jwt-decode';
import { makeAutoObservable } from 'mobx';
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
        if (this.token) {
            this.decodeToken(this.token); // Декодируем токен при инициализации
        }
        if(this.user && this.user.userId ) {
            marketStore.setMarkets(this.user.userId);
        }
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
            this.decodeToken(token); // Декодируем токен после установки
        } catch (e) {
            appStore.showErrorMessage(e, 'Token is not valid');
            this.tokenValid = false;
        }
    }

    clearToken() {
        this.token = null;
        this.tokenValid = null;
        this.user = null; // Очистка пользователя при удалении токена
        marketStore.clearMarkets(); // Очистка маркетов при удалении токена
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

    decodeToken(token: string) {
        try {
            const decoded: any = jwtDecode(token);
            console.log('Decoded token:', decoded.userId);
            console.log('Decoded token:', decoded.email);
            console.log('Decoded token:', decoded.firstName);
            console.log('Decoded token:', decoded.lastName);
            this.setUser({
                userId: decoded.userId, // Добавляем userId
                email: decoded.email,
                firstName: decoded.firstName,
                lastName: decoded.lastName,
            });
            marketStore.setMarkets(decoded.userId); // Устанавливаем маркеты после декодирования токена
        } catch (e) {
            console.error('Error decoding token: ', e);
        }
    }
}

export const authStore = new AuthStore();
