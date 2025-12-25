import { useEffect, useState } from "react";

export function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === "undefined") return false;

        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") return true;
        if (savedTheme === "light") return false;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const toggleDarkMode = () => {
        setIsDark((prev) => !prev);
    };

    return { isDark, toggleDarkMode };
}
