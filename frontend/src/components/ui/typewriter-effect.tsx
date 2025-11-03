"use client";

import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * Props:
 *  words: [{ text: "Curating", className?: "..." }, ...]
 *  className: wrapper classes
 *  cursorClassName: classes for cursor
 *  charDelay: delay between characters (default 0.03)
 *  replayOnView: replays every time it re-enters view (default false)
 */
export const TypewriterEffectSmooth = ({
  words = [],
  className,
  cursorClassName,
  charDelay = 0.03,
  replayOnView = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-10% 0px", // trigger slightly before fully visible
    once: !replayOnView, // play once or replay each time
  });

  // Build a flat array of characters
  const chars = useMemo(() => {
    const arr = [];
    words.forEach((w, wi) => {
      const cls = w.className || "";
      const split = Array.from(w.text);
      split.forEach((ch) => arr.push({ ch, className: cls }));
      if (wi < words.length - 1) arr.push({ ch: "\u00A0", className: "" }); // space
    });
    return arr;
  }, [words]);

  // Motion variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: charDelay,
        delayChildren: 0.2,
      },
    },
  };

  const char = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { ease: [0.2, 0.8, 0.2, 1] } },
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-block text-left leading-tight break-words",
        className
      )}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline"
        aria-hidden={false}
      >
        {chars.map((c, i) => (
          <motion.span
            key={`c-${i}-${c.ch}`}
            variants={char}
            className={cn(
              "inline-block align-baseline whitespace-pre-wrap",
              c.className
            )}
            style={{ willChange: "transform, opacity" }}
          >
            {c.ch}
          </motion.span>
        ))}

        {/* Cursor */}
        <motion.span
          aria-hidden="true"
          className={cn(
            "inline-block ml-1 align-baseline w-[4px] h-4 sm:h-6 xl:h-8 rounded-sm bg-[#DF3F33]",
            cursorClassName
          )}
          animate={
            isInView ? { opacity: [0, 1, 0] } : { opacity: 0 } // hide when out of view
          }
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.2,
            delay: Math.max(0.2, chars.length * charDelay - 0.05),
          }}
        />
      </motion.span>
    </div>
  );
};

export default TypewriterEffectSmooth;
