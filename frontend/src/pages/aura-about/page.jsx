import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { aboutData } from "../../constants/FileConstants";

const AuraAboutUs = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* ========= HERO SECTION ========= */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center  px-6"
        >
          <h1 className="text-4xl md:text-6xl font-semibold">
            About Our Platform
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-200 text-lg">
            A trusted digital space connecting hotels and travelers with
            clarity, transparency, and premium hospitality experiences.
          </p>
        </motion.div>
      </section>

      {/* ========= ABOUT CONTENT ========= */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" text-lg leading-relaxed"
          >
            We are a hospitality-driven digital platform designed to bring hotel
            experiences closer to customers. Whether you are a hotel owner
            seeking better visibility or a traveler planning your next stay, our
            platform brings curated listings, verified details, and clear
            insights into every property.
            <br />
            <br />
            Our mission is to simplify the hotel discovery process while
            maintaining the highest level of transparency and professionalism.
            We focus on authentic listings, honest information, and a smooth
            browsing experience—helping users make confident decisions.
          </motion.p>
        </div>
      </section>

      {/* ========= VALUES SECTION ========= */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-10"
          >
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            {aboutData.map((data) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=" shadow-md p-6 rounded-xl border backdrop-blur-3xl"
              >
                <h3 className="text-xl font-medium mb-2">{data.heading}</h3>
                <p className="">{data.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= STATEMENT SECTION ========= */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            A Platform Built on Trust & Quality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            We are committed to creating a reliable environment where hotel
            owners can showcase their properties authentically, and customers
            can explore them with confidence. Every listing, every detail, and
            every update is guided by integrity and transparency.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AuraAboutUs;
