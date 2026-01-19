"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(2, 5);
  const secondRow = products.slice(4, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <motion.div
      ref={ref}
      // className="xl:h-[290vh] 2xl:h-[260vh] md:h-[320vh] h-[260vh] py-0 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] inset-shadow-sm shadow-black bg-black/50"
      className="md:h-[300vh] h-[210vh] py-0 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] inset-shadow-sm shadow-black bg-black/50"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
const words = [
  { text: "Curating" },
  { text: "experiences" },
  { text: "for" },
  { text: "properties" },
  { text: "that" },
  { text: "deserve" },
  { text: "more" },
  { text: "than" },
  {
    text: "attention",
    className: "text-[#DF3F33] uppercase",
  },
];

export const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["500px", "-500px"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.8]
  );
  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      transition={{ type: "spring", stiffness: 60, damping: 25 }}
      className="max-w-7xl relative mx-auto lg:py-20 md:py-40 py-20 px-4 w-full left-0 top-0"
    >
      <h1 className="text-2xl md:text-3xl font-bold dark:text-white px-2">
        <TypewriterEffectSmooth words={words} />
      </h1>
      <p className="max-w-2xl text-sm md:text-xl mt-8 dark:text-white text-justify leading-relaxed">
        In a world overflowing with content, genuine experiences stand out.
        That’s why we focus on curating emotions, not just aesthetics. We
        combine creativity, strategy, and authenticity to help properties find
        their true voice. Whether it’s through photography, film, or digital
        storytelling, we ensure your audience doesn’t just see your property,
        they feel it.
      </p>
    </motion.div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="
        group/product 
        relative 
        shrink-0 
        h-60 w-[16rem]           /* Mobile size */
        sm:h-72 sm:w-[20rem]     /* Small screens */
        md:h-80 md:w-[24rem]     /* Medium screens */
        lg:h-96 lg:w-[30rem]     /* Desktop */
      "
    >
      <a
        href={product.link}
        target="blank"
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          className="
            object-cover object-center 
            absolute inset-0 
            h-full w-full
          "
          alt={product.title}
        />
      </a>

      {/* Hover overlay */}
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>

      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
