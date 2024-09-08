import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {observer} from 'mobx-react-lite';
import {authStore} from '../../store/AuthStore.ts';
import {addMarket} from '../../api/marketApi.ts';

interface BasicModalProps {
    open: boolean;
    handleClose: () => void;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const AddMarketModal: React.FC<BasicModalProps> = observer(({ open, handleClose }) => {
    const [marketName, setMarketName] = useState('');
    const [token, setToken] = useState('');

    const handleAddMarket = async () => {
        try {
            if (authStore.user) { // Проверяем, что user не null
                const userId = authStore.user.userId;
                const data = { marketName, token, userId };

                // Вызываем функцию добавления маркета
                await addMarket(data);
                console.log('Маркет добавлен');
                handleClose();
            } else {
                console.error('Ошибка: пользователь не авторизован.');
            }
        } catch (error) {
            console.error('Ошибка при добавлении маркета:', error);
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            style={{ zIndex: 99999999 }}
        >
            <Box sx={style}>
                <Typography id="modal-title" variant="h6" component="h2">
                    Добавить маркет
                </Typography>
                <Box component="form" sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Название маркета"
                        variant="outlined"
                        margin="normal"
                        value={marketName}
                        onChange={(e) => setMarketName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Токен"
                        variant="outlined"
                        margin="normal"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleAddMarket}
                    >
                        Добавить
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
});

export default AddMarketModal;
