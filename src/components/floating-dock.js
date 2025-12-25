'use client'

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";

export const FloatingDock = ({items, desktopClassName, mobileClassName}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({items, className}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2">
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <a href={item.href} key={item.title} className="flex size-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900">
                                    <div className="size-7">{item.icon}</div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="flex size-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800">
                <IconLayoutNavbarCollapse className="size-7 text-slate-950 dark:text-white" />
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({items, className}) => {
    let mouseY = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseY.set(e.clientY)}
            onMouseLeave={() => mouseY.set(Infinity)}
            className={cn(
                "mx-auto hidden w-16 flex-col items-center gap-4 rounded-2xl bg-zinc-200 py-4 md:flex dark:bg-zinc-900",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseY={mouseY} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({mouseY, title, icon, href}) {
    let ref = useRef(null);

    let distance = useTransform(mouseY, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
        return val - bounds.y - bounds.height / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <a href={href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex aspect-square items-center justify-center rounded-full bg-zinc-300 dark:bg-zinc-800"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, x: 10, y: "-50%" }}
                            animate={{ opacity: 1, x: 0, y: "-50%" }}
                            exit={{ opacity: 0, x: 2, y: "-50%" }}
                            className="absolute top-1/2 right-full mr-2 w-fit rounded-md border border-zinc-300 bg-zinc-200 text-slate-950 px-2 py-0.5 text-xs whitespace-pre dark:border-zinc-900 dark:bg-zinc-800 dark:text-white"
                        >
                        {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </a>
    );
}
