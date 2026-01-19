import mountainImage from "../../assets/mountain-hero.jpg";
import {
  motion,
  spring,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const MountainIcon = () => (
  <svg
    viewBox="0 0 60 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-6 sm:w-10 sm:h-7 md:w-12 md:h-8 text-hero-foreground"
  >
    <path d="M30 4L45 32H15L30 4Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M42 16L54 32H30L42 16Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const MountainHero = () => {
  return (
    <section className="relative w-full h-screen min-h-[500px] overflow-hidden bg-hero">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={mountainImage}
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
  );
};

export default MountainHero;
