import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

export const LoginUserContext = createContext();

function LoginUserProvider({ children }) {
    const [loginUser, setLoginUser] = useState(null);
    const [userToken, setUserToken] = useState(localStorage.getItem("token"));
    const [emailCode, setEmailCode] = useState(""); 

    useEffect(() => {
        if (userToken) {
            try {
                const decoded = jwtDecode(userToken);
                console.log(decoded);

                setLoginUser({
                    userEmail: decoded.email,
                    userId: decoded.userId,
                });
            } catch (error) {
                console.log("Tokeni decode etmək mümkün olmadı:", error);
            }
        }
    }, [userToken]);

    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser, emailCode, setEmailCode }}>
            {children}
        </LoginUserContext.Provider>
    );
}

export default LoginUserProvider;
