"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

import image1 from "../../../public/images/JapaneseRestaurant.jpg";
import image2 from "../../../public/images/aircondition.png";
import image3 from "../../../public/images/watepipes.png";
import image4 from "../../../public/images/LifeRama4.jpg";
import image5 from "../../../public/images/Sukhumvit61.jpeg";
import image7 from "../../../public/images/WhyUs.png";
import image9 from "../../../public/images/BurasiriKrungthep.jpeg";
import image10 from "../../../public/images/ostal.jpg";

import Link from "next/link";

const images = [
     image1,
     image2,
     image3,
     image4,
     image5,
     image7,
     image9,
     image10,
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
                         <h1 className="text-4xl md:text-5xl font-bold">
                              <span className="bg-text-primary-gradient text-transparent bg-clip-text">
                                   Project{" "}
                              </span>
                              Gallery
                         </h1>
                         <p className="text-muted-foreground/70 text-sm md:text-base">
                              Discover what clients were able to achieve with
                              Block.
                         </p>
                    </motion.div>

                    <motion.div
                         className="flex flex-wrap justify-center gap-2"
                         variants={container}
                    >
                         {images.map((src, i) => (
                              <motion.div
                                   key={i}
                                   className="h-36 sm:h-40 md:h-46 lg:h-52 w-auto overflow-hidden rounded-sm"
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

                    <motion.div
                         className="flex justify-center mt-10"
                         variants={fadeUp}
                    >
                         <Link href="/contact">
                              <Button variant="default" className="font-light">
                                   Contact Us
                              </Button>
                         </Link>
                    </motion.div>
               </div>
          </motion.section>
     );
};
