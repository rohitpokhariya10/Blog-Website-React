import { createContext, useContext, useState } from "react";
import { load, save } from "../utils/localStorage.js";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(load("theme").length == 0 ? true : (load("theme") != "theme2"));

    if (!theme) {
        document.documentElement.setAttribute("data-theme", "theme2");
    }

    const toggleTheme = () => {
        if (theme) {
            document.documentElement.setAttribute("data-theme", "theme2");
            save("theme", "theme2");
        } else {
            document.documentElement.setAttribute("data-theme", "theme1");
            save("theme", "theme1");
        }
        setTheme(prev => !prev)
    }

    const items = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={items}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);