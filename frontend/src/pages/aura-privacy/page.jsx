import React from "react";
import { motion } from "framer-motion";
import { privacyPolicyData } from "../../constants/FileConstants";

const AuraPrivacyPolicy = () => {
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
          Privacy <span className="text-[#DF3F33]">Policy</span>
        </h1>
        <p className="mt-5 max-w-3xl text-gray-300">
          This Privacy Policy governs the collection, use, storage, and
          disclosure of information by Stories of Aura, a hospitality marketing
          and consulting agency operating in India.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="flex flex-col gap-10">
        {privacyPolicyData.map((sec, i) => (
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

export default AuraPrivacyPolicy;
