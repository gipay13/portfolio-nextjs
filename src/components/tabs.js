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
    const [internalSelectedKey, setInternalSelectedKey] = useState(
        defaultSelectedKey || items[0]?.key || ""
    );

    const [cursorStyle, setCursorStyle] = useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    });

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
                left: tabRect.left - listRect.left + tabList.scrollLeft,
                top: tabRect.top - listRect.top + tabList.scrollTop,
                width: tabRect.width,
                height: tabRect.height,
            });
        }
    }, [selectedKey, items]);

    const selectedItem = items.find((item) => item.key === selectedKey);

    const getTabStyles = (item) => {
        const isSelected = item.key === selectedKey;

        return cn(
            "relative z-10",
            "shrink-0 md:w-full min-w-0",
            "flex items-center",
            "px-4 py-2",
            "rounded-lg",
            "cursor-pointer text-left",
            "transition-colors duration-200",
            isSelected
                ? "text-neutral-300 dark:text-slate-950"
                : "text-neutral-500 hover:text-neutral-700"
        );
    };

    return (
        <div
            className={cn(
                "w-full",
                "grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4",
                className
            )}
        >
            {/* TAB LIST */}
            <div
                ref={tabListRef}
                className="
                    relative min-w-0
                    flex flex-row md:flex-col
                    flex-nowrap md:flex-wrap
                    gap-1 p-1
                    bg-white dark:bg-black
                    border border-black/10 dark:border-white/10
                    rounded-lg

                    overflow-x-auto md:overflow-x-visible
                    overflow-y-hidden md:overflow-y-auto

                    scroll-smooth
                "
            >
                {/* Animated Cursor */}
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
                        ref={(el) => {
                            if (el) tabRefs.current.set(item.key, el);
                        }}
                        onClick={() =>
                            !item.disabled && handleSelect(item.key)
                        }
                        disabled={item.disabled}
                        className={getTabStyles(item)}
                        role="tab"
                        aria-selected={item.key === selectedKey}
                    >
                        <span className="font-medium text-base w-full whitespace-normal md:truncate">
                            {item.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* TAB PANEL */}
            <motion.div
                key={selectedKey}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="min-w-0"
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