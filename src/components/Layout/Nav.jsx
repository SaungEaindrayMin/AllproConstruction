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

  const currentLocale = pathname.split("/")[1] || "en";
  const otherLocale = currentLocale === "en" ? "th" : "en";

  const switchLocaleHref =
    "/" + otherLocale + pathname.replace(`/${currentLocale}`, "");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

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
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const hamburgerVariants = {
    closed: { rotate: 0, transition: { duration: 0.2 } },
    open: { rotate: 90, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      className="sticky bg-white top-0 left-0 right-0 z-50"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isScrolled ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      ref={containerRef}
    >
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* <Image
              src="/Vector.png"
              width={36}
              height={36}
              alt="Connect Studio Logo"
              priority={true}
            /> */}
            <span className="text-3xl font-bold bg-text-primary-gradient text-transparent bg-clip-text leading-none">
              Allpro
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
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
                    <span className="absolute left-0 -bottom-1 h-2 w-full bg-primary-gradient rounded-full" />
                  )}
                </Link>
              );
            })}
            {/* Language Switch */}
            <Link
              href={switchLocaleHref}
              className="px-3 py-1 rounded-md border text-sm font-medium text-muted-foreground hover:bg-gray-100"
            >
              {currentLocale.toUpperCase()} / {otherLocale.toUpperCase()}
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => toggleOpen()}
              className="text-primary hover:text-primary/70 focus:outline-none"
              animate={isOpen ? "open" : "closed"}
              variants={hamburgerVariants}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link, index) => {
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
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-muted-foreground font-bold"
                      : "text-muted-foreground/60 font-extralight"
                  } hover:text-primary hover:bg-gray-100`}
                  onClick={() => toggleOpen()}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}
          <motion.div
            custom={999}
            variants={linkVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            <Link
              href={switchLocaleHref}
              onClick={() => toggleOpen()}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-gray-100"
            >
              {currentLocale.toUpperCase()} / {otherLocale.toUpperCase()}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};
