import React, { useRef } from "react";
import {
  AnimatePresence,
  motion,
  spring,
  useScroll,
  useTransform,
} from "framer-motion";
import { PackageData } from "../../constants/ComponentConstants";
import PricingTable from "../../components/ui/pricingTable";
import { bgImage } from "../../constants/FileConstants";

const AuraPackage = () => {
  const ref = useRef(null);
  const { scrollYProgress: scrollY1 } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollY1, [0, 1], ["1000px", "-1000px"]);

  const opacity = useTransform(scrollY1, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  return (
    <div>
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
        className="flex justify-center items-center flex-col lg:gap-20 gap-10 h-screen px-5 relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: spring }}
          className="font-agile lg:text-5xl md:text-5xl text-[40px] uppercase border-b border-red-500 lg:px-20 md:px-20"
        >
          Aura package
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
      <div className="z-20">
        <PricingTable packageData={PackageData} />
      </div>
    </div>
  );
};

export default AuraPackage;
