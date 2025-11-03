import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
import { IconHome, IconMenu2 } from "@tabler/icons-react";
import { GrWorkshop } from "react-icons/gr";
import { LiaBlogSolid } from "react-icons/lia";
import { RiFileList2Fill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { FloatingDock } from "./ui/floating-dock";
import { IoIosCloseCircleOutline } from "react-icons/io";

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

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Gallery",
      icon: (
        <GrWorkshop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aura Experience",
      icon: (
        <LiaBlogSolid className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Packages",
      icon: (
        <RiFileList2Fill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About Us",
      icon: (
        <IoMdContacts className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact",
      icon: (
        <MdContacts className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="flex items-end justify-center w-full min-h-screen pb-20 bg-transparent absolute">
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
              <FloatingDock items={links} />
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
  );
};

export default Header;
