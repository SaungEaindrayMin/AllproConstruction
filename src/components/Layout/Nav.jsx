"use client";
import { motion, useCycle } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const containerRef = useRef(null);
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0] || "en";
  const otherLocale = currentLocale === "en" ? "th" : "en";
  const switchLocaleHref = "/" + [otherLocale, ...segments.slice(1)].join("/");
  const navLinks = [
    { name: "Home", path: "" },
    { name: "Services", path: "service" },
    { name: "Projects", path: "project" },
    { name: "Contact", path: "contact" },
  ];
  const localizedLinks = navLinks.map((l) => ({
    name: l.name,
    href: l.path ? `/${currentLocale}/${l.path}` : `/${currentLocale}`,
  }));
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };
  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const pathVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const topVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    open: {
      rotate: 45,
      translateY: 4,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    open: {
      rotate: -45,
      translateY: -8,
    },
  };

  return (
    <motion.nav
      className="fixed bg-white top-0 left-0 right-0 z-50"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isScrolled ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href={`/${currentLocale}`}
            className="flex items-center space-x-3"
          >
            <span className="text-3xl font-bold bg-text-primary-gradient text-transparent bg-clip-text leading-none">
              Allpro
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {localizedLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-base font-medium ${
                    isActive
                      ? "text-muted-foreground font-bold"
                      : "text-muted-foreground/60"
                  } hover:text-secondary-400 transition`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-1 w-full bg-primary-gradient rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href={switchLocaleHref}
              className="px-3 py-1 rounded-md border text-sm font-medium text-muted-foreground hover:bg-gray-100"
            >
              {otherLocale === "en" ? "EN" : "TH"}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => toggleOpen()}
              className="text-primary hover:text-primary/70 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16"
                  variants={topVariants}
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12h16"
                  variants={pathVariants}
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 18h16"
                  variants={bottomVariants}
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className="md:hidden overflow-hidden"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {localizedLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.name}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
              >
                <Link
                  href={link.href}
                  onClick={() => toggleOpen()}
                  className={`block px-3 py-2 rounded-md text-base transition-all duration-300 ${
                    isActive
                      ? "text-muted-foreground font-bold"
                      : "text-muted-foreground/60"
                  } hover:text-primary hover:bg-gray-100`}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}
          <motion.div
            custom={localizedLinks.length}
            variants={linkVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            <Link
              href={switchLocaleHref}
              onClick={() => toggleOpen()}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground bg-gray-50 hover:bg-gray-200 hover:text-primary transition"
            >
              {otherLocale === "en" ? "EN" : "TH"}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};
