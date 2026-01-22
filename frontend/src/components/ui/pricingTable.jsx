import React, { useState } from "react";
import Button from "../button-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryForm from "../enquiry-form";

const PricingTable = ({ packageData }) => {
  const [isActive, setIsActive] = useState(false);
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <div className="w-full py-16 flex flex-col justify-center items-center ">
      <div className="max-w-7xl w-full grid md:grid-cols-3 gap-8 px-4 ">
        {packageData?.map((pkg, index) => (
          <div
            key={index}
            className={`
              relative border rounded-3xl p-8 shadow-sm 
              hover:shadow-xl transition-all duration-300 backdrop-blur-xl
              ${pkg.popular ? "border-red-600 shadow-xl scale-[1.03] " : ""}
            `}
          >
            {/* MOST POPULAR TAG */}
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                MOST POPULAR
              </div>
            )}

            {/* Title */}
            <h2 className="text-2xl font-bold mb-1">{pkg.name}</h2>
            <p className=" mb-4">{pkg.subtitle}</p>

            {/* Features */}
            <div className="lg:space-y-4 space-y-2 border-t pt-6">
              {pkg.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-sm">
                    <span className="font-semibold">{feature.label}:</span>{" "}
                    {feature.value === true ? "Included" : feature.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full mt-6 flex justify-center items-center">
              <Button Label="Contact Us" onClick={() => setIsActive(true)} />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen backdrop-blur-3xl z-50 justify-center md:items-center items-start py-10 flex overflow-scroll no-scrollbar"
          >
            <EnquiryForm
              onCancel={() => setIsActive(false)}
              packageClassname={"block"}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PricingTable;
