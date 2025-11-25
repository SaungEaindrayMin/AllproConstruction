"use client";

import Link from "next/link";
import Form from "./Form";
import {
  Facebook,
  Instagram,
  Mail,
  Twitter,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
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
      className="w-full py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div className="lg:col-span-5 space-y-12" variants={fadeLeft}>
            <motion.div className="space-y-8" variants={fadeUp}>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-medium">Mon - Sat</p>
                  <p className="text-muted-foreground text-sm">
                    09:00 AM - 06:30 PM
                  </p>
                  <p className="text-destructive text-sm">Sunday (Closed)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div className="space-y-1">
                  <p className="font-medium">118(A) Bangkok Street</p>
                  <p className="text-muted-foreground text-sm">
                    London Eye, London, UK
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div className="space-y-1">
                  <p className="font-medium">connect@gmail.com</p>
                  <p className="text-muted-foreground text-sm">
                    +(959) 893275835
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="pt-8 border-t border-border flex items-center gap-4"
              variants={fadeUp}
            >
              <Link
                href="/facebook"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="/twitter"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="/instagram"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="/contact"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </Link>
            </motion.div>

            <motion.div
              className="relative w-full h-80 rounded-lg overflow-hidden border border-border"
              variants={fadeUp}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540619755501!2d-0.1217!3d51.5033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-7" variants={fadeRight}>
            <motion.div className="lg:float-end lg:px-12" variants={fadeUp}>
              <h2 className="text-3xl font-bold mb-2">
                <span className="bg-text-primary-gradient text-transparent bg-clip-text">
                  Send us a message
                </span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We'll get back to you within 24 hours
              </p>
              <Form />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
