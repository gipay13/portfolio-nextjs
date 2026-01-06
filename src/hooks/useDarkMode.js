import { useEffect, useState } from "react";

export function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === "undefined") return false;

        return document.documentElement.classList.contains("dark");
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