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
                         <motion.div
                              className="lg:col-span-5 space-y-12"
                              variants={fadeLeft}
                         >
                              <motion.div
                                   className="space-y-8"
                                   variants={fadeUp}
                              >
                                   <div className="flex gap-4">
                                        <MapPin className="w-5 h-5 text-primary mt-1" />
                                        <div className="space-y-1">
                                             <p className="font-medium">
                                                  Address
                                             </p>
                                             <p className="text-muted-foreground text-sm">
                                                  Bangkok, Thailand
                                             </p>
                                        </div>
                                   </div>

                                   <div className="flex gap-4">
                                        <Phone className="w-5 h-5 text-primary mt-1" />
                                        <div className="space-y-1 flex flex-col">
                                             <a href="mailto:info@allpro.com">
                                                  <p>info@allpro.com</p>
                                             </a>
                                             <a
                                                  href="tel:0827867281"
                                                  className="text-muted-foreground text-sm"
                                             >
                                                  <p> 08 2786 7281</p>
                                             </a>

                                             <a
                                                  href="tel:0944502569"
                                                  className="text-muted-foreground text-sm"
                                             >
                                                  <p>09 4450 2569</p>
                                             </a>
                                        </div>
                                   </div>
                              </motion.div>

                              <motion.div
                                   className="pt-8 border-t border-border flex items-center gap-4"
                                   variants={fadeUp}
                              >
                                   <Link
                                        href="https://www.facebook.com/allprothailand"
                                        _target="_blank"
                                        className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                                   >
                                        <Facebook size={18} />
                                   </Link>
                                   <Link
                                        href="mailto:info@allpro.com"
                                        className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                                   >
                                        <Mail size={18} />
                                   </Link>
                              </motion.div>
                         </motion.div>

                         <motion.div
                              className="lg:col-span-7"
                              variants={fadeRight}
                         >
                              <motion.div
                                   className="lg:float-end lg:px-12"
                                   variants={fadeUp}
                              >
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
