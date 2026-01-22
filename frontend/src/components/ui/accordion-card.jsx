import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordionCard = ({ logo, propertyImage, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const introText =
    typeof description === "string" ? description : (description?.intro ?? "");

  return (
    <div className="w-full max-w-7xl my-20 mx-auto ">
      <div className="rounded-2xl overflow-hidden backdrop-blur-3xl border border-neutral-800">
        {/* Header (same pattern as Policies) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex flex-col items-center justify-between px-6 py-5 "
        >
          {propertyImage && (
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={propertyImage}
              alt={title}
              className="w-full h-[28rem] object-cover rounded-xl"
            />
          )}
          <div className="w-full flex items-center justify-between px-6 py-5 ">
            <h2 className="text-xl lg:text-2xl font-semibold text-white uppercase">
              {title}
            </h2>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="w-6 h-6 text-gray-300" />
            </motion.div>
          </div>
        </button>

        {/* Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden backdrop-blur-3xl"
            >
              <div className="p-6 space-y-8">
                {/* Intro */}
                {introText && (
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {introText}
                  </p>
                )}

                {/* Sections */}
                {typeof description === "object" &&
                  Array.isArray(description.sections) &&
                  description.sections.map((sec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <h3 className="text-2xl font-semibold text-white">
                        {sec.heading}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-justify">
                        {sec.text}
                      </p>
                    </motion.div>
                  ))}
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex flex-col items-center justify-between px-6 py-5 "
              >
                Close <FaChevronUp className="w-6 h-6 text-gray-300" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AccordionCard;
