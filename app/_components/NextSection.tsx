import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReviewSection from "./ReviewSection";

const NextSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Container animations
  const containerScale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const containerBorderRadius = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["4rem", "0rem"]
  );
  const containerWidth = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["50%", "100%"]
  );
  const containerHeight = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["50%", "100vh"]
  );

  // Split animations
  const splitY = useTransform(scrollYProgress, [0.5, 1], ["0%", "-100%"]);
  const splitY2 = useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]);

  const splitOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);

  // Reviews section animations
  const reviewsOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const reviewsScale = useTransform(scrollYProgress, [0.7, 0.9], [0.9, 1]);

  return (
    <div
      ref={sectionRef}
      className="h-[300vh] bg-gradient-to-br bg-white flex justify-center items-start"
    >
      <motion.div
        className="bg-white overflow-hidden flex flex-col justify-center items-center p-8 shadow-lg sticky top-0"
        style={{
          scale: containerScale,
          borderRadius: containerBorderRadius,
          width: containerWidth,
          height: containerHeight,
        }}
      >
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center"
          style={{ opacity: splitOpacity, zIndex: 99 }}
        >
          <motion.div
            className="w-full h-1/2 bg-[#0b1a37] flex justify-center items-center overflow-hidden"
            style={{ y: splitY }}
          >
            <div className="text-center text-white ">
              <h1 className="text-7xl font-bold mb-6  ">
                Streamline your customer communication with Front
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="w-full h-1/2 bg-[#0b1a37] flex justify-center items-center overflow-hidden"
            style={{ y: splitY2 }}
          >
            <div className="text-center">
              <button
                className="bg-white text-black px-6 py-4 rounded-full hover:bg-[#CC0049] hover:text-white transition-all duration-300 ease-in-out
                         shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]"
              >
                Try for Free
              </button>
              <button
                className="bg-transparent text-white px-6 py-4 rounded-full border border-white ml-4 hover:bg-[#CC0049] transition-all duration-300 ease-in-out
                         shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]"
              >
                Request a Demo
              </button>
            </div>
          </motion.div>
        </motion.div>
        <ReviewSection />
      </motion.div>
    </div>
  );
};

export default NextSection;
