"use client";

import Image from "next/image";
import { Separator } from "../ui/separator";
import Service1 from "../../../public/images/Service1.png";
import Service2 from "../../../public/images/Service2.png";
import { useMessages } from "@/providers/I18nProvider";
import { motion } from "framer-motion";

export const ServiceInfo = () => {
  const { messages } = useMessages();
  const t = messages.serviceInfo;

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
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="text-center space-y-2" variants={fadeUp}>
        <h1 className="text-4xl md:text-5xl font-semibold">
          {t.title}{" "}
          <span className="bg-text-primary-gradient text-transparent bg-clip-text">
            {t.services}
          </span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t.text}</p>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row items-stretch justify-between mt-12"
        variants={fadeUp}
      >
        <motion.div className="max-w-md space-y-6 flex-1" variants={container}>
          <Separator />
          <motion.div className="space-y-3" variants={fadeUp}>
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.firstTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.firstText}
            </p>
          </motion.div>
          <Separator />
          <motion.div className="space-y-3" variants={fadeUp}>
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.secondTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.secondText}
            </p>
          </motion.div>

          <Separator />
          <motion.div className="space-y-3" variants={fadeUp}>
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.thirdTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.thirdText}
            </p>
          </motion.div>
          <Separator />
        </motion.div>

        <motion.div className="w-full md:w-1/2" variants={fadeUp}>
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen md:static md:w-full md:mx-0">
            <Image
              src={Service1}
              alt="service image"
              width={1920}
              height={1080}
              placeholder="blur"
              className="object-cover w-full h-[400px] md:h-full"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row-reverse items-stretch justify-between mt-12"
        variants={fadeUp}
      >
        <motion.div className="max-w-md space-y-6 flex-1" variants={container}>
          <Separator />
          <motion.div className="space-y-3" variants={fadeUp}>
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.fourthTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.fourthText}
            </p>
          </motion.div>
          <Separator />
          <motion.div className="space-y-3" variants={fadeUp}>
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.fifthTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.fifthText}
            </p>
          </motion.div>

          <Separator />
          <motion.div className="space-y-3" variants={fadeUp}>
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.sixthTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.sixthText}
            </p>
          </motion.div>
          <Separator />
        </motion.div>

        <motion.div className="w-full md:w-1/2" variants={fadeUp}>
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen md:static md:w-full md:mx-0">
            <Image
              src={Service2}
              alt="service image"
              width={1920}
              height={1080}
              placeholder="blur"
              className="object-cover w-full h-[400px] md:h-full"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row items-stretch justify-between mt-12"
        variants={fadeUp}
      >
        <motion.div className="max-w-md space-y-6 flex-1" variants={container}>
          <Separator />
          <motion.div className="space-y-3" variants={fadeUp}>
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.seventhTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.seventhText}
            </p>
          </motion.div>
          <Separator />
          <motion.div className="space-y-3" variants={fadeUp}>
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.eightTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.eightText}
            </p>
          </motion.div>
          <Separator />
          <motion.div className="space-y-3" variants={fadeUp}>
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.ninthTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.ninthText}
            </p>
          </motion.div>
          <Separator />
        </motion.div>

        <motion.div className="w-full md:w-1/2" variants={fadeUp}>
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen md:static md:w-full md:mx-0">
            <Image
              src={Service1}
              alt="service image"
              width={1920}
              height={1080}
              placeholder="blur"
              className="object-cover w-full h-[400px] md:h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
