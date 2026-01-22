import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import InputBox from "../../components/input-wrapper";
import Button from "../../components/button-wrapper";
import { enquiryFormInputs } from "../../constants/FileConstants";

const AuraContactUs = () => {
  const locations = ["Manali", "Kasol", "Jawai", "Jaipur", "Udaipur", "Indore"];

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

        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-8 px-10">
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
                <div className="py-4 w-full">
                  <label
                    htmlFor={field.label}
                    className="block text-sm font-medium mb-2 ml-4 "
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
        <div className="flex flex-wrap justify-center gap-6 w-full">
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

  return (
    <div className="w-full px-6 md:px-16 py-24 text-white select-none">
      {/* HERO */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-20 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Let’s Talk Growth.
          <br />
          <span className="text-[#DF3F33]">Your Hotel Deserves More.</span>
        </h1>

        <p className="mt-5 text-gray-300">
          Whether you’re struggling with visibility, bookings, reputation, or
          pricing — we’d love to understand your challenges. Reach out and let’s
          build a strategy that actually works.
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col justify-center items-center gap-16">
        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl w-full"
        >
          <div className="w-full flex flex-col justify-center items-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-center mb-10"
            >
              We Serve In These Locations
            </motion.h2>

            <div className="flex flex-wrap gap-6">
              {locations.map((loc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-center border border-gray-300 rounded-lg py-3 px-4"
                >
                  {loc}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl w-full flex justify-center items-center"
        >
          <EnquiryForm />
          {/* <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Start the Conversation
          </h2>

          <form className="space-y-5">
            <InputBox Type="text" Placeholder="Your name" />
            <InputBox Type="email" Placeholder="Email" />
            <InputBox Type="text" Placeholder="Hotel / Brand Name" />
            <InputBox Type="text" Placeholder="Your name" />

            <textarea
              rows={5}
              placeholder="Tell us about your challenges or goals"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#DF3F33] resize-none"
            />

            <Button Label="Send Message" />
          </form> */}
        </motion.div>
      </div>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.9 }}
        className="mt-24 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#DF3F33]">
          Serious About Growth?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We don’t sell packages. We build strategies. If you’re ready to scale
          your hotel with clarity and confidence, let’s talk.
        </p>
      </motion.div>
    </div>
  );
};

export default AuraContactUs;
