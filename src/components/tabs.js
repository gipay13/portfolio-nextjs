'use client'

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import PortfolioCard from "./portfolio-card";

export function Tabs({
    items,
    defaultSelectedKey,
    selectedKey: controlledSelectedKey,
    onSelectionChange,
    className,
}) {
    const [internalSelectedKey, setInternalSelectedKey] = useState(defaultSelectedKey || items[0]?.key || "");
    const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0, width: 0, height: 0 });
    const tabRefs = useRef(new Map());
    const tabListRef = useRef(null);
    const selectedKey = controlledSelectedKey ?? internalSelectedKey;

    const handleSelect = (key) => {
        if (!controlledSelectedKey) {
            setInternalSelectedKey(key);
        }
        onSelectionChange?.(key);
    };

    useEffect(() => {
        const selectedTab = tabRefs.current.get(selectedKey);
        const tabList = tabListRef.current;

        if (selectedTab && tabList) {
            const tabRect = selectedTab.getBoundingClientRect();
            const listRect = tabList.getBoundingClientRect();

            setCursorStyle({
                left: tabRect.left - listRect.left,
                top: tabRect.top - listRect.top,
                width: tabRect.width,
                height: tabRect.height,
            });
        }
    }, [selectedKey, items]);

    const selectedItem = items.find((item) => item.key === selectedKey);

    const getTabStyles = (item) => {
        const isSelected = item.key === selectedKey;

        const base = cn(
            "relative z-10",
            "md:w-full w-auto",
            "shrink-0 whitespace-nowrap",
            "transition-colors duration-200",
            "flex items-center justify-start gap-2",
            "px-4 py-2",
            "rounded-lg",
            "cursor-pointer",
            isSelected ? 'text-neutral-300 dark:text-slate-950' : "text-neutral-500 hover:text-neutral-700"
        );

        return base
    };

    return (
        <div className={cn("w-full", "flex flex-col md:flex-row gap-4", className)}>
            <div
                ref={tabListRef}
                className="relative flex flex-row md:flex-col flex-nowrap gap-1 p-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg shrink-0 overflow-x-auto md:overflow-x-visible
        overflow-y-hidden md:overflow-y-auto
        scroll-smooth"
            >
                <motion.div
                    className="absolute z-0 bg-zinc-900 dark:bg-white rounded-lg"
                    initial={false}
                    animate={{
                        left: cursorStyle.left,
                        top: cursorStyle.top,
                        width: cursorStyle.width,
                        height: cursorStyle.height,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                    }}
                />

                {items.map((item) => (
                    <button
                        key={item.key}
                        ref={(el) => {if (el) tabRefs.current.set(item.key, el);}}
                        onClick={() => !item.disabled && handleSelect(item.key)}
                        disabled={item.disabled}
                        className={getTabStyles(item)}
                        role="tab"
                        aria-selected={item.key === selectedKey}
                    >
                        <span className="font-medium text-base">{item.title}</span>
                    </button>
                ))}
            </div>

            <motion.div
                key={selectedKey}
                initial={{ opacity: 0, y: 0, x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-foreground flex-1"
                role="tabpanel"
            >
                {typeof selectedItem?.content === "object" ? (
                    <PortfolioCard data={selectedItem.content} />
                ) : (
                    selectedItem?.content
                )}
            </motion.div>
        </div>
    );
}

export default Tabs;