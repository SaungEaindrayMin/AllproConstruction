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
                              <Image
                                   src={image2}
                                   alt="Certificate preview"
                                   className="rounded-xl w-full h-auto md:h-[700px] object-cover"
                              />
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
