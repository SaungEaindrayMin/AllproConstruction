"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import building1 from "../../../public/images/BurasiriKrungthep.jpeg";
import building2 from "../../../public/images/JapaneseRestaurant.jpg";
import building3 from "../../../public/images/Sukhumvit61.jpeg";
import building4 from "../../../public/images/angelbar.jpg";
import building5 from "../../../public/images/LifeRama4.jpg";
import building6 from "../../../public/images/ostal.jpg";

import { useMessages } from "@/providers/I18nProvider";

const fadeUp = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectBlock = ({
     image,
     title,
     location,
     description,
     reverse = false,
}) => {
     return (
          <motion.div
               className="space-y-24"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={fadeUp}
          >
               <div
                    className={`grid lg:grid-cols-2 gap-x-8 gap-y-4 ${reverse ? "lg:grid-flow-dense" : ""}`}
               >
                    <div className={`space-y-6 ${reverse ? "lg:order-2" : ""}`}>
                         <p className="text-sm bg-text-primary-gradient text-transparent bg-clip-text tracking-wide">
                              {location}
                         </p>
                         <h1 className="text-4xl md:text-5xl font-normal">
                              {title}
                         </h1>
                         <p className="text-lg tracking-wide text-muted-foreground font-light">
                              {description}
                         </p>
                    </div>

                    <div className={`${reverse ? "lg:order-1" : ""}`}>
                         <Image
                              src={image}
                              alt="project building"
                              width={500}
                              height={500}
                              placeholder="blur"
                              className="w-full h-auto object-cover rounded-sm"
                         />
                    </div>
               </div>
          </motion.div>
     );
};

export const ProjectInfo = () => {
     const { messages } = useMessages();
     const t = messages.projectInfo;

     return (
          <section className="w-full">
               <div className="space-y-[20%]">
                    <ProjectBlock
                         image={building1}
                         location={t.firstServiceArea}
                         title={t.firstTitle}
                         description={t.firstText}
                    />

                    <ProjectBlock
                         image={building2}
                         location={t.secondServiceArea}
                         title={t.secondTitle}
                         description={t.secondText}
                         reverse
                    />

                    <ProjectBlock
                         image={building3}
                         location={t.thirdServiceArea}
                         title={t.thirdTitle}
                         description={t.thirdText}
                    />

                    <ProjectBlock
                         image={building5}
                         location={t.fifthServiceArea}
                         title={t.fifthTitle}
                         description={t.fifthText}
                         reverse
                    />

                    <ProjectBlock
                         image={building6}
                         location={t.sixthServiceArea}
                         title={t.sixthTitle}
                         description={t.sixthText}
                    />
               </div>
          </section>
     );
};
