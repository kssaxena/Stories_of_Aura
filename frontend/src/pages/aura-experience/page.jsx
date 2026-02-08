import {
  AnimatePresence,
  motion,
  spring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import AccordionCard from "../../components/ui/accordion-card";
import { AccordionData, bgImage } from "../../constants/FileConstants";

const AuraExperience = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  // Scroll for first motion section
  const { scrollYProgress: scrollY1 } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll for second motion section
  const { scrollYProgress: scrollY2 } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const y = useTransform(scrollY1, [0, 1], ["1000px", "-1000px"]);
  const y2 = useTransform(scrollY2, [0, 1], ["1000px", "-1000px"]);

  const opacity = useTransform(scrollY1, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const opacity2 = useTransform(scrollY2, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  return (
    <div className="flex justify-center items-center flex-col pb-20">
      <div className="fixed top-0 left-0 h-full w-full bg-black">
        <img
          src={bgImage}
          className="h-screen object-cover w-full opacity-40"
        />
      </div>
      <motion.div
        ref={ref}
        style={{ y, opacity }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
        className="flex justify-start md:justify-center items-center flex-col lg:gap-20 gap-10 h-screen px-5 relative pt-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: spring }}
          className="font-agile lg:text-5xl md:text-5xl text-[30px] uppercase border-b border-red-500 lg:px-20 md:px-20 text-center"
        >
          {/* Aura experience */}
          Stories of Growth & Transformation
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
        <h1 className="lg:w-[80rem] text-center text-[12px] lg:text-[22px]">
          Behind every growing brand lies a story worth telling. <br /> On this
          page, we share real success stories from our partner hotels, their
          challenges, transformations, and the creative journeys that turned
          visions into thriving hospitality brands. Each case study highlights
          how our tailored strategies in branding, design, and digital
          storytelling helped properties elevate their presence, attract the
          right guests, and grow with purpose. Dive in to see how we bring
          hotels to life through the art of experience driven storytelling.
        </h1>
        {/* <h1 className="lg:w-[58rem] text-center lg:text-[22px]">
          Visibility is everything. For the past three years, we’ve made it our
          mission to ensure that the brands we work with are not only visible in
          the market, but memorable in the minds of their audience. We don’t
          settle for attention, we build lasting recall.
        </h1> */}
        <h1 className="lg:text-3xl md:text-3xl uppercase font-semibold flex lg:flex-row flex-col justify-center lg:items-start">
          Want to see how ?{" "}
          <span className="text-red-500 lg:px-10 flex justify-center items-start gap-10">
            scroll down
            <div className="relative w-[2px] lg:h-20 h-10 overflow-hidden">
              <span className="absolute inset-0 bg-[#DF3F33] animate-bounce duration-1000"></span>
            </div>
          </span>
        </h1>
      </motion.div>
      <motion.div
        ref={ref2}
        style={{ y2, opacity2 }}
        transition={{ type: "spring", stiffness: 60, damping: 100 }}
        className="w-full relative"
      >
        {/* accordion section  */}
        {AccordionData.map((item, index) => (
          <AccordionCard
            key={index}
            logo={item.logo}
            propertyImage={item.propertyImage}
            title={item.title}
            description={item.description}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AuraExperience;
