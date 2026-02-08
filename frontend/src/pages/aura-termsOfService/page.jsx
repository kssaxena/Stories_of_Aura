import React from "react";
import { motion } from "framer-motion";
import { termsOfServiceData } from "../../constants/FileConstants";

const AuraTermsOfService = () => {
  return (
    <div className="w-full px-6 md:px-16 py-24 text-white select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-semibold">
          Terms of <span className="text-[#DF3F33]">Service</span>
        </h1>
        <p className="mt-5  text-gray-300">
          These Terms apply to all marketing and consulting services provided to
          hospitality businesses in India.
        </p>
      </motion.div>

      <div className="flex flex-col gap-10">
        {termsOfServiceData.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#DF3F33]">
              {sec.title}
            </h2>
            <ul className="space-y-2 text-gray-300">
              {sec.content.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default AuraTermsOfService;
