import React, { createContext, useEffect, useState } from 'react'

export const RememberMeContext = createContext()

function RememberMeContextProvider({children}) {
    const [username, setUsername] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    useEffect(() => {
      const savedUsername = localStorage.getItem('rememberMe') === 'true'
        ? localStorage.getItem('username')
        : '';
      setUsername(savedUsername);
      setRememberMe(localStorage.getItem('rememberMe') === 'true');
    }, []);
  
    const login = (name, remember) => {
      setUsername(name);
      setRememberMe(remember);
      if (remember) {
        localStorage.setItem('username', name);
        localStorage.setItem('rememberMe', true);
      } else {
        localStorage.removeItem('username');
        localStorage.setItem('rememberMe', false);
      }
    };
  
    return (
      <RememberMeContext.Provider value={{ username, rememberMe, login }}>
        {children}
      </RememberMeContext.Provider>
    );
  
}

export default RememberMeContextProvider
