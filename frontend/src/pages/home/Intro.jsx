import { HeroParallax } from "../../components/ui/hero-parallax";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import {
  bgImage,
  journeyMapData,
  products,
  w1,
  w2,
} from "../../constants/FileConstants";
import { Timeline } from "../../components/ui/timeline";
import { TimeLineData } from "../../constants/ComponentConstants";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bg from "../../assets/Nssrie.jpg";
import TypewriterEffectSmooth from "../../components/ui/typewriter-effect";
import JourneyMap from "../../components/ui/journeyMap";
import EnquiryForm from "../../components/enquiry-form";

const IntroSection = () => {
  // const ref1 = useRef(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isActive) {
      // Lock background scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll when popup closes
      document.body.style.overflow = "";
    }

    // Cleanup (in case component unmounts)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  // const { scrollYProgress: scrollY1 } = useScroll({
  //   target: ref1,
  //   offset: ["start end", "end start"],
  // });
  // const y = useTransform(scrollY1, [0, 1], ["200px", "-200px"]);

  // const opacity = useTransform(scrollY1, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute top-0 h-full w-full bg-black">
          <img
            src={bgImage}
            className="sticky top-0 h-screen object-cover w-full opacity-40"
          />
        </div>
        <HeroParallax products={products} />
      </div>
      <div className="h-fit w-full rounded-md bg-black/90 relative flex flex-col items-center justify-center lg:pt-20 pt-10">
        <div className="absolute top-0 h-full bg-gradient-t from-black to-transparent hidden lg:block md:block">
          <img src={bg} className="sticky top-0 opacity-30 " />
        </div>
        <div className="absolute inset-0 bg-black/50 w-full" />

        <motion.div
          // ref={ref1}
          // style={{ y, opacity }}
          // transition={{ type: "spring", stiffness: 60, damping: 25 }}
          className="w-full z-10 md:py-20 py-10"
        >
          <TextHoverEffect text="Stories of AURA" />
          <h1 className="flex flex-col font-medium justify-center items-center gap-2 lg:text-7xl md:text-5xl text-xl ">
            <span>
              <TypewriterEffectSmooth words={w1} />{" "}
            </span>
            <span>
              <TypewriterEffectSmooth words={w2} />
            </span>
          </h1>
        </motion.div>

        <motion.div className="z-10 overflow-hidden w-full">
          <Timeline data={TimeLineData} />
        </motion.div>
        <div className="w-fit z-10 md:py-40 py-20 ">
          <h2 className="lg:text-7xl md:text-5xl text-2xl mx-10 lg:mx-0 mb-4 text-black dark:text-neutral-300 max-w-4xl font-agile tracking-widest border-b border-[#FA2C37] lg:ml-40 md:mx-10">
            How we do these...!
          </h2>
          <JourneyMap data={journeyMapData} />
          <h2 className="lg:text-7xl md:text-5xl text-2xl mb-4 text-black dark:text-neutral-300 max-w-4xl font-agile tracking-widest lg:ml-40 text-center flex justify-center items-center flex-col lg:flex-row md:flex-row gap-5">
            Let's{" "}
            <span
              className="text-[#FA2C37]/80 hover:underline cursor-pointer uppercase text-4xl lg:text-7xl md:text-5xl"
              onClick={() => setIsActive(true)}
            >
              collaborate !
            </span>{" "}
          </h2>
        </div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", duration: 1, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen backdrop-blur-3xl z-50 justify-center md:items-center items-start py-10 flex overflow-scroll no-scrollbar"
          >
            <EnquiryForm onCancel={() => setIsActive(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroSection;
