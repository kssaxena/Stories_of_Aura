import React from "react";
import InputBox from "./input-wrapper";
import Button from "./button-wrapper";
import { motion } from "framer-motion";
import { enquiryFormInputs } from "../constants/FileConstants";

const EnquiryForm = ({ onCancel, packageClassname = "hidden" }) => {
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
    <div className="w-full lg:w-4/5">
      <motion.p
        whileInView="visible"
        initial="hidden"
        variants={fadeInVariant}
        custom={0.3}
        className="text-2xl md:text-6xl lg:text-7xl mb-8 uppercase text-nowrap text-center"
      >
        Let us reach you !
      </motion.p>

      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-8 px-10 text-xs">
        {/* Animated Inputs */}
        {enquiryFormInputs.map((field, index) => (
          <motion.div
            key={field.label}
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4 + index * 0.15}
          >
            {/* Conditional Rendering: Text Input or Dropdown */}
            {field.options ? (
              <div className="py-4 w-full ">
                <label
                  htmlFor={field.label}
                  className="block font-medium mb-2 ml-4 "
                >
                  {field.label}
                </label>
                <select
                  id={field.label}
                  name={field.label}
                  className="w-full px-4 py-2 text-white bg-transparent border-b border-gray-300 focus:ring-neutral-500 focus:neutral-red-500 outline-none transition duration-200 ease-in-out hover:shadow-md h-full"
                >
                  <option value="" disabled selected hidden>
                    {field.placeholder}
                  </option>
                  {field.options.map((option, i) => (
                    <option
                      key={i}
                      value={option}
                      className="bg-gray-900 text-white"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <InputBox
                Placeholder={field.placeholder}
                LabelName={field.label}
              />
            )}
          </motion.div>
        ))}
        {/* <div className="w-full h-fit">{content}</div> */}
        <div className={`w-full h-fit ${packageClassname}`}>
          <div className="flex justify-center items-start flex-col w-full">
            {["Starter", "Intermediate (Most popular)", "Professional"].map(
              (option, index) => (
                <motion.div
                  variants={fadeInVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.4 + index * 0.15}
                >
                  <InputBox
                    Type="radio"
                    Name="commissionOption"
                    LabelName={option}
                    Value={option.toLowerCase()}
                    // Checked={selectedOption === option.toLowerCase()}
                    // onChange={(e) => setSelectedOption(e.target.value)}
                  />
                </motion.div>
              ),
            )}
          </div>
        </div>
      </form>
      <div className="flex flex-wrap justify-center gap-6 k">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          // custom={1.5}
        >
          <Button Label="Submit" />
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          // custom={1.7}
        >
          <Button Label="Cancel" onClick={onCancel} />
        </motion.div>
      </div>
    </div>
  );
};

export default EnquiryForm;
