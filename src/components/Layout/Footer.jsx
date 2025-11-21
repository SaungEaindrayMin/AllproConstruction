"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="bg-[#FAF7F2] text-black w-full py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h1 className="text-4xl font-semibold">Allpro</h1>
          </div>

          <div className="space-y-2">
            <Link
              href="/"
              className="text-muted-foreground hover:text-muted-foreground/60"
            >
              Home Page
            </Link>
            <div />
            <Link
              href="/service"
              className="text-muted-foreground hover:text-muted-foreground/60"
            >
              Services
            </Link>
            <div />
            <Link
              href="/project"
              className="text-muted-foreground hover:text-muted-foreground/60"
            >
              Projects
            </Link>
            <div />
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-muted-foreground/60"
            >
              Contact
            </Link>
          </div>

          <div className="space-y-2">
            <Link
              href="#"
              className="text-muted-foreground hover:text-muted-foreground/60"
            >
              Facebook
            </Link>
            <div />
            <Link
              href="#"
              className="text-muted-foreground hover:text-muted-foreground/60"
            >
              Instagram
            </Link>
            <div />
            <Link
              href="#"
              className="text-muted-foreground hover:text-muted-foreground/60"
            >
              Twitter
            </Link>
            <div />
            <Link
              href="#"
              className="text-muted-foreground hover:text-muted-foreground/60"
            >
              LinkedIn
            </Link>
          </div>

          <div className="space-y-2">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-muted-foreground/60"
            >
              Privacy Policy
            </Link>
            <div />
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-muted-foreground/60"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="text-gray-400 text-sm mt-20">
          <p>© 2025 Allpro Co. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};
