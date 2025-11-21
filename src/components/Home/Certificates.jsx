"use client";

import image1 from "../../../public/images/Hero.png";
import image2 from "../../../public/images/Project1.jpg";
import image3 from "../../../public/images/Project2.jpg";
import image4 from "../../../public/images/Service2.png";
import image5 from "../../../public/images/Service1.png";
import image6 from "../../../public/images/WhoWeAre.png";
import image7 from "../../../public/images/WhyUs.png";
import Image from "next/image";
import { useMessages } from "@/providers/I18nProvider";
import { motion } from "framer-motion";

const images = [image1, image2, image3, image4, image5, image6, image7];

export const Certificates = () => {
  const { messages } = useMessages();
  const t = messages.certificates;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full bg-[#FAF7F2] py-20"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
          variants={fadeScale}
        >
          <span className="bg-text-primary-gradient text-transparent bg-clip-text">
            {t.qualified}
          </span>{" "}
          {t.title}
        </motion.h1>

        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl"
            variants={container}
          >
            {images.slice(0, 4).map((src, i) => (
              <motion.div
                key={i}
                className="w-full aspect-square bg-gray-200 rounded-md"
                variants={fadeScale}
              >
                <Image
                  src={src}
                  alt="certificate"
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-4xl place-items-center"
            variants={container}
          >
            {images.slice(4).map((src, i) => (
              <motion.div
                key={i}
                className="w-full aspect-square bg-gray-200 rounded-md"
                variants={fadeScale}
              >
                <Image
                  src={src}
                  alt="certificate"
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
