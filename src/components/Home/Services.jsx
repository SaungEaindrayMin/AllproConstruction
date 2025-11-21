"use client";

import {
  ArrowUpRight,
  Building2,
  Wrench,
  PaintBucket,
  Ruler,
  HardHat,
  Layers,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { GradientIcon } from "../ui/GradientIcon";
import { useMessages } from "@/providers/I18nProvider";
import { motion } from "framer-motion";
import Link from "next/link";

export const Services = () => {
  const { messages } = useMessages();
  const t = messages.services;

  const servicesData = [
    {
      title: t.firstServiceTitle,
      description: t.firstServiceDescription,
      icon: Ruler,
    },
    {
      title: t.secondServiceTitle,
      description: t.secondServiceDescription,
      icon: HardHat,
    },
    {
      title: t.thirdServiceTitle,
      description: t.thirdServiceDescription,
      icon: Layers,
    },
    {
      title: t.fourthServiceTitle,
      description: t.fourthServiceDescription,
      icon: Wrench,
    },
    {
      title: t.fifthServiceTitle,
      description: t.fifthServiceDescription,
      icon: PaintBucket,
    },
    {
      title: t.sixthServiceTitle,
      description: t.sixthServiceDescription,
      icon: Building2,
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
      className="w-full py-20"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="space-y-8" variants={fadeUp}>
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-baseline justify-between gap-x-[20%] gap-y-4"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-text-primary-gradient text-transparent bg-clip-text">
              {t.comprehensive}
            </span>{" "}
            {t.title}
          </h1>
          <p className="text-muted-foreground max-w-lg">{t.text}</p>
        </motion.div>

        <Separator />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
          variants={container}
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} className="space-y-4" variants={fadeUp}>
                <GradientIcon Icon={Icon} size={28} />

                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-medium">{service.title}</h2>
                  <GradientIcon Icon={ArrowUpRight} size={28} />
                </div>

                <p className="text-muted-foreground">{service.description}</p>

                <Separator />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex items-center gap-x-4 justify-center"
          variants={fadeUp}
        >
          <Link href="/contact">
            <Button variant="default">{t.primaryButton}</Button>
          </Link>
          <Link href="/service">
            <Button variant="secondary">{t.secondaryButton}</Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
