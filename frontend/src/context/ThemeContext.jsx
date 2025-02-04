import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()


function ThemeContextProvider({ children }) {
    let themeMood = localStorage.getItem("mood")
    let [light, setLight] = useState(themeMood ? JSON.parse(themeMood) : true)

    useEffect(() => {
        localStorage.setItem('mood', JSON.stringify(light));
        document.documentElement.style.setProperty(
            "--bg-color",
            light ? "#0f1620" : "#fefff4"
        );
        document.documentElement.style.setProperty(
            "--text-color",
            light ? "#e1e1e1" : "#121212"
        );

    }, [light]);


    const value = {
        light, setLight
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
