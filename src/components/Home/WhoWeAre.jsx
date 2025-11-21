"use client";

import Image from "next/image";
import whoWeAre from "../../../public/images/WhoWeAre.png";
import whyUs from "../../../public/images/WhyUs.png";
import { useMessages } from "@/providers/I18nProvider";
import { motion } from "framer-motion";

export const WhoWeAre = () => {
  const { messages } = useMessages();
  const t = messages.whoWeAre;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
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
      className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 py-20 items-end"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex flex-col justify-start space-y-14"
        variants={fadeUp}
      >
        <motion.div className="space-y-3" variants={fadeUp}>
          <h2 className="text-5xl bg-text-primary-gradient text-transparent bg-clip-text font-extrabold">
            {t.firstTitle}
          </h2>
        </motion.div>

        <motion.p
          className="text-muted-foreground leading-relaxed"
          variants={fadeUp}
        >
          {t.firstText}
        </motion.p>

        <motion.div
          className="bg-card rounded-xl shadow-xs p-3 w-full"
          variants={fadeUp}
        >
          <Image
            src={whoWeAre}
            alt="Who We Are"
            width={600}
            height={550}
            placeholder="blur"
            className="rounded-lg object-cover w-full lg:h-[550px]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center space-y-14"
        variants={fadeUp}
      >
        <motion.div className="space-y-3" variants={fadeUp}>
          <h2 className="text-5xl bg-text-primary-gradient text-transparent bg-clip-text font-extrabold">
            {t.secondTitle}
          </h2>
        </motion.div>

        <motion.p
          className="text-muted-foreground leading-relaxed"
          variants={fadeUp}
        >
          {t.secondText}
        </motion.p>

        <motion.div
          className="bg-card rounded-xl shadow-xs p-3 w-full"
          variants={fadeUp}
        >
          <Image
            src={whyUs}
            alt="Why Us"
            width={600}
            height={400}
            placeholder="blur"
            className="rounded-lg object-cover w-full lg:h-[400px]"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
