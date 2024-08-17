import { makeAutoObservable } from 'mobx';
import { Snackbar, Alert } from '@mui/material';

class AppStore {
    isLoading: boolean = false;
    errorMessage: string = '';
    isSnackbarOpen: boolean = false;
    successMessage: string = '';
    isSuccessSnackbarOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setIsLoading(value: boolean) {
        this.isLoading = value;
    }

    handleError(e: any, defaultMessage: string) {
        let errorMessage = defaultMessage;
        if (e.response && e.response.data && e.response.data.message) {
            errorMessage = e.response.data.message;
        }
        this.errorMessage = errorMessage;
        this.isSnackbarOpen = true;
    }

    closeSnackbar() {
        this.isSnackbarOpen = false;
    }

    showSuccessMessage(message: string) {
        this.successMessage = message;
        this.isSuccessSnackbarOpen = true;
    }

    closeSuccessSnackbar() {
        this.isSuccessSnackbarOpen = false;
    }

    get ErrorSnackbar() {
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={this.isSnackbarOpen}
                autoHideDuration={6000}
                onClose={() => this.closeSnackbar()}
                sx={{
                    marginTop: 10
                }}
            >
                <Alert onClose={() => this.closeSnackbar()} severity="error" sx={{
                    width: '100%',
                    fontSize: '1.5rem',
                    padding: '16px',
                }}>
                    {this.errorMessage}
                </Alert>
            </Snackbar>
        );
    }

    get SuccessSnackbar() {
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={this.isSuccessSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => this.closeSuccessSnackbar()}
                sx={{
                    marginTop: 10
                }}
            >
                <Alert onClose={() => this.closeSuccessSnackbar()} severity="success" sx={{
                    width: '100%',
                    fontSize: '1.5rem',
                    padding: '16px',
                }}>
                    {this.successMessage}
                </Alert>
            </Snackbar>
        );
    }
}

export const appStore = new AppStore();
