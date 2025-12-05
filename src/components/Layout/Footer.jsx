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
               className="bg-[#FAF7F2] text-primary w-full py-20"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={fadeUp}
          >
               <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                         <div className="space-y-4">
                              <h1 className="text-4xl font-bold tracking-tight">
                                   ALL PRO
                              </h1>
                              <p className="text-muted-foreground text-2xl leading-relaxed">
                                   𝐁𝐔𝐈𝐋𝐃 𝐁𝐘 𝐇𝐄𝐀𝐑𝐓
                              </p>
                         </div>

                         <div>
                              <h3 className="text-lg font-semibold mb-4">
                                   Navigation
                              </h3>
                              <div className="flex flex-col space-y-2 text-sm">
                                   <Link
                                        href="/"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                   >
                                        Home
                                   </Link>
                                   <Link
                                        href="/service"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                   >
                                        Services
                                   </Link>
                                   <Link
                                        href="/project"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                   >
                                        Projects
                                   </Link>
                                   <Link
                                        href="/contact"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                   >
                                        Contact
                                   </Link>
                              </div>
                         </div>

                         <div>
                              <h3 className="text-lg font-semibold mb-4">
                                   Social
                              </h3>

                              <div className="flex items-center gap-3">
                                   <Link
                                        href="https://www.facebook.com/allprothailand"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/10
                 bg-transparent hover:bg-primary hover:text-white transition-colors"
                                   >
                                        <span className="text-lg font-bold">
                                             f
                                        </span>
                                   </Link>
                              </div>

                              <p className="mt-3 text-sm text-muted-foreground">
                                   Follow us on Facebook
                              </p>
                         </div>

                         <div>
                              <h3 className="text-lg font-semibold mb-4">
                                   Contact
                              </h3>

                              <div className="space-y-2 flex flex-col text-sm text-muted-foreground">
                                   <a
                                        href="https://www.google.com/maps/search/?api=1&query=Bangkok+Thailand"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                   >
                                        Bangkok, Thailand
                                   </a>

                                   <a
                                        href="tel:0827867281"
                                        className="hover:text-primary transition-colors"
                                   >
                                        08 2786 7281
                                   </a>

                                   <a
                                        href="tel:0944502569"
                                        className="hover:text-primary transition-colors"
                                   >
                                        09 4450 2569
                                   </a>

                                   <a
                                        href="mailto:info@allpro.com"
                                        _target="_blank"
                                        className="hover:text-primary transition-colors"
                                   >
                                        info@allpro.com
                                   </a>
                              </div>
                         </div>
                    </div>

                    <div className="text-gray-500 text-sm mt-20 border-t border-primary/10 pt-8 text-center">
                         © 2025 Allpro Co. Ltd. All Rights Reserved.
                    </div>
               </div>
          </motion.footer>
     );
};
