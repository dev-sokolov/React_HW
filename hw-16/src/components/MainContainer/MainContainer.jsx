import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useState } from 'react';

const MainContainer = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Container maxWidth="md"  >
                <Box sx={{ bgcolor: '#fff', height: '100vh' }}>
                    <Typography variant="h5" style={{marginTop: "15px", marginBottom: "15px"}}>Добро пожаловать в наше приложение!</Typography>
                    <Button variant="contained" size="small" style={{ padding: "7px" }} onClick={handleClickOpen}>
                        Открыть диалоговое окно
                    </Button>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"                        
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Использовать Material UI?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Это простое React приложение с использованием Material UI. Вы можете настроить его по своему усмотрению.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Отмена</Button>
                            <Button onClick={handleClose} autoFocus>
                                Согласен
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Container>
        </>
    )
}

export default MainContainer;




