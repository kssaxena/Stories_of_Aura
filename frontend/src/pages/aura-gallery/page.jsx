import React, { useRef } from "react";
import GalleryFeed from "../../components/ui/gallery-feed";
import { pinterestUrls } from "../../constants/FileConstants";
import {
  AnimatePresence,
  motion,
  spring,
  useScroll,
  useTransform,
} from "framer-motion";

const Gallery = () => {
  const ref = useRef(null);

  // Scroll for first motion section
  const { scrollYProgress: scrollY1 } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const y = useTransform(scrollY1, [0, 1], ["1000px", "-1000px"]);

  const opacity = useTransform(scrollY1, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  return (
    <div>
      <motion.div
        ref={ref}
        style={{ y, opacity }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
        className="flex justify-center items-center flex-col lg:gap-20 gap-10 h-screen px-5"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: spring }}
          className="font-agile text-5xl uppercase border-b border-red-500 lg:px-20 md:px-20"
        >
          Aura gallery
        </motion.h1>
        <h1 className="lg:text-5xl md:text-4xl flex flex-col lg:flex-row text-[28px] lg:gap-5 gap-1 justify-center items-center">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, type: spring }}
          >
            In India, we say
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, type: spring }}
            className="font-samarkan"
          >
            "Dikhega toh bikega"
          </motion.span>
        </h1>
        <h1 className="lg:w-[58rem] text-center lg:text-[22px]">
          Visibility is everything. For the past three years, we’ve made it our
          mission to ensure that the brands we work with are not only visible in
          the market, but memorable in the minds of their audience. We don’t
          settle for attention, we build lasting recall.
        </h1>
        <h1 className="lg:text-3xl md:text-3xl uppercase font-semibold flex flex-col justify-center items-center">
          Want to see ?{" "}
          <span className="text-red-500 lg:px-10 flex justify-center items-start gap-10">
            how and what we showcase
            <div className="relative w-[2px] h-20 overflow-hidden">
              <span className="absolute inset-0 bg-[#DF3F33] animate-bounce duration-1000"></span>
            </div>
          </span>
        </h1>
      </motion.div>
      <div className="h-fit">
        <GalleryFeed images={pinterestUrls} />
      </div>
    </div>
  );
};

export default Gallery;
