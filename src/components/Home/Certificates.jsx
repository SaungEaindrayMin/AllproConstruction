"use client";

import image1 from "../../../public/images/Hero.png";
import image2 from "../../../public/images/certificate.jpg";
import image3 from "../../../public/images/Project2.jpg";
import image4 from "../../../public/images/Service2.png";
import image5 from "../../../public/images/Service1.png";
import image6 from "../../../public/images/WhoWeAre.png";
import image7 from "../../../public/images/WhyUs.png";
import Image from "next/image";
import { useMessages } from "@/providers/I18nProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

const images = [image1, image2, image3, image4, image5, image6, image7];

export const Certificates = () => {
     const { messages } = useMessages();
     const t = messages.certificates;

     const ts = messages.services;

     const container = {
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
     };

     const fadeScale = {
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
               opacity: 1,
               scale: 1,
               transition: { duration: 0.5, ease: "easeOut" },
          },
     };

     return (
          <motion.section
               className="w-full bg-[#FAF7F2] py-20"
               variants={container}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
          >
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                         <motion.div variants={fadeScale}>
                              {/* <Image src={image2} alt="Certificate preview" className="rounded-xl w-full h-auto md:h-[700px] object-cover" />*/}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                   }}
                                   className="relative w-full max-w-3xl mx-auto"
                              >
                                   {/* OUTER GOLD FRAME */}
                                   <motion.div
                                        initial={{ scale: 0.95 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                             duration: 0.6,
                                             ease: "easeOut",
                                        }}
                                        className="relative p-2 rounded-3xl bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-2xl shadow-yellow-900/40"
                                   >
                                        {/* GOLD SHIMMER EFFECT */}
                                        <motion.div
                                             initial={{ x: "-150%" }}
                                             animate={{ x: "150%" }}
                                             transition={{
                                                  duration: 2,
                                                  repeat: Infinity,
                                                  repeatType: "mirror",
                                                  ease: "linear",
                                             }}
                                             className="absolute inset-0 rounded-3xl opacity-30 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none"
                                        />

                                        {/* INNER PANEL */}
                                        <div className="relative p-1 rounded-2xl bg-white overflow-hidden">
                                             {/* Decorative gold corners */}
                                             <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-yellow-600 rounded-tl-2xl" />
                                             <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-yellow-600 rounded-tr-2xl" />
                                             <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-yellow-600 rounded-bl-2xl" />
                                             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-600 rounded-br-2xl" />

                                             {/* SHINE OVER IMAGE */}
                                             <motion.div
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: 0.15 }}
                                                  transition={{ duration: 1 }}
                                                  className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"
                                             />

                                             {/* IMAGE */}
                                             <Image
                                                  src={image2}
                                                  alt="Certificate preview"
                                                  className="rounded-xl w-full h-auto md:h-[700px] object-cover"
                                             />
                                        </div>
                                   </motion.div>
                              </motion.div>
                         </motion.div>

                         {/* RIGHT CONTENT */}
                         <div className="flex flex-col justify-between h-full">
                              <div>
                                   <motion.h1
                                        className="text-4xl md:text-5xl font-bold mb-10"
                                        variants={fadeScale}
                                   >
                                        <span className="bg-text-primary-gradient text-transparent bg-clip-text">
                                             {t.qualified}
                                        </span>{" "}
                                        {t.title}
                                   </motion.h1>

                                   <motion.div
                                        className="gap-4 text-xl"
                                        variants={container}
                                   >
                                        <p>
                                             We're thrilled to share that AllPro
                                             General Services has officially
                                             been licensed to bring innovative
                                             solutions to your home!
                                        </p>
                                        <br />
                                        <p>
                                             At AllPro General Services, we're
                                             dedicated to transforming your
                                             living spaces with cutting-edge
                                             technology and sustainable
                                             practices. This license is a
                                             testament to our commitment to
                                             excellence and our ability to meet
                                             the highest industry standards.
                                        </p>
                                        <br />
                                        <p>
                                             We couldn't have achieved this
                                             milestone without the support of
                                             our amazing community and clients.
                                             Thank you for believing in us and
                                             joining us on this journey toward a
                                             smarter, more innovative future for
                                             homes everywhere.
                                        </p>
                                        <br />
                                        <p>
                                             Stay tuned for more updates and
                                             exciting projects we have in store.
                                             Together, let's make your home the
                                             best it can be!
                                        </p>
                                   </motion.div>
                              </div>
                              <Link
                                   href="/contact"
                                   className="mt-20 md:mt-0 block"
                              >
                                   <Button variant="default">
                                        {ts.primaryButton}
                                   </Button>
                              </Link>
                         </div>
                    </div>
               </div>
          </motion.section>
     );
};
