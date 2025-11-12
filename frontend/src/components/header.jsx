import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
import { NavLinks } from "../constants/ComponentConstants";
import { FloatingDock } from "./ui/floating-dock";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IconMenu2 } from "@tabler/icons-react";
import { FloatingDockMobile } from "./ui/floating-dock";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Detect scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      if (!isExpanded) {
        setIsScrolled(window.scrollY > 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    if (isExpanded) {
      // When closing menu, reset scroll-based state
      setIsScrolled(window.scrollY > 100);
    }
  };

  return (
    <div className="z-40">
      <div className="hidden lg:flex md:flex items-end justify-center w-full min-h-screen pb-20 bg-transparent absolute">
        <AnimatePresence>
          <motion.div
            key="dock"
            className="fixed z-50 shadow-lg backdrop-blur-md bg-black/50"
            animate={{
              width: isScrolled && !isExpanded ? 70 : 400,
              height: 70,
              borderRadius: isScrolled && !isExpanded ? "50%" : "1.5rem",
              bottom: isScrolled && !isExpanded ? 30 : 20,
              right: isScrolled && !isExpanded ? 30 : "50%",
              translateX: isScrolled && !isExpanded ? 0 : "50%",
            }}
            transition={{ duration: 1, ease: "easeInOut", type: spring }}
          >
            {/* When shrunk - show menu icon only */}
            {isScrolled && !isExpanded ? (
              <motion.button
                onClick={handleToggle}
                className="w-full h-full flex items-center justify-center text-white"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, type: spring }}
              >
                <IconMenu2 size={30} />
              </motion.button>
            ) : (
              <motion.div
                className="flex items-center justify-center h-full w-full relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, type: spring }}
              >
                <FloatingDock items={NavLinks} />
                {isExpanded && (
                  <button
                    onClick={handleToggle}
                    className="absolute -top-20 text-white text-sm bg-black/60 px-2 py-1 rounded-full hover:bg-black transition"
                  >
                    <IoIosCloseCircleOutline size={40} />
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex z-40">
        <FloatingDockMobile
          items={NavLinks}
          className={"bg-red-00 "}
        />
      </div>
    </div>
  );
};

export default Header;
