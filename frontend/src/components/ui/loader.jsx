import { motion } from "framer-motion";

const MinimalLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative w-[2px] h-20 overflow-hidden">
        <motion.span
          className="absolute inset-0 bg-[#DF3F33]"
          animate={{ y: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default MinimalLoader;
