import React from "react";
// import bg from "../assets/background1.jpg";
// import bg from "../../assets/background.png";
import bg from "../../assets/Nssrie.jpg";
import { motion, spring, useMotionValue, useTransform } from "framer-motion";

const HeroSection = () => {
  // subtle mouse-follow parallax (for house/video & foreground elements)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // transform values to make gentle movement
  const translateX = useTransform(mouseX, [-5000, 5000], [-12, 12]);
  const translateY = useTransform(mouseY, [-5000, 5000], [-8, 8]);
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
        // src="https://ik.imagekit.io/krb6qpkbp/Home/Nssrie.jpg?updatedAt=1762030099539"
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
          className="font-blanka tracking-[2rem]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: spring }}
        >
          aura
        </motion.span>
      </motion.h1>
      {/* Bottom text */}
      {/* <div className="w-fit text-center text-black">
        <h2 className="tracking-wider mix-blend-color-burn font-bold drop-shadow-2xl">
          Curating experiences for properties that deserve more than attention
        </h2>
      </div> */}

      <div className="">
        <p className="font-samarkan text-5xl mix-blend-difference">
          Documenting Indian Hospitality{" "}
        </p>
      </div>
      {/* <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: spring }}
        className="
          absolute lg:top-1/3 top-1/4 w-full md:text-[5.5rem] lg:text-[6rem] text-[4rem] font-semibold uppercase tracking-widest leading-none text-white mix-blend-overlay flex justify-center items-center"
      >
        stories of aura
      </motion.h1> */}

      {/* Navbar */}
      {/* <nav
        className="
          absolute top-14 right-16 flex space-x-10 text-[13px] tracking-widest 
          uppercase font-medium z-30
        "
      >
        {["Home", "Works", "Blogs", "Packages", "About us", "Contacts"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {item}
            </a>
          )
        )}
      </nav> */}
    </div>
  );
};

export default HeroSection;
