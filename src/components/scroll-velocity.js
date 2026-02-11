'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const ScrollVelocity = ({
  texts = [],
  velocity = 20,
  className = "",
  numCopies = 3,
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle,
  scrollerStyle,
}) => {
  const containerRef = useRef(null);

  const { scrollY } = useScroll();

  // Mapping scroll position → animation speed
  const speed = useTransform(
    scrollY,
    [0, 1000],
    [velocity, velocity * 0.3] // makin scroll bawah makin lambat
  );

  return (
    <section ref={containerRef}>
      {texts.map((text, index) => (
        <VelocityRow
          key={index}
          text={text}
          speed={speed}
          direction={index % 2 === 0 ? 1 : -1}
          numCopies={numCopies}
          className={className}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        />
      ))}
    </section>
  );
};

function VelocityRow({
  text,
  speed,
  direction,
  numCopies,
  className,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) {
  return (
    <div
      className={`relative overflow-hidden ${parallaxClassName}`}
      style={parallaxStyle}
    >
      <motion.div
        className={`flex whitespace-nowrap will-change-transform ${scrollerClassName}`}
        style={{
          animationName: direction === 1 ? "marquee-left" : "marquee-right",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDuration: speed, // dynamic duration
          ...scrollerStyle,
        }}
      >
        {[...Array(numCopies)].map((_, i) => (
          <span
            key={i}
            className={`shrink-0 ${className}`}
          >
            {text}&nbsp;
          </span>
        ))}
      </motion.div>

      <style jsx>{`
        @keyframes marquee-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

export default ScrollVelocity;
