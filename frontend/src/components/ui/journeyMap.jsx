import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PirateJourneyMap = ({ data }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dashLength = 10; // tweak as needed
  const dashOffset = useTransform(
    scrollYProgress,
    [1, 0],
    [dashLength * 50, 0]
  );
  const ref1 = useRef(null);
  const { scrollYProgress: scrollY1 } = useScroll({
    target: ref1,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollY1, [0, 1], ["50px", "-50px"]);
  const opacity = useTransform(scrollY1, [1, 1, 1, 1], [0, 1, 1, 1.1]);
  // const opacity = useTransform(scrollY1, [1, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  return (
    <div
      ref={ref}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Proper DOTTED Treasure Path */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-full pointer-events-none -z-10"
        viewBox="0 0 100 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="reveal-mask">
            {/* start with everything hidden */}
            <rect width="100%" height="100%" fill="black" />
            {/* white stroke in mask reveals the dashed path; animate its pathLength */}
            <motion.path
              d="M50 0
       C70 20, 30 40, 55 60
       S75 90, 35 120
       S70 150, 40 180
       S75 210, 35 240
       S65 270, 50 300"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="transparent"
              style={{ pathLength }}
            />
          </mask>
        </defs>
        <path
          d="M50 0
     C70 20, 30 40, 55 60
     S75 90, 35 120
     S70 150, 40 180
     S75 210, 35 240
     S65 270, 50 300"
          stroke="#b22222"
          strokeWidth="1"
          strokeLinecap=""
          strokeLinejoin=""
          strokeDasharray="5 1"
          fill="transparent"
          mask="url(#reveal-mask)"
        />
      </svg>

      {/* Map Cards */}
      <div className="relative flex flex-col gap-10 w-full max-w-7xl z-10">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              ref={ref1}
              style={{ y, opacity }}
              transition={{ type: "spring", stiffness: 60, damping: 25 }}
              className={`relative flex ${
                isLeft ? "justify-start" : "justify-end"
              } w-fit`}
            >
              <motion.div
                // whileHover={{ scale: 0.5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`flex flex-col md:flex-row items-center gap-8  shadow-lg rounded-2xl p-6 z-0 w-[70%] ${
                  isLeft
                    ? "ml-0 md:translate-x-[-5%]"
                    : "mr-0 md:translate-x-[5%]"
                }`}
              >
                <div className="w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-xl z-20"
                  />
                </div>

                <div className="space-y-3 w-3/4">
                  <h2 className="text-2xl font-extrabold mb-2">{item.title}</h2>
                  {item.texts.map((text, i) => (
                    <div key={i}>
                      <p className="text-lg font-semibold">{text.heading}</p>
                      <p className="text-sm text-neutral-400">{text.subtext}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PirateJourneyMap;
