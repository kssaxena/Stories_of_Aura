import bg from "../../assets/Nssrie.jpg";
import {
  motion,
  spring,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  socialLinks,
  socialLinksFooter,
} from "../../constants/ComponentConstants";
import { useRef } from "react";

const HeroSection = () => {
  // subtle mouse-follow parallax (for house/video & foreground elements)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // transform values to make gentle movement
  const translateX = useTransform(mouseX, [-300, 300], [-12, 12]);
  const translateY = useTransform(mouseY, [-300, 300], [-8, 8]);
  const floatY = useTransform(mouseY, [-300, 300], [8, -8]);

  function handleMouseMove(e) {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    mouseX.set(e.clientX - halfW);
    mouseY.set(e.clientY - halfH);
  }

  return (
    <div
      className=" w-full h-screen overflow-hidden bg-black text-white flex flex-col justify-start items-center gap-4 py-60"
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      <motion.img
        src={bg}
        alt="Glasshaven Modern House"
        className="w-full h-full object-cover opacity-80 absolute top-0 left-0"
      />

      {/* Semi-transparent overlay for tone */}
      {/* <div className="absolute inset-0 bg-black/30 z-20 w-full" /> */}

      {/* Large GLASSHAVEN title — partially behind the roof */}
      <motion.h1
        style={{ x: translateX, y: translateY }}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
        className="w-full md:text-[5.5rem] lg:text-[6rem] text-[4rem] font-semibold uppercase tracking-widest leading-none text-white mix-blend-overlay flex justify-center items-center gap-16 select-none"
      >
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, type: spring }}
        >
          stories
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, type: spring }}
        >
          of{" "}
        </motion.span>
        <motion.span
          className="font-blanka tracking-[2rem] -translate-y-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: spring }}
        >
          aura
        </motion.span>
      </motion.h1>

      <div className="">
        <motion.p className="font-samarkan text-5xl mix-blend-difference text-gray-200">
          Documenting Indian Hospitality{" "}
        </motion.p>
      </div>

      {/* Social bar */}
      <div className="absolute top-10 right-16">
        <div className="flex gap-5 p-2 justify-center items-center ">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.1, type: spring }}
              className={`hover:scale-110 transition text-3xl ${social.className} cursor-pointer`}
              title={social.name}
              href={social.path}
              target="blank"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
