import { useEffect, useState } from "react";

export function useDarkMode() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else if (savedTheme === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        } else {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setIsDark(true);
                document.documentElement.classList.add("dark");
            }
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return { isDark, toggleDarkMode };
}
