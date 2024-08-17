import { jwtDecode } from 'jwt-decode';
import { makeAutoObservable } from 'mobx';
import {validateToken} from '../api/authApi.ts';
import {appStore} from './AppStore.tsx';

class AuthStore {
    token: string | null = null;
    tokenValid: boolean | null = null;
    user: { email: string; firstName: string; lastName: string } | null = null;

    constructor() {
        makeAutoObservable(this);
        this.token = localStorage.getItem('token');
        this.tokenValid = this.token ? !this.isTokenExpired(this.token) : false;
    }

    setUser(user: { email: string; firstName: string; lastName: string }) {
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
        } catch (e) {
            appStore.handleError(e, 'Token is not valid');
            this.tokenValid = false;
        }
    }

    clearToken() {
        this.token = null;
        this.tokenValid = null;
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
            appStore.handleError(e, 'Token validation error');
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
