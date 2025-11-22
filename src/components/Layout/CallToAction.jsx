"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useMessages } from "@/providers/I18nProvider";
import Link from "next/link";
import { motion } from "framer-motion";

export const CallToAction = () => {
  const { messages } = useMessages();
  const t = messages.callToAction;

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
      className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="w-full text-center space-y-10" variants={fadeUp}>
        
        <motion.div variants={fadeUp}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            <span className="bg-text-primary-gradient text-transparent bg-clip-text">
              {t.connect}
            </span>{" "}
            {t.firstTitle}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {t.secondTitle}
          </h1>
        </motion.div>

        <motion.div
          className="text-lg text-muted-foreground w-full md:w-[50%] lg:w-[35%] mx-auto"
          variants={fadeUp}
        >
          <p>{t.text}</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Link href="/contact" className="cursor-pointer">
            <div className="flex justify-center">
              <div className="group flex items-center justify-between gap-x-3 md:w-[35%] lg:w-[25%] hover:bg-primary bg-muted-foreground/10 p-3 rounded-full transition-colors duration-300">
                <p className="text-lg font-medium text-primary ps-1 group-hover:text-white">
                  {t.button}
                </p>
                <Button className="p-2 bg-primary rounded-full group-hover:bg-white border-none">
                  <ArrowRight className="text-white group-hover:text-primary" />
                </Button>
              </div>
            </div>
          </Link>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};
