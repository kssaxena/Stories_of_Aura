"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import image1 from "../../assets/ReputationManagement.png";

export function ExpandableCard() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] bg-black/80">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[700px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top opacity-80 grayscale-100"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  // 1️⃣ Reputation Management
  {
    description: "Reputation Management",
    title: "Building and Protecting Brand Trust",
    src: "https://ik.imagekit.io/krb6qpkbp/Home/ChatGPT%20Image%20Nov%202,%202025,%2012_42_59%20AM.png?updatedAt=1762025244496",
    ctaText: "Explore",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Reputation Management is the strategic process of shaping and
          maintaining a positive perception of a brand, business, or individual.{" "}
          <br /> <br />
          It involves monitoring public sentiment, managing feedback, and
          addressing negative reviews or misinformation swiftly. Effective
          reputation management helps build trust, credibility, and long-term
          customer loyalty. <br /> <br />
          In the digital age, where opinions spread rapidly across social media
          and review platforms, reputation management plays a crucial role in
          preserving brand integrity and ensuring consistent positive engagement
          with audiences.
        </p>
      );
    },
  },

  // 2️⃣ Performance Marketing
  {
    description: "Performance Marketing",
    title: "Data-Driven Marketing",
    src: "https://ik.imagekit.io/krb6qpkbp/Home/ChatGPT%20Image%20Nov%202,%202025,%2012_50_58%20AM.png?updatedAt=1762025244562",
    ctaText: "Learn More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Performance Marketing focuses on achieving measurable business
          outcomes through targeted campaigns and analytics-based strategies.{" "}
          <br /> <br />
          From paid ads and lead generation to conversion tracking, every action
          is monitored and optimized to deliver maximum ROI. This approach
          ensures that marketing spend directly translates into performance
          metrics such as sales, engagement, or leads. <br /> <br />
          By combining creativity with data, performance marketing empowers
          brands to make smarter, results-oriented decisions and achieve
          sustainable growth.
        </p>
      );
    },
  },

  // 3️⃣ Web Development & Coding
  {
    description: "Web Development & Coding",
    title: "Building Seamless Digital Experiences",
    src: "https://ik.imagekit.io/krb6qpkbp/Home/ChatGPT%20Image%20Nov%202,%202025,%2012_51_55%20AM.png?updatedAt=1762025244515",
    ctaText: "Discover",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Web Development and Coding bring ideas to life through technology,
          enabling interactive, scalable, and high-performance web applications.{" "}
          <br /> <br />
          From front-end design and responsive interfaces to robust back-end
          logic, every component contributes to an intuitive user experience.{" "}
          <br /> <br />
          Skilled developers use frameworks, APIs, and optimized architectures
          to build digital platforms that perform seamlessly across devices —
          ensuring speed, security, and reliability in every line of code.
        </p>
      );
    },
  },

  // 4️⃣ Branding & Designing
  {
    description: "Branding & Designing",
    title: "Crafting Visual Identity ",
    src: "https://ik.imagekit.io/krb6qpkbp/Home/ChatGPT%20Image%20Nov%202,%202025,%2012_57_50%20AM.png?updatedAt=1762025285836",
    ctaText: "View Work",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Branding & Designing combine art and strategy to create meaningful
          visual identities that connect emotionally with audiences. <br />{" "}
          <br />
          From logos and typography to color palettes and brand guidelines,
          design defines how a brand communicates its personality and values.{" "}
          <br /> <br />
          Effective branding goes beyond aesthetics — it builds recognition,
          trust, and loyalty by ensuring every design element aligns with the
          brand’s message and long-term vision.
        </p>
      );
    },
  },

  // 5️⃣ Content Production
  {
    description: "Content Production",
    title: "Creating Impactful Stories That Engage",
    src: "https://ik.imagekit.io/krb6qpkbp/Home/ChatGPT%20Image%20Nov%202,%202025,%2012_57_47%20AM.png?updatedAt=1762025285811",
    ctaText: "Get Started",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Content Production is the creative process of developing engaging and
          high-quality material across different media formats. <br /> <br />
          Whether it’s video, writing, photography, or design, content
          production transforms ideas into stories that inform, inspire, and
          entertain. <br /> <br />
          In today’s digital landscape, well-produced content not only drives
          engagement but also strengthens brand presence, helping businesses
          connect authentically with their target audience.
        </p>
      );
    },
  },
];
