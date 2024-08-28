import React, { useState } from 'react';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import {appStore} from '../../store/AppStore.tsx';
import {observer} from 'mobx-react-lite';
import {validatePassword} from '../../utils/useValidation/passwordValidator.ts';
import {changePassword} from '../../api/userApi.ts';

const ChangePassword: React.FC = observer(() => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            if (newPassword !== confirmPassword) {
                appStore.showErrorMessage('err','Новые пароли не совпадают');
                return;
            }
            if (newPassword === oldPassword) {
                appStore.showErrorMessage('err','Новый пароль должен отличаться от старого');
                return;
            }
            appStore.setIsLoading(true);

            try {
                await validatePassword(newPassword);
            } catch (err: any) {
                appStore.showErrorMessage(err,err.message);
                return;
            }
            await changePassword({ oldPassword, newPassword });
            localStorage.setItem('password', newPassword);
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
            appStore.showSuccessMessage('Пароль успешно изменен!');
        } catch (err) {
            appStore.showErrorMessage(err,'Ошибка при смене пароля. Попробуйте снова.');
        } finally {
            appStore.setIsLoading(false);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}
        >
            <TextField
                label="Старый пароль"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
            />
            <TextField
                label="Новый пароль"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />
            <TextField
                label="Подтвердите новый пароль"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={appStore.isLoading}
            >
                {appStore.isLoading ? <CircularProgress size={24} /> : 'Сменить пароль'}
            </Button>
        </Box>
    );
});

export default ChangePassword;
