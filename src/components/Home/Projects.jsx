"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Clock10Icon, MapPinIcon, PlusIcon } from "lucide-react";
import project1 from "../../../public/images/BurasiriKrungthep.jpeg";
import project2 from "../../../public/images/JapaneseRestaurant.jpg";
import { useMessages } from "@/providers/I18nProvider";
import { motion } from "framer-motion";
import Link from "next/link";
const ProjectCard = ({
     image,
     title,
     description,
     location,
     serviceItem,
     reverse = false,
}) => {
     const containerClip = reverse
          ? "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)"
          : "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)";

     const fadeUp = {
          hidden: { opacity: 0, y: 20 },
          visible: {
               opacity: 1,
               y: 0,
               transition: { duration: 0.6, ease: "easeOut" },
          },
     };

     return (
          <motion.div
               className={`flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 bg-gray-50 p-4 rounded-lg ${
                    reverse ? "lg:flex-row-reverse" : ""
               }`}
               style={{ clipPath: containerClip }}
               variants={fadeUp}
          >
               <div className="w-full lg:w-1/2 flex justify-center">
                    <div
                         className="w-full max-w-lg h-64 md:h-80 lg:h-64 bg-white overflow-hidden rounded-lg"
                         style={{ clipPath: containerClip }}
                    >
                         <Image
                              src={image}
                              alt={`${title} image`}
                              width={600}
                              height={300}
                              placeholder="blur"
                              className="object-cover w-full h-full"
                         />
                    </div>
               </div>
               <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left mt-6 lg:mt-0">
                    <h1 className="text-xl md:text-2xl font-bold">{title}</h1>

                    <p className="text-muted-foreground leading-relaxed text-xs md:text-base">
                         {description}
                    </p>

                    <div className="space-y-3 mt-2">
                         <InfoItem
                              icon={<MapPinIcon />}
                              label="Location"
                              value={location}
                         />

                         <InfoItem
                              icon={<MapPinIcon />}
                              label="Service"
                              value={serviceItem}
                         />
                    </div>
               </div>
          </motion.div>
     );
};

const InfoItem = ({ icon, label, value }) => (
     <div className="flex items-center gap-2 lg:justify-start">
          <div className="bg-primary-gradient text-secondary rounded-full p-1">
               {icon}
          </div>
          <p className="text-sm md:text-base text-muted-foreground">
               {label}:{" "}
               <span className="font-medium text-foreground/60">{value}</span>
          </p>
     </div>
);

export const Projects = () => {
     const { messages } = useMessages();
     const t = messages.projects;
     const projects = [
          {
               image: project1,
               title: t.firstTitle,
               description: t.firstService,
               serviceItem: t.firstServiceItem,
               location: t.firstServiceArea,
               reverse: false,
          },
          {
               image: project2,
               title: t.secondTitle,
               description: t.secondService,
               serviceItem: t.secondServiceItem,
               location: t.firstServiceArea,

               reverse: true,
          },
     ];

     const container = {
          hidden: {},
          visible: {
               transition: { staggerChildren: 0.2 },
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

     return (
          <motion.section
               className="w-full py-20 md:px-8"
               variants={container}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
          >
               <motion.div className="text-center mb-10" variants={fadeUp}>
                    <p className="text-muted-foreground/70 text-sm md:text-base">
                         {t.subTitle}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold">
                         {t.our}{" "}
                         <span className="bg-text-primary-gradient text-transparent bg-clip-text">
                              {t.title}
                         </span>
                    </h1>
               </motion.div>

               <motion.div className="space-y-10" variants={container}>
                    {projects.map((project, index) => (
                         <ProjectCard key={index} {...project} />
                    ))}
               </motion.div>

               <motion.div
                    className="flex justify-center mt-10"
                    variants={fadeUp}
               >
                    <Link href="/project">
                         <Button variant="default" className="w-40">
                              {t.button}
                         </Button>
                    </Link>
               </motion.div>
          </motion.section>
     );
};
