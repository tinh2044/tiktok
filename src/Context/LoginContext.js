import { createContext, useState } from 'react';
export const Login = createContext();

function LoginContext({ children }) {
    const [isLogin, setIsLogin] = useState(false);
    const value = {
        isLogin,
        setIsLogin: () => {
            setIsLogin(!isLogin);
        },
    };
    return <Login.Provider value={value}>{children}</Login.Provider>;
}

export default LoginContext;
