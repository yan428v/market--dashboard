import {IUser} from '../types/types.ts';
import axiosJson from './axiosJson';

export const login = async (userData: { email: string; password: string }) => {
    try {
        const response = await axiosJson.post('/auth/login', userData);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const signUp = async (userData: IUser) => {
    try {
        const response = await axiosJson.post('/auth/registration', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};

export const validateToken = async (token: string) => {
    try {
        const response = await axiosJson.get(`/auth/validateToken/${token}`);
        if(response.data.status === 'success') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error validating token:', error);
        throw error;
    }
};

