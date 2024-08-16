import {observer} from 'mobx-react-lite';
import {ReactNode} from 'react';
import {appStore} from '../store/AppStore.tsx';

interface AppWrapperProps {
    children: ReactNode;
}

export const AppSnackbarWrapper = observer(({ children }:AppWrapperProps) => (
    <>
        {children}
        {appStore.ErrorSnackbar}
        {appStore.SuccessSnackbar}
    </>
));
