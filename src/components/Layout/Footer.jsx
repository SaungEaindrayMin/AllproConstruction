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
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Allpro</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional construction, renovation, and design services
              delivering quality and excellence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link
                href="/"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Home
              </Link>
              <Link
                href="/service"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Services
              </Link>
              <Link
                href="/project"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link
                href="#"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Bangkok, Thailand</p>
              <p>+66 (000) 123 4567</p>
              <p>info@allpro.com</p>
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-sm mt-20 border-t border-black/10 pt-8 text-center">
          © 2025 Allpro Co. Ltd. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};
