'use client';

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import { useState } from "react";

export const CardHoverEffect = ({ items, className }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-10", className)}>
            {items.map((item, idx) => (
                <a
                    target="_blank"
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                        <motion.span
                            className="absolute inset-0 h-full w-full bg-zinc-300 dark:bg-zinc-800/80 block rounded-3xl"
                            layoutId="hoverBackground"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { duration: 0.15 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.15, delay: 0.2 },
                            }} />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardImage src={item.logo} />
                        <div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </div>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export const Card = ({ className, children }) => {
    return (
        <div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border border-black/20 dark:border-white/20 group-hover:border-black/30  relative z-20", className)}>
            <div className="relative z-50">
                <div className="flex items-center gap-3 p-2">{children}</div>
            </div>
        </div>
    );
};

export const CardImage = ({ src }) => {
    return (
        <Image src={src} alt="alt" width={40} height={40} />
    );
};

export const CardTitle = ({ className, children }) => {
    return (
        <h4 className={cn(" text-slate-950 dark:text-neutral-100 font-bold tracking-wide", className)}>
        {children}
        </h4>
    );
};

export const CardDescription = ({ className, children }) => {
    return (
        <p className={cn(" text-neutral-400 dark:text-neutral-600 tracking-wide leading-relaxed text-xs", className)}>
            {children}
        </p>
    );
};
