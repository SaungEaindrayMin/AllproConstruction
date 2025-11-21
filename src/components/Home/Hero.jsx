"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import hero from "../../../public/images/Hero.png";
import { useMessages } from "@/providers/I18nProvider";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  const { messages } = useMessages();
  const t = messages.hero;

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
      className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12 md:gap-20 pb-12 md:mt-10"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={fadeUp}>
        <Image
          src={hero}
          alt="Hero Image"
          width={600}
          height={600}
          placeholder="blur"
          className="object-cover rounded-xl w-full"
          priority
        />
      </motion.div>

      <motion.div className="space-y-8" variants={fadeUp}>
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          variants={fadeUp}
        >
          <span className="bg-text-primary-gradient text-transparent bg-clip-text">
            {t.complete}
          </span>{" "}
          {t.title}
        </motion.h1>

        <motion.p className="text-muted-foreground text-lg" variants={fadeUp}>
          {t.description}
        </motion.p>

        <motion.div
          className="flex items-start gap-6 md:gap-10 w-full md:w-[50%]"
          variants={fadeUp}
        >
          <div>
            <h2 className="text-2xl font-bold">350+</h2>
            <p className="text-muted-foreground">{t.firstText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">70+</h2>
            <p className="text-muted-foreground">{t.secondText}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
