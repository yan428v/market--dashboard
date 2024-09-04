import {IUser} from '../types/types.ts';
import axiosJson from './axiosJson';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const loginPath = import.meta.env.VITE_AUTH_LOGIN_PATH;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const registrationPath  = import.meta.env.VITE_AUTH_REGISTRATION_PATH;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const validateTokenPath = import.meta.env.VITE_VALIDATE_TOKEN_PATH;


export const login = async (userData: { email: string; password: string }) => {
    try {
        const response = await axiosJson.post(loginPath, userData);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const signUp = async (userData: IUser) => {
    try {
        const response = await axiosJson.post(registrationPath, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};

export const validateToken = async (token: string) => {
    try {
        const response = await axiosJson.get(`${validateTokenPath}/${token}`);
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
//
//
// export const login = async (userData: { email: string; password: string }) => {
//     try {
//         const response = await axiosJson.post('/auth/login', userData);
//         return response.data;
//     } catch (error) {
//         console.error('Error logging in:', error);
//         throw error;
//     }
// };

// export const signUp = async (userData: IUser) => {
//     try {
//         const response = await axiosJson.post('/auth/registration', userData);
//         return response.data;
//     } catch (error) {
//         console.error('Error registering:', error);
//         throw error;
//     }
// };

// export const validateToken = async (token: string) => {
//     try {
//         const response = await axiosJson.get(`/auth/validateToken/${token}`);
//         if(response.data.status === 'success') {
//             return true;
//         } else {
//             return false;
//         }
//     } catch (error) {
//         console.error('Error validating token:', error);
//         throw error;
//     }
// };
