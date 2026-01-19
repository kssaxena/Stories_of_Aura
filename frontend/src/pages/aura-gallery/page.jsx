import React, { useRef, useState, useEffect, useMemo } from "react";
import GalleryFeed from "../../components/ui/gallery-feed";
import { bgImage, galleryImage } from "../../constants/FileConstants";
import {
  AnimatePresence,
  motion,
  spring,
  useScroll,
  useTransform,
} from "framer-motion";
import { shuffleArray } from "../../utils/imageShuffle";

/* ----------------------------------
   Minimal Loader (inline for clarity)
----------------------------------- */
const MinimalLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <p className="tracking-widest uppercase">
        {" "}
        Polishing the lenses... <br />
        Please wait...
      </p>
      <div className="relative w-[2px] h-20 overflow-hidden">
        <motion.span
          className="absolute inset-0 bg-[#DF3F33]"
          animate={{ y: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

const AuraGallery = () => {
  const ref = useRef(null);

  const shuffledImages = useMemo(() => shuffleArray(galleryImage), []);
  const featuredImage = useMemo(() => shuffleArray(galleryImage.slice(0, 10)));

  const [isLoaded, setIsLoaded] = useState(false);

  /* ----------------------------------
     Preload ALL images (bg + gallery)
  ----------------------------------- */
  useEffect(() => {
    const getSrc = (img) =>
      typeof img === "string" ? img : img?.url || img?.src;

    const sources = [bgImage, ...shuffledImages].map(getSrc).filter(Boolean);

    if (sources.length === 0) {
      setIsLoaded(true);
      return;
    }

    let loadedCount = 0;

    const handleDone = () => {
      loadedCount += 1;
      if (loadedCount === sources.length) {
        setIsLoaded(true);
      }
    };

    sources.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleDone;
      img.onerror = handleDone; // ✅ IMPORTANT
    });
  }, [shuffledImages]);

  /* ----------------------------------
     Scroll animations (SAFE)
     ref is ALWAYS mounted
  ----------------------------------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["1000px", "-1000px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0, 1], [0, 1, 1, 0.8]);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>{!isLoaded && <MinimalLoader />}</AnimatePresence>

      {/* Content (always mounted → no hydration error) */}
      <div
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Hero Section */}
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
            className="font-agile text-5xl uppercase border-b border-red-500 lg:px-20"
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
            </motion.span>
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
            Visibility is everything. For the past three years, we’ve made it
            our mission to ensure that the brands we work with are not only
            visible in the market, but memorable in the minds of their audience.
          </h1>

          <h1 className="lg:text-3xl uppercase font-semibold flex flex-col items-center">
            Want to see ?
            <span className="text-red-500 flex items-start gap-6">
              how and what we showcase
              <div className="relative w-[2px] h-20 overflow-hidden">
                <span className="absolute inset-0 bg-[#DF3F33] animate-bounce" />
              </div>
            </span>
          </h1>
        </motion.div>

        {/* Gallery */}
        <div className="relative h-fit flex flex-col justify-center items-center gap-10">
          <h1 className="font-agile text-3xl md:text-5xl uppercase border-b border-red-500 w-fit">
            featured
          </h1>
          <GalleryFeed images={featuredImage} />
        </div>
        <div className="relative h-fit flex flex-col justify-center items-center gap-10">
          <h1 className="font-agile text-3xl md:text-5xl uppercase border-b border-red-500 w-fit">
            Gallery
          </h1>
          <GalleryFeed images={shuffledImages} />
        </div>
      </div>
    </>
  );
};

export default AuraGallery;
