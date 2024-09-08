import axiosJson from './axiosJson.ts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const changePasswordPath = import.meta.env.VITE_CHANGE_PASSWORD_PATH;
export const changePassword = async (passwordData: { oldPassword: string; newPassword: string }) => {
    try {
        const response = await axiosJson.post(changePasswordPath, passwordData);
        return response.data;
    } catch (error) {
        console.error('Error changing password:', error);
        throw error;
    }
};
``;
