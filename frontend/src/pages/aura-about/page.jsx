import { motion, useScroll, useTransform } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { aboutData } from "../../constants/FileConstants";

const AuraAboutUs = () => {
  return (
    <div className="w-full px-6 md:px-16 py-24 text-white select-none">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Why Hotels & Resorts Struggle With Revenue,
          <br />
          <span className="text-[#DF3F33]">and How We Fix It</span>
        </h1>

        <p className="mt-5 max-w-3xl text-gray-300">
          The hospitality industry is dynamic yet challenging. Visibility,
          positioning, and digital infrastructure determine success. At Stories
          of Aura, we solve these problems through content, reputation, pricing,
          branding, websites, PR, and performance marketing.
        </p>
      </motion.div>

      {/* SECTIONS */}
      <div className="flex flex-col gap-20">
        {aboutData.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl"
          >
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              <span className="text-[#DF3F33]">{sec.title.split(".")[0]}.</span>{" "}
              {sec.title.replace(/^\d+\.\s*/, "")}
            </h2>

            {/* PROBLEM + SOLUTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* PROBLEM SIDE */}
              <div>
                <h3 className="text-xl font-medium mb-3 text-[#DF3F33]">
                  The Problem
                </h3>
                <ul className="space-y-2">
                  {sec.problem.map((p, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <FiCheckCircle className="text-[#DF3F33] mt-1" />
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* SOLUTION SIDE */}
              <div>
                <h3 className="text-xl font-medium mb-3 text-[#DF3F33]">
                  {sec.solutionTitle}
                </h3>
                <ul className="space-y-2">
                  {sec.solution.map((s, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <FiCheckCircle className="text-[#DF3F33] mt-1" />
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FINAL BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.9 }}
        className="mt-24 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-semibold mb-4 text-[#DF3F33]">
          Final Word
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Hotels don’t grow because they exist. They grow because they are seen,
          trusted, and positioned correctly. With our unified strategy and
          creative expertise, we turn hotels into high-performing revenue
          engines.
        </p>
      </motion.div>
    </div>
  );
};

export default AuraAboutUs;
