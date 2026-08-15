"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Dashboard from "./Dashboard";
import AnimatedServiceBoxes from "./AnimatedServiceBoxes";
import NextSection from "./NextSection";
import WrappedSection from "./WrappedSection";
import Footer from "./Footer";
import Navbar from "./Navbar";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
};

const BannerLeftSection = () => {
  return (
    <div className="w-full lg:w-1/3 text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        How teams deliver exceptional service at scale
      </h1>
      <p className="text-lg mb-8 md:mb-10">
        Front is a new way to route, respond to, and measure all your customer
        conversations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button
          className="bg-white text-black px-6 py-4 rounded-full hover:bg-[#CC0049] hover:text-white transition-all duration-300 ease-in-out
                         shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]"
        >
          Try for Free
        </button>
        <button
          className="bg-transparent text-white px-6 py-4 rounded-full border border-white hover:bg-[#CC0049] transition-all duration-300 ease-in-out
                         shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]"
        >
          Request a Demo
        </button>
      </div>
    </div>
  );
};

const ScrollControlledDashboard: React.FC<{
  videoProgress: MotionValue<number>;
}> = ({ videoProgress }) => {
  const containerRef2 = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerRef2,
    offset: ["start start", "end end"],
  });

  const blueGradient =
    "linear-gradient(209deg, rgb(0, 27, 56) 23.25%, rgb(0, 110, 178) 161.08%)";

  // Desktop runs the full choreography (dashboard shrinks and slides beside the
  // title). Mobile keeps it simple: a static blue hero with centered text and
  // no dashboard, so it stays readable.
  const blackScale = useTransform(
    scrollYProgress2,
    [0, 1],
    isMobile ? [1, 1] : [1, 0.5]
  );
  const visibilityScale = useTransform(
    scrollYProgress2,
    isMobile ? [0.05, 0.15] : [0.5, 0.58],
    [0, 1]
  );

  const x = useTransform(
    scrollYProgress2,
    [0.5, 1],
    isMobile ? ["0%", "0%"] : ["0%", "20%"]
  );

  // Move title from left to center on desktop; keep it put on mobile.
  const titleX = useTransform(
    scrollYProgress2,
    [0.5, 1],
    isMobile ? ["0%", "0%"] : ["20%", "0%"]
  );

  const backgroundColor = useTransform(
    scrollYProgress2,
    [0.5, 0.6],
    isMobile ? [blueGradient, blueGradient] : [blueGradient, "#ffffff"]
  );

  // Visibility control based on video progress
  const opacity = useTransform(
    videoProgress,
    [0.99, 1], // Start fading in slightly before video ends
    [0, 1]
  );
  return (
    <div ref={containerRef2} style={{ height: "400vh", position: "relative" }}>
      <motion.div
        className="divBlack rounded-xl "
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 55,
          background: backgroundColor,
          scale: blackScale,
          opacity,
          transformOrigin: "center center",
          x,
          border: isMobile ? "none" : "4px solid white",
        }}
      >
        {!isMobile && (
          <motion.div style={{ opacity: visibilityScale }}>
            <Dashboard />
          </motion.div>
        )}
      </motion.div>
      <motion.div
        style={{
          position: "fixed",
          top: "0",
          zIndex: isMobile ? 60 : 5,
          left: 0,
          width: "100%",
          height: "100%",
          padding: "20px",
          opacity: visibilityScale,
        }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          top: isMobile ? 0 : "25%",
          zIndex: isMobile ? 60 : 5,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: visibilityScale,
          x: titleX,
          padding: "20px",
          display: isMobile ? "flex" : "block",
          alignItems: isMobile ? "center" : undefined,
          justifyContent: isMobile ? "center" : undefined,
        }}
      >
        <BannerLeftSection />
      </motion.div>
    </div>
  );
};

const ScrollControlledVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  const smoothProgress1 = useSpring(scrollYProgress1, {
    stiffness: 100,
    damping: 100,
    restDelta: 0.001,
  });

  // const videoProgress = useTransform(smoothProgress1, [0, 1], [0, 1]);
  // const videoScale = useTransform(smoothProgress1, [0, 0.9, 1], [1, 1, 5]);
  const opacity = useTransform(scrollYProgress1, [0.7, 1], [1, 0]);

  // useEffect(() => {
  //   const updateVideoTime = () => {
  //     if (videoRef.current) {
  //       videoRef.current.currentTime =
  //         videoProgress.get() * videoRef.current.duration;
  //     }
  //   };

  //   const unsubscribe = videoProgress.on("change", updateVideoTime);

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [videoProgress]);

  return (
    <>
      <div ref={containerRef} style={{ height: "100vh" }}>
        {/* <motion.video
          ref={videoRef}
          src="/ppl.mp4"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            scale: videoScale,
            transformOrigin: "center center",
          }}
        /> */}
        <motion.div
          className="h-screen w-screen fixed top-0 flex items-center justify-center"
          style={{ zIndex: 999, opacity }}
        >
          <h3
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight * 3,
                behavior: "smooth",
              })
            }
            className="text-white border border-white rounded-full p-10 hover:bg-indigo-300 hover:text-black cursor-pointer"
          >
            Scroll Down
          </h3>
        </motion.div>
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(209deg, rgb(0, 27, 56) 23.25%, rgb(0, 110, 178) 161.08%)",
          }}
        />
      </div>
      <ScrollControlledDashboard videoProgress={scrollYProgress1} />

      <div className="h-[100vh] relative" style={{ zIndex: 99 }}>
        <AnimatedServiceBoxes />
        <WrappedSection />
        <NextSection />
        <Footer />
      </div>
    </>
  );
};

export default ScrollControlledVideo;
