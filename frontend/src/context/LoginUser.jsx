import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

export const LoginUserContext = createContext();

function LoginUserProvider({ children }) {
    const [loginUser, setLoginUser] = useState(null);
    const [userToken, setUserToken] = useState(localStorage.getItem("token"));
    const [emailCode, setEmailCode] = useState("");

    const saveToken = (token) => {
        setUserToken(token);
        localStorage.setItem("token", token);
    };

    const removeToken = () => {
        setUserToken(null);
        localStorage.removeItem("token");
    };

    const logout = () => {
        removeToken();
        setLoginUser(null);
    };

    useEffect(() => {
        if (userToken) {
            try {
                const decoded = jwtDecode(userToken);
                setLoginUser({
                    userEmail: decoded.email,
                    userId: decoded.userId,
                });
            } catch (error) {
                console.log("Tokeni decode etmək mümkün olmadı:", error);
                logout(); // Əgər token səhvdirsə, onu sil
            }
        }
    }, [userToken]);

    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser, emailCode, setEmailCode, saveToken, logout }}>
            {children}
        </LoginUserContext.Provider>
    );
}

export default LoginUserProvider;
