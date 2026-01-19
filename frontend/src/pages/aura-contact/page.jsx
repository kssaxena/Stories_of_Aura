import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import InputBox from "../../components/input-wrapper";
import Button from "../../components/button-wrapper";

const AuraContactUs = () => {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            How to Reach Us
          </h2>

          <div className="space-y-5 text-gray-300">
            <div className="flex items-start gap-4">
              <FiMail className="text-[#DF3F33] mt-1 text-xl" />
              <div>
                <p className="font-medium text-white">Email</p>
                <p>hello@storiesofaura.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiPhone className="text-[#DF3F33] mt-1 text-xl" />
              <div>
                <p className="font-medium text-white">Phone</p>
                <p>+91 9XXXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMapPin className="text-[#DF3F33] mt-1 text-xl" />
              <div>
                <p className="font-medium text-white">Location</p>
                <p>India — Working with Hotels Worldwide</p>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Prefer WhatsApp, email, or a quick call? We respond within 24 hours.
            All discussions are confidential.
          </p>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
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

            {/* <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 bg-[#DF3F33] px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90"
            >
              Send Message <FiSend />
            </motion.button> */}
          </form>
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
