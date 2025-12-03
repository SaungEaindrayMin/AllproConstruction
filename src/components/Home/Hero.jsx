"use client";

import Image from "next/image";
import hero from "../../../public/images/Hero.png";
import { useMessages } from "@/providers/I18nProvider";
import { motion } from "framer-motion";

export const Hero = () => {
  const { messages } = useMessages();
  const t = messages.hero;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const popUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const floatRotate = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const glowPulse = {
    initial: { opacity: 0.8 },
    animate: {
      opacity: [0.8, 0.5, 0.8],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const words = t.title.split(" ");

  return (
    <motion.section
      className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-20 pb-12 md:mt-10"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="relative" variants={popUp}>
        <motion.div variants={floatRotate} animate="animate">
          <Image
            src={hero}
            alt="Hero Image"
            width={600}
            height={600}
            placeholder="blur"
            className="object-cover rounded-xl w-full shadow-2xl"
            priority
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-full  blur-3xl -z-10"
          variants={glowPulse}
          animate="animate"
        />
      </motion.div>

      <motion.div className="space-y-8" variants={popUp}>
        <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          <motion.span
            className="bg-text-primary-gradient text-transparent bg-clip-text"
            variants={glowPulse}
            animate="animate"
          >
            {t.complete}
          </motion.span>

          <span className=" flex flex-wrap gap-2">
            {words.map((w, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, rotate: -5, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: i * 0.08,
                      ease: "easeOut",
                    },
                  },
                }}
                className="inline-block"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p className="text-muted-foreground text-lg" variants={popUp}>
          {t.description}
        </motion.p>

        <motion.div
          className="flex items-start gap-6 md:gap-10 w-full md:w-[50%]"
          variants={popUp}
        >
          {[
            { value: 250, label: t.firstText },
            { value: 120, label: t.secondText },
          ].map((stat, idx) => (
            <motion.div key={idx}>
              <motion.h2
                className="text-2xl font-bold"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.value}+
              </motion.h2>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
