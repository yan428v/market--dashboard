import axiosJson from './axiosJson.ts';

export const changePassword = async (passwordData: { oldPassword: string; newPassword: string }) => {
    try {
        const response = await axiosJson.post('/users/changePassword', passwordData);
        return response.data;
    } catch (error) {
        console.error('Error changing password:', error);
        throw error;
    }
};
