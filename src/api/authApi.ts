import axiosJson from './axiosJson';


// @ts-expect-error
const loginPath = import.meta.env.VITE_AUTH_LOGIN_PATH;
// @ts-expect-error
const registrationPath  = import.meta.env.VITE_AUTH_REGISTRATION_PATH;
// @ts-expect-error
const validateTokenPath = import.meta.env.VITE_VALIDATE_TOKEN_PATH;


export const login = async (userData: { email: string; password: string }) => {
    try {
        const response = await axiosJson.post(loginPath, userData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const signUp = async (userData: {
    email: string,
    password: string,
    firstName:  string,
    lastName: string,
}) => {
    try {
        const response = await axiosJson.post(registrationPath, userData);
        console.log(response.data);
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
            console.log('Token is valid');
            return true;
        } else {
            console.error('Token is invalid');
            return false;
        }
    } catch (error) {
        console.error('Error validating token:', error);
        throw error;
    }
};
