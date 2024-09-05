import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

const AddMarketModal: React.FC<BasicModalProps> = ({ open, handleClose }) => {
    const handleAddMarket = () => {

        console.log('Маркет добавлен');
        handleClose();
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
                    />
                    <TextField
                        fullWidth
                        label="Токен"
                        variant="outlined"
                        margin="normal"
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
};

export default AddMarketModal;
