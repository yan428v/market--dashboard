import axios, {AxiosError, InternalAxiosRequestConfig} from 'axios';
import {authStore} from '../store/AuthStore.ts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const base_url = import.meta.env.VITE_BASE_URL;
const axiosJson = axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosJson.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = authStore.token;
        if (token) {
            config.headers = config.headers || {};
            config.headers['authorization'] = `Bearer ${token}`;
            console.log('Authorization Header:', config.headers['authorization']); // Логирование заголовка
        } else {
            console.log('No token available');
        }
        return config;
    },
    (error: AxiosError) => Promise.reject(error),
);

export default axiosJson;
