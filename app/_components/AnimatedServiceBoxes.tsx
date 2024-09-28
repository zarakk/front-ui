import React, { useRef, useMemo, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

interface ServiceBoxProps {
  title: string;
  content: string;
  icon: string;
  gradient: string;
  progress: MotionValue<number>;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
  title,
  content,
  icon,
  gradient,
  progress,
}) => {
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{
        height,
        background: gradient,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem",
        color: "#0b1a37",
        overflow: "hidden",
      }}
    >
      <div className="icon">
        <Image src={icon} alt="icon" height={145} width={145} />
      </div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>{content}</p>
    </motion.div>
  );
};

const services = [
  {
    title: "We are overwhelmed with too many inbound messages",
    content:
      "Refine your market entry with our strategies informed by deep market research. We thoroughly integrate with your operations, leveraging analytics to drive your revenue goals.",
    icon: "/team-collaboration.svg",
    gradient: "white",
  },
  {
    title: "Our teams need to collaborate more easily",
    content:
      "Achieve growth with precision-executed digital marketing programs. We adeptly handle everything from demand generation to SEO, paid media, and beyond, aligning with sales for maximum impact on your ICP and revenue.",
    icon: "/shared-inbox.svg",
    gradient: "white",
  },
  {
    title: "We struggle to scale and maintain personalization",
    content:
      "Craft a compelling narrative with integrated digital campaigns. You gain access to content and creative solutions tailored specifically to resonate with your ideal customer profile and address the unique challenges within your market.",
    icon: "/live-chat.svg",
    gradient: "white",
  },
  {
    title: "We want to track and improve customer experience",
    content:
      "Craft a compelling narrative with integrated digital campaigns. You gain access to content and creative solutions tailored specifically to resonate with your ideal customer profile and address the unique challenges within your market.",
    icon: "/insights-analytics.svg",
    gradient: "white",
  },
];

const useServiceBoxProgresses = (smoothProgress: MotionValue<number>) => {
  // Individual useTransform hooks for each service
  const transform0 = useTransform(smoothProgress, [0, 1 / 4], [0, 1]);
  const transform1 = useTransform(smoothProgress, [1 / 4, 2 / 4], [0, 1]);
  const transform2 = useTransform(smoothProgress, [2 / 4, 3 / 4], [0, 1]);
  const transform3 = useTransform(smoothProgress, [3 / 4, 1], [0, 1]);

  return [transform0, transform1, transform2, transform3]; // Return the transforms
};

const AnimatedServiceBoxes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 150%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const boxProgresses = useServiceBoxProgresses(smoothProgress);

  return (
    <div
      ref={containerRef}
      className="animated-service-boxes"
      style={{
        height: `${100 * services.length}vh`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <ServiceBox
              title={service.title}
              content={service.content}
              icon={service.icon}
              gradient={service.gradient}
              progress={boxProgresses[index]} // Directly using individual transforms
            />
          </div>
        ))}
        {/* <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%", // Adjust as needed
            background: "white",
          }}
        /> */}
      </div>
    </div>
  );
};

export default AnimatedServiceBoxes;
