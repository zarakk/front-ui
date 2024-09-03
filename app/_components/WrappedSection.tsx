import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WrappedSection: React.FC = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: contentScrollProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"],
  });

  // White background animations
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6]
  );
  const width = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["60%", "100%", "100%", "60%"]
  );
  const height = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["60vh", "100vh", "100vh", "60vh"]
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["24px", "0px", "0px", "24px"]
  );

  // Content animations
  const contentOpacity = useTransform(contentScrollProgress, [0.8, 1], [1, 0]);
  const contentScale = useTransform(contentScrollProgress, [0.8, 1], [1, 0.8]);

  // Horizontal scroll animation
  const xScroll = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["0%", "-66.67%"] // Adjust based on the number of sections
  );

  return (
    <div
      ref={sectionRef}
      style={{
        height: "300vh",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "100vh",
          position: "sticky",
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(209deg, rgb(0, 27, 56) 23.25%, rgb(0, 110, 178) 161.08%)",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            width,
            height,
            scrollbarWidth: "none",
            background: "white",
            borderRadius,
            scale,
            overflow: "hidden",
            position: "relative",
            color: "black",
          }}
        >
          <motion.div
            ref={contentRef}
            style={{
              opacity: contentOpacity,
              scale: contentScale,
              x: xScroll,
              display: "flex",
              width: "300%", // Adjust based on the number of sections
            }}
          >
            <Section
              title="Gain insights and optimize workflows to boost customer satisfaction"
              subtitle="Keep reply time low and satisfaction high"
              description="Stay on top of SLA breaches and leading customer metrics, like response time and CSAT."
              videoSrc="/performance-animated.mp4"
            />
            <Section
              title="Empower your team with efficient collaboration tools"
              subtitle="Streamline communication and boost productivity"
              description="Utilize shared inboxes, internal notes, and assignments to enhance team coordination and response times."
              videoSrc="/performance-animated.mp4"
            />
            <Section
              title="Deliver personalized experiences at scale"
              subtitle="Build lasting relationships with customers"
              description="Leverage customer data and AI-powered insights to provide tailored support and proactive solutions."
              videoSrc="/performance-animated.mp4"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Section: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
}> = ({ title, subtitle, description, videoSrc }) => (
  <div
    className="flex items-start justify-center"
    style={{
      width: "100%",
      padding: "2rem",
    }}
  >
    <div className="flex flex-col w-1/2 pr-8">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-xl mb-4">{subtitle}</p>
      <p>{description}</p>
    </div>
    <div className="w-1/2">
      <video muted autoPlay src={videoSrc} className="w-full h-auto"></video>
    </div>
  </div>
);

export default WrappedSection;
