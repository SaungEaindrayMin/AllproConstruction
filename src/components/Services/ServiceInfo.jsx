"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Service1 from "../../../public/images/Service1.png";
import Service2 from "../../../public/images/Service2.png";
import air from "../../../public/images/aircondition.png";
import pipe from "../../../public/images/watepipes.png";
import waterSystem from "../../../public/images/watersystem.avif";

import { useMessages } from "@/providers/I18nProvider";

export const ServiceInfo = () => {
  const { messages } = useMessages();
  const t = messages.serviceInfo;

  const services = [
    { title: t.firstTitle, text: t.firstText, image: Service1 },
    { title: t.secondTitle, text: t.secondText, image: Service2 },
    { title: t.thirdTitle, text: t.thirdText, image: air },
    { title: t.fourthTitle, text: t.fourthText, image: Service2 },
    { title: t.fifthTitle, text: t.fifthText, image: Service1 },
    { title: t.sixthTitle, text: t.sixthText, image: Service2 },
    { title: t.seventhTitle, text: t.seventhText, image: pipe },
    { title: t.eightTitle, text: t.eightText, image: waterSystem },
    { title: t.ninthTitle, text: t.ninthText, image: Service1 },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-20"
    >
      <motion.div className="text-center space-y-2 mb-12" variants={fadeUp}>
        <h1 className="text-4xl md:text-5xl font-semibold">
          {t.title}{" "}
          <span className="bg-text-primary-gradient text-transparent bg-clip-text">
            {t.services}
          </span>
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">{t.text}</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={fadeUp}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="relative group cursor-pointer overflow-hidden rounded-xl  border border-primary/20 bg-secondary"
          >
            <div className="w-full h-56 bg-gray-200 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5 space-y-2">
              <h2 className="text-lg font-semibold text-gray-800 leading-snug line-clamp-2">
                {service.title}
              </h2>
            </div>

            <div
              className="
      absolute inset-0 bg-black/80 opacity-0 
      group-hover:opacity-100 
      transition-opacity duration-500 
      flex flex-col justify-center items-center text-center px-6 text-secondary
    "
            >
              <p className="text-sm text-secondary">{service.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
