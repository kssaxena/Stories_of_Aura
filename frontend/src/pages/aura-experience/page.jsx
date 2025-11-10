import {
  AnimatePresence,
  motion,
  spring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import AccordionCard from "../../components/ui/accordion-card";
import { AccordionData } from "../../constants/FileConstants";

const AuraExperience = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

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
  const { scrollYProgress: scrollY3 } = useScroll({
    target: ref3,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const y = useTransform(scrollY1, [0, 1], ["1000px", "-1000px"]);
  const y2 = useTransform(scrollY2, [0, 1], ["1000px", "-1000px"]);
  const y3 = useTransform(scrollY2, [0, 1], ["500px", "-500px"]);

  const opacity = useTransform(scrollY1, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const opacity2 = useTransform(scrollY2, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const opacity3 = useTransform(scrollY2, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  return (
    <div className="flex justify-center items-center flex-col pb-20">
      <motion.div
        ref={ref}
        style={{ y, opacity }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
        className="flex justify-center items-center flex-col gap-20 h-screen"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: spring }}
          className="font-agile text-5xl uppercase border-b border-red-500 px-20"
        >
          Aura Experience
        </motion.h1>
        <h1 className="text-5xl">
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
        <h1 className="w-[58rem] text-center text-[22px]">
          Visibility is everything. For the past three years, we’ve made it our
          mission to ensure that the brands we work with are not only visible in
          the market, but memorable in the minds of their audience. We don’t
          settle for attention, we build lasting recall.
        </h1>
        <h1 className="text-3xl uppercase font-semibold flex justify-center items-start">
          Want to see how ?{" "}
          <span className="text-red-500 px-10 flex justify-center items-start gap-10">
            Scroll Down
            <div className="relative w-[2px] h-20 overflow-hidden">
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
        <div className="absolute top-0 left-0 z-0 opacity-5 grayscale-75 w-full h-full bg-cyan-500">
          <motion.img
            ref={ref3}
            style={{ y3, opacity3 }}
            transition={{ type: "spring", stiffness: 60, damping: 100 }}
            className="object-cover sticky top-0"
            src={`https://ik.imagekit.io/krb6qpkbp/Footer/footer_bg.jpg?updatedAt=1762334189213`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AuraExperience;
