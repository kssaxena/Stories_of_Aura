import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GalleryFeed = ({ images }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full px-4">
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 pb-20">
        {images.map((item, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <motion.img
              src={item.image}
              alt="pinterest-img"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-2xl shadow-md"
            />
          </div>
        ))}
      </div>

      {/* FULLSCREEN POPUP */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* close on background click */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative z-[1000] max-w-5xl w-[90%]"
            >
              {/* Expanded Image */}
              <img
                src={selected.image}
                alt="expanded"
                className="w-full max-h-[90vh] object-contain rounded-2xl"
              />

              {/* View Property Button */}
              {/* <a
                href={selected.propertyLink}
                className="absolute top-4 right-4 bg-red-600 text-white px-5 py-2 text-sm font-semibold rounded-full shadow-md hover:bg-red-500 transition"
              >
                View Property
              </a> */}

              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 left-4 bg-white/20 text-white backdrop-blur-lg px-3 py-1 rounded-full hover:bg-white/30 transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryFeed;
