"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { IconBrandGithub, IconCode, IconMoon, IconSun } from "@tabler/icons-react";
import { useDarkMode } from "@/hooks/useDarkMode";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isDark, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={false}
            className="fixed w-full flex items-center justify-between font-medium px-5 py-2 z-40 transition-colors duration-300"
            animate={{
                backgroundColor: isScrolled
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(255, 255, 255, 0)",
                backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
            }}
        >
            <div className="flex items-center gap-3 font-work text-slate-950 dark:text-white">
                <IconCode className="size-5" />
                <span className="tracking-tighter">Code With Gipay</span>
            </div>

            <div className="flex items-center gap-2">
                <a
                    href="https://github.com/gipay13"
                    target="_blank"
                    className="p-2 bg-slate-950 dark:bg-white rounded-full"
                >
                    <IconBrandGithub className="size-5 dark:text-slate-950 text-white" />
                </a>
                <button
                    onClick={toggleDarkMode}
                    className="p-2 bg-slate-950 dark:bg-white rounded-full cursor-pointer"
                >
                    {isDark ? (
                        <IconSun className="size-5 text-slate-950" />
                    ) : (
                        <IconMoon className="size-5 text-white" />
                    )}
                </button>
            </div>
        </motion.nav>
    );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
