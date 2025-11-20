"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Twitter,
} from "lucide-react";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary-gradient text-secondary w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-8">
          {/* Brand */}
          <div className="space-y-3">
            <h1 className="text-5xl font-semibold text-secondary">Allpro</h1>
            <p className="text-muted/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-medium text-lg mb-3 text-secondary">
              Navigation
            </h2>
            <ul className="space-y-2 text-muted/70">
              <li>
                <Link href="/" className="hover:text-muted transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages" className="hover:text-muted transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-muted transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-muted transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-medium text-lg mb-3 text-secondary">
              Quick Links
            </h2>
            <ul className="space-y-2 text-muted/70">
              <li>
                <Link href="/contact" className="hover:text-muted transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-muted transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-muted transition">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/pages" className="hover:text-muted transition">
                  Pages
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-medium text-lg mb-3 text-secondary">
              Services
            </h2>
            <ul className="space-y-2 text-muted/70">
              <li>
                <Link href="/" className="hover:text-muted transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-muted transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-muted transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/404" className="hover:text-muted transition">
                  404
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="flex items-center gap-2 text-muted">
            <MapPin size={18} />
            <p>London Eye, London, UK</p>
          </div>

          <div className="flex items-center gap-2 text-muted">
            <Phone size={18} />
            <p>+(959) 893275835</p>
          </div>

          <div className="flex items-center gap-2 text-muted">
            <Mail size={18} />
            <p>connect@gmail.com</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-x-3">
            <Link
              href="/facebook"
              className="p-2 bg-muted/50 text-primary rounded-full hover:bg-secondary transition"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="/twitter"
              className="p-2 bg-muted/50 text-primary rounded-full hover:bg-secondary transition"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="/instagram"
              className="p-2 bg-muted/50 text-primary rounded-full hover:bg-secondary transition"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="/contact"
              className="p-2 bg-muted/50 text-primary rounded-full hover:bg-secondary transition"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>

        <Separator className="my-6 bg-muted/40" />

        {/* Bottom section */}
        <div className="text-sm text-muted/70 mt-10 flex justify-center">
          <p>© 2025 Allpro Co. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
