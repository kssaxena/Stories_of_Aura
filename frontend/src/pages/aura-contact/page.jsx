import { motion } from "framer-motion";
import EnquiryForm from "../../components/enquiry-form";
import { locations } from "../../constants/FileConstants";

const AuraContactUs = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 py-20 relative">
      {/* Heading */}
      <div className="h-screen flex flex-col justify-start items-center pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-9xl mb-4"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg max-w-xl text-center mb-12"
        >
          We’re here to assist you. For any inquiries, partnership
          opportunities, or support, feel free to reach out using the form
          below.
        </motion.p>
      </div>

      <div className="w-full max-w-5xl py-40 h-screen">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-center mb-10"
        >
          We Serve In These Locations
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      <div className="w-full ">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default AuraContactUs;
