"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Service1 from "../../../public/images/Service1.png";
import Service2 from "../../../public/images/Service2.png";
import electrical from "../../../public/images/electrical.png";
import officeinterior from "../../../public/images/officeinterior.png";
import air from "../../../public/images/aircondition.png";
import tileinstallation from "../../../public/images/tileinstallation.png";
import painting from "../../../public/images/painting.png";
import pipe from "../../../public/images/watepipes.png";
import waterSystem from "../../../public/images/watersystem.avif";

import { useMessages } from "@/providers/I18nProvider";

export const ServiceInfo = () => {
  const { messages } = useMessages();
  const t = messages.serviceInfo;

  const containerClip =
    "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)";

  const services = [
    { title: t.firstTitle, text: t.firstText, image: officeinterior },
    { title: t.secondTitle, text: t.secondText, image: electrical },
    { title: t.thirdTitle, text: t.thirdText, image: air },
    { title: t.fourthTitle, text: t.fourthText, image: painting },
    { title: t.fifthTitle, text: t.fifthText, image: Service1 },
    { title: t.sixthTitle, text: t.sixthText, image: tileinstallation },
    { title: t.seventhTitle, text: t.seventhText, image: pipe },
    { title: t.eightTitle, text: t.eightText, image: waterSystem },
    { title: t.ninthTitle, text: t.ninthText, image: Service2 },
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
            className="relative group overflow-hidden rounded-xl"
          >
            <div className="w-full h-56 overflow-hidden">
              <div
                className="w-full max-w-lg h-64 md:h-80 lg:h-64 overflow-hidden rounded-lg"
                style={{ clipPath: containerClip }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={300}
                  placeholder="blur"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="p-5 bg-gray-50 h-full space-y-2">
              <h2 className="text-lg font-semibold text-gray-800 leading-snug line-clamp-2">
                {service.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
