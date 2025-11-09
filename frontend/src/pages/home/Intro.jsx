import { HeroParallax } from "../../components/ui/hero-parallax";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { journeyMapData, products, w1, w2 } from "../../constants/FileConstants";
import { Timeline } from "../../components/ui/timeline";
import { TimeLineData } from "../../constants/ComponentConstants";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import bg from "../../assets/Nssrie.jpg";
import TypewriterEffectSmooth from "../../components/ui/typewriter-effect";
import JourneyMap from "../../components/ui/journeyMap";
import EnquiryForm from "../../components/enquiry-form";

const IntroSection = () => {
  const ref1 = useRef(null);
  const [isActive, setIsActive] = useState(false);

  // Scroll for first motion section
  const { scrollYProgress: scrollY1 } = useScroll({
    target: ref1,
    offset: ["start end", "end start"],
  });

  // // Scroll for second motion section
  // const { scrollYProgress: scrollY2 } = useScroll({
  //   target: ref2,
  //   offset: ["start end", "end start"],
  // });

  // Parallax movement
  const y = useTransform(scrollY1, [0, 1], ["200px", "-200px"]);
  // const y2 = useTransform(scrollY2, [0, 1], ["500px", "-500px"]);

  const opacity = useTransform(scrollY1, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  

  return (
    <div>
      <HeroParallax products={products} />
      <div className="h-fit w-full rounded-md bg-neutral-800 relative flex flex-col items-center justify-center pt-20">
        <div className="absolute top-0 h-full bg-gradient-t from-black to-transparent">
          <img src={bg} className="sticky top-0 opacity-30 " />
        </div>
        <div className="absolute inset-0 bg-black/50 w-full" />

        {/* First Parallax Section */}
        <motion.div
          ref={ref1}
          style={{ y, opacity }}
          transition={{ type: "spring", stiffness: 60, damping: 25 }}
          className="w-full z-10"
        >
          <TextHoverEffect text="Stories of AURA" />
          <h1 className="flex flex-col font-medium justify-center items-center gap-2 text-7xl">
            <span>
              <TypewriterEffectSmooth words={w1} />{" "}
            </span>
            <span>
              <TypewriterEffectSmooth words={w2} />
            </span>
          </h1>
        </motion.div>

        {/* Second Parallax Section */}
        <motion.div
          // ref={ref2}
          // style={{ y: y2, opacity }}
          // transition={{ type: "spring", stiffness: 60, damping: 25 }}
          className="z-10"
        >
          <Timeline data={TimeLineData} />
        </motion.div>
        <div className="w-full z-10 py-40">
          <h2 className="text-7xl mb-4 text-black dark:text-neutral-300 max-w-4xl font-agile tracking-widest border-b border-[#FA2C37] ml-40">
            How we do these...!
          </h2>
          <JourneyMap data={journeyMapData} />
          <h2 className="text-6xl mb-4 text-black dark:text-neutral-300 max-w-4xl font-agile tracking-widest ml-40">
            Let's{" "}
            <span
              className="text-[#FA2C37]/80 hover:underline cursor-pointer uppercase"
              onClick={() => setIsActive(true)}
            >
              collaborate
            </span>{" "}
            !
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
            className="fixed top-0 left-0 w-full h-screen backdrop-blur-3xl z-50 justify-center items-center flex"
          >
            <EnquiryForm onCancel={() => setIsActive(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroSection;
