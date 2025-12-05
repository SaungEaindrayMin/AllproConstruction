"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import building1 from "../../../public/images/ProjectBuilding.png";
import building2 from "../../../public/images/ProjectBuilding2.png";
import { useMessages } from "@/providers/I18nProvider";

const ProjectBlock = ({
  image,
  title,
  location,
  description,
  reverse = false,
}) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div className="space-y-24" variants={fadeUp}>
      <div
        className={`grid lg:grid-cols-2 gap-x-8 gap-y-4 ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        <div className={`space-y-6 ${reverse ? "lg:order-2" : ""}`}>
          <p className="text-sm bg-text-primary-gradient text-transparent bg-clip-text tracking-wide">
            {location}
          </p>

          <h1 className="text-4xl md:text-5xl font-normal">{title}</h1>
        </div>

        <div className={`${reverse ? "lg:order-1" : ""}`}>
          <Image
            src={image}
            alt="project building"
            width={500}
            height={500}
            placeholder="blur"
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>
      </div>

      <div className="space-y-8">
        <p className="text-lg tracking-wide text-muted-foreground font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const ProjectInfo = () => {
  const { messages } = useMessages();
  const t = messages.projectInfo;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      className="w-full"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-[20%]">
        <ProjectBlock
          image={building1}
          location={t.firstServiceArea}
          title={t.firstTitle}
          description={t.firstText}
        />

        <ProjectBlock
          image={building2}
          location={t.secondServiceArea}
          title={t.secondTitle}
          description={t.secondText}
          reverse
        />
        <ProjectBlock
          image={building1}
          location={t.thirdServiceArea}
          title={t.thirdTitle}
          description={t.thirdText}
        />

        <ProjectBlock
          image={building2}
          location={t.fourthServiceArea}
          title={t.fourthTitle}
          description={t.fourthText}
          reverse
        />
        <ProjectBlock
          image={building1}
          location={t.fifthServiceArea}
          title={t.fifthTitle}
          description={t.fifthText}
        />
      </div>
    </motion.section>
  );
};
