import { useContext } from 'react';
import { createContext, useState } from 'react';
import { Modal } from './ModalContext';

export const Login = createContext();

function LoginContext({ children }) {
    const { hide } = useContext(Modal);
    const [isLogin, setIsLogin] = useState(false);
    const value = {
        isLogin,
        login: () => {
            hide();
            setIsLogin(true);
        },
        logout: () => setIsLogin(false),
    };
    return <Login.Provider value={value}>{children}</Login.Provider>;
}

export default LoginContext;
