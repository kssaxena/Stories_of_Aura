import bg from "../../assets/Nssrie.jpg";
import mountainImage from "../../assets/mountain-hero.jpg";
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
import { heroBgImage } from "../../constants/FileConstants";

const HeroSection = () => {
  // subtle mouse-follow parallax (for house/video & foreground elements)
  // const mouseX = useMotionValue(0);
  // const mouseY = useMotionValue(0);

  // // transform values to make gentle movement
  // const translateX = useTransform(mouseX, [-1000, 1000], [-12, 12]);
  // const translateY = useTransform(mouseY, [-1000, 1000], [-8, 8]);
  // const floatY = useTransform(mouseY, [-300, 300], [8, -8]);

  // function handleMouseMove(e) {
  //   const halfW = window.innerWidth / 2;
  //   const halfH = window.innerHeight / 2;
  //   mouseX.set(e.clientX - halfW);
  //   mouseY.set(e.clientY - halfH);
  // }

  return (
    <div
      className="w-full lg:h-screen overflow-hidden bg-black/20 text-white flex flex-col justify-center items-center gap-4 relative"
      // onMouseMove={handleMouseMove}
    >
      <section className="relative w-full h-screen  overflow-hidden bg-hero">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBgImage}
            alt="Mountain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />
        </div>

        {/* Cave overlays */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-hero-cave via-hero-cave/70 to-transparent z-5" />
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-hero-cave/60 to-transparent z-5" />
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-hero-cave/60 to-transparent z-5" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          {/* <div className="mb-5">
               <MountainIcon />
             </div> */}

          <motion.h1 className="w-full md:text-[4rem] lg:text-[6rem] text-[32px] font-semibold uppercase lg:tracking-widest md:tracking-widest tracking-normal flex justify-center items-center lg:gap-16 md:gap-10 gap-5 select-none z-20">
            <motion.span
              className="bg-clip-text text-white/80  md:tracking-widest lg:-translate-y-0 -translate-y-0 opacity-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, type: spring }}
            >
              stories
            </motion.span>{" "}
            <motion.span
              className="bg-clip-text text-white/80 md:tracking-widest lg:-translate-y-0 -translate-y-0 opacity-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: spring }}
            >
              of{" "}
            </motion.span>
            <motion.span
              className="font-blanka text-white/80 lg:tracking-[2rem] tracking-widest lg:-translate-y-2 -translate-y-1 opacity-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, type: spring }}
            >
              aura
            </motion.span>
          </motion.h1>
          <div className="">
            <motion.p className="font-samarkan lg:text-5xl md:text-3xl text-2xl mix-blend-difference text-gray-200">
              Documenting Indian Hospitality{" "}
            </motion.p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-hero-cave/40 to-transparent z-5" />
      </section>

      {/* Social bar */}
      <div className="absolute top-10 w-full z-20">
        <div className="flex md:justify-end justify-start items-center px-10">
          <div className="flex md:gap-5 gap-2 justify-center items-center w-fit">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.1, type: spring }}
                className={`hover:scale-110 transition lg:text-3xl md:text-3xl text-lg ${social.className} cursor-pointer h-full w-full object-contain`}
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
    </div>
  );
};

export default HeroSection;
