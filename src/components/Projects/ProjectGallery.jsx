"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

import image1 from "../../../public/images/Hero.png";
import image2 from "../../../public/images/Project1.jpg";
import image3 from "../../../public/images/Project2.jpg";
import image4 from "../../../public/images/Service2.png";
import image5 from "../../../public/images/Service1.png";
import image6 from "../../../public/images/WhoWeAre.png";
import image7 from "../../../public/images/WhyUs.png";
import image8 from "../../../public/images/Hero.png";
import image9 from "../../../public/images/Project1.jpg";
import image10 from "../../../public/images/Project2.jpg";
import image11 from "../../../public/images/Service2.png";
import image12 from "../../../public/images/Service1.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

export const ProjectGallery = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full bg-[#FAF7F2] mt-20"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-10" variants={fadeUp}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="bg-text-primary-gradient text-transparent bg-clip-text">
              Project{" "}
            </span>
            Gallery
          </h1>
          <p className="text-muted-foreground/70 text-sm md:text-base">
            Discover what clients were able to achieve with Block.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2"
          variants={container}
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="h-24 sm:h-32 md:h-36 lg:h-40 w-auto overflow-hidden rounded-sm"
              variants={fadeScale}
            >
              <Image
                src={src}
                alt="project image"
                className="h-full w-auto object-cover rounded-xs"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex justify-center mt-10" variants={fadeUp}>
          <Button variant="default" className="font-light">
            VIEW PROJECT GALLERY
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
