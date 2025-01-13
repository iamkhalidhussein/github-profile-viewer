import { useEffect, useState } from "react";

const useThemeChange = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('git-sniffer-theme') === 'dark';
    });

    const handleThemeChange = () => {
        setTheme(!theme);
        localStorage.setItem('git-sniffer-theme', !theme ? 'dark': 'ligth');
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme);
    }, [theme]);

    return { handleThemeChange, theme };
};

export default useThemeChange;