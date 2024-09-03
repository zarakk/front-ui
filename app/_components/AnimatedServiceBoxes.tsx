import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const ServiceBox = ({ title, content, icon, gradient, progress }: any) => {
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

const AnimatedServiceBoxes = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 150%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const overlayProgress = useTransform(
    smoothProgress,
    [0.99, 1], // Adjust these values to control when the overlay starts and finishes appearing
    [0, 1]
  );

  const overlayHeight = useTransform(overlayProgress, [0, 1], ["0%", "100%"]);

  const services = [
    {
      title: "We are overwhelmed with too many inbound messages",
      content:
        "Refine your market entry with our strategies informed by deep market research. We thoroughly integrate with your operations, leveraging analytics to drive your revenue goals.",
      icon: "/team-collaboration.svg", // Replace with actual SVG or icon component
      // gradient: "linear-gradient(to bottom, #6366F1, #8B5CF6)",
      gradient: "white",
    },
    {
      title: "Our teams need to collaborate more easily",
      content:
        "Achieve growth with precision-executed digital marketing programs. We adeptly handle everything from demand generation to SEO, paid media, and beyond, aligning with sales for maximum impact on your ICP and revenue.",
      icon: "/shared-inbox.svg", // Replace with actual SVG or icon component
      // gradient: "linear-gradient(to bottom, #8B5CF6, #D946EF)",
      gradient: "white",
    },
    {
      title: "We struggle to scale and maintain personalization",
      content:
        "Craft a compelling narrative with integrated digital campaigns. You gain access to content and creative solutions tailored specifically to resonate with your ideal customer profile and address the unique challenges within your market.",
      icon: "/live-chat.svg", // Replace with actual SVG or icon component
      // gradient: "linear-gradient(to bottom, #D946EF, #F43F5E)",
      gradient: "white",
    },
    {
      title: "We want to track and improve customer experience",
      content:
        "Craft a compelling narrative with integrated digital campaigns. You gain access to content and creative solutions tailored specifically to resonate with your ideal customer profile and address the unique challenges within your market.",
      icon: "insights-analytics.svg", // Replace with actual SVG or icon component
      // gradient: "linear-gradient(to bottom, #D946EF, #F43F5E)",
      gradient: "white",
    },
  ];

  const boxProgress = services.map((_, index) => {
    return useTransform(
      smoothProgress,
      [index / services.length, (index + 1) / services.length],
      [0, 1]
    );
  });

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
              progress={boxProgress[index]}
            />
          </div>
        ))}
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: overlayHeight,
            background: "white",
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedServiceBoxes;
