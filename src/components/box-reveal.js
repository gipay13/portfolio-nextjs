"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const BoxReveal = ({
    children,
    width = "fit-content",
    boxColorLight,
    boxColorDark,
    duration = 0.5,
}) => {
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [boxColor, setBoxColor] = useState(boxColorLight);

    useEffect(() => {
        const html = document.documentElement;

        const updateThemeColor = () => {
            setBoxColor(html.classList.contains("dark") ? boxColorDark : boxColorLight);
        };

        updateThemeColor();

        const observer = new MutationObserver(updateThemeColor);
        observer.observe(html, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, [boxColorLight, boxColorDark]);

    useEffect(() => {
        if (isInView) {
            slideControls.start("visible");
            mainControls.start("visible");
        } else {
            slideControls.start("hidden");
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div
            ref={ref}
            style={{ position: "relative", width, overflow: "hidden" }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay: 0.25 }}
            >
                {children}
            </motion.div>

            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration, ease: "easeIn" }}
                className="absolute top-1 bottom-1 left-0 right-0 z-20"
                style={{
                    background: boxColor,
                }}
            />
        </div>
    );
};
