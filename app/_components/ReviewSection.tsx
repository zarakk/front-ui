import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Star } from "lucide-react";
import Footer from "./Footer";

const ReviewCard = ({ name, role, review, rating }: any) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 min-w-[300px] max-w-[300px] mr-6 flex flex-col justify-between"
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    transition={{ duration: 0.3 }}
  >
    <div>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">"{review}"</p>
    </div>
    <div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  </motion.div>
);

const BrandLogo = ({ src, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    className="h-16 mx-4 filter grayscale hover:grayscale-0 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  />
);

const HorizontalStrip = ({ children, title, bgColor }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  useEffect(() => {
    const scrollWidth = containerRef.current.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    const distance = scrollWidth - containerWidth;

    controls.start({
      x: [-distance, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg,rgba(255,255,255,0) 55.94%,#ffffff 100%),radial-gradient(50% 65.18% at 100% 100%,#ffecb3 0%,rgba(255,235,219,0) 100%),radial-gradient(63.5% 72.5% at 0% 100%,#b2edbf 0%,rgba(224,254,231,0) 100%),radial-gradient(144.02% 172.29% at 50% -94.61%,#ffbfda 0%,rgba(255,222,235,0) 100%),#ffffff",
      }}
      className="py-16 px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[#0b1a37]">
        {title}
      </h2>
      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex"
          animate={controls}
          style={{ x }}
          drag="x"
          dragConstraints={containerRef}
          whileTap={{ cursor: "grabbing" }}
        >
          {children}
          {children} {/* Duplicate children for seamless loop */}
        </motion.div>
      </div>
    </div>
  );
};

const ReviewSection = () => {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "CEO, TechStart",
      review:
        "The innovation and creativity displayed by this team is unparalleled. They've truly transformed our business.",
      rating: 5,
    },
    {
      name: "Sarah Lee",
      role: "Marketing Director, GrowthCo",
      review:
        "Their strategies have significantly boosted our market presence. Highly recommended for any business looking to scale.",
      rating: 4,
    },
    {
      name: "Michael Chen",
      role: "Founder, NextGen Solutions",
      review:
        "The level of expertise and dedication is impressive. They don't just deliver results, they exceed expectations.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "CTO, InnovateTech",
      review:
        "Their technical prowess and problem-solving skills are outstanding. They've been instrumental in our product development.",
      rating: 5,
    },
  ];

  const brands = [
    { src: "/carvana.svg", alt: "Brand 1" },
    { src: "/ClickUp.svg", alt: "Brand 2" },
    { src: "/culture-amp.svg", alt: "Brand 3" },
    { src: "/Hootsuite.svg", alt: "Brand 4" },
    { src: "/sennder.svg", alt: "Brand 5" },
    { src: "/wizard-pins.svg", alt: "Brand 6" },
  ];

  return (
    <>
      <HorizontalStrip title="8,500+ businesses handle their most critical customer moments with Front">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </HorizontalStrip>
      <HorizontalStrip title="Trusted by Leading Brands" bgColor="bg-gray-100">
        {brands.map((brand, index) => (
          <BrandLogo key={index} {...brand} />
        ))}
      </HorizontalStrip>
    </>
  );
};

export default ReviewSection;
