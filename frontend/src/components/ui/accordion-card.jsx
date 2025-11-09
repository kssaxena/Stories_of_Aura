import { AnimatePresence, motion, spring } from "framer-motion";
import { useState } from "react";

const AccordionCard = ({ logo, propertyImage, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const wordLimit = 100;
  const introText =
    typeof description === "string" ? description : description?.intro ?? "";

  const truncatedText =
    introText.split(" ").slice(0, wordLimit).join(" ") + "...";
  return (
    <div className="h-fit w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center h-fit max-w-7xl border-t py-20 ">
        <div className="flex justify-center items-center gap-10 w-full">
          {/* <img
            className="w-96 h-96 object-contain bg-neutral-950"
            src={logo}
            alt="Logo"
          /> */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-full h-[28rem] object-cover rounded-xl "
            src={propertyImage}
            alt="Footer"
          />
        </div>

        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="font-agile text-5xl uppercase py-10 text-center w-full"
          >
            {title}
          </motion.h1>

          {/* Accordion-Style Expandable Paragraph */}
          <div className="max-w-5xl mx-auto text-lg text-gray-300 leading-relaxed">
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="expanded"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden space-y-6"
                >
                  {/* Main intro paragraph */}
                  <p>{introText}</p>

                  {/* Optional subsections if provided */}
                  {typeof description === "object" &&
                    Array.isArray(description.sections) &&
                    description.sections.map((sec, i) => (
                      <div key={i} className="space-y-2">
                        <h3 className="text-2xl font-semibold text-white">
                          {sec.heading}
                        </h3>
                        <p className="text-gray-300 text-base">{sec.text}</p>
                      </div>
                    ))}
                </motion.div>
              ) : (
                <motion.p
                  key="collapsed"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "5rem", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  {truncatedText}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Read More / Less Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="mt-4 text-red-500 hover:text-red-300 font-semibold transition-colors duration-300 flex items-center gap-1 mx-auto"
            >
              {isOpen ? (
                <>
                  Read less{" "}
                  <motion.span
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▲
                  </motion.span>
                </>
              ) : (
                <>
                  Read more{" "}
                  <motion.span
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
