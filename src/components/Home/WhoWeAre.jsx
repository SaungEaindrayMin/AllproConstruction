"use client";

import Image from "next/image";
import whoWeAre from "../../../public/images/WhoWeAre.png";
import whyUs from "../../../public/images/WhyUs.png";
import { useMessages } from "@/providers/I18nProvider";

export const WhoWeAre = () => {
     const { messages } = useMessages();
     const t = messages.whoWeAre;

     return (
          <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 py-20 items-end">
               <div className="flex flex-col justify-start space-y-14">
                    <div className="space-y-3">
                         <p className="uppercase text-sm bg-text-primary-gradient text-transparent bg-clip-text tracking-[0.6em] font-bold">
                              {t.firstTitle}
                         </p>
                         <h2 className="text-5xl bg-text-primary-gradient text-transparent bg-clip-text font-extrabold ">
                              {t.firstTitle}
                         </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                         {t.firstText}
                    </p>

                    <div className="bg-card rounded-xl shadow-xs p-3 w-full">
                         <Image
                              src={whoWeAre}
                              alt="Who We Are"
                              width={600}
                              height={550}
                              placeholder="blur"
                              className="rounded-lg object-cover w-full lg:h-[550px]"
                         />
                    </div>
               </div>

               <div className="flex flex-col justify-center bg-text-primary-gradient text-transparent bg-clip-text space-y-14">
                    <div className="space-y-3">
                         <p className="uppercase text-sm bg-text-primary-gradient text-transparent bg-clip-text tracking-[0.6em] font-medium">
                              {t.secondTitle}
                         </p>
                         <h2 className="text-5xl font-extrabold ">
                              {" "}
                              {t.secondTitle}
                         </h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                         {t.secondText}
                    </p>

                    <div className="bg-card rounded-xl shadow-xs p-3 w-full">
                         <Image
                              src={whyUs}
                              alt="Why Us"
                              width={600}
                              height={400}
                              placeholder="blur"
                              className="rounded-lg object-cover w-full lg:h-[400px]"
                         />
                    </div>
               </div>
          </section>
     );
};
