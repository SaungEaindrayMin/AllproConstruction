"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import hero from "../../../public/images/Hero.png";
import { useMessages } from "@/providers/I18nProvider";

export const Hero = () => {
     const { messages } = useMessages();
     const t = messages.hero;

     return (
          <section className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12 md:gap-20 pb-12 mt-10">
               {/* Left Image */}
               <div>
                    <Image
                         src={hero}
                         alt="Hero Image"
                         width={600}
                         height={600}
                         placeholder="blur"
                         className="object-cover rounded-xl w-full"
                         priority
                    />
               </div>

               {/* Right Text Content */}
               <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                         <span className="bg-text-primary-gradient text-transparent bg-clip-text">
                              {t.complete}
                         </span>{" "}
                         {t.title}
                    </h1>

                    <p className="text-muted-foreground text-lg">
                         {t.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                         <Button variant="default">{t.getQuote}</Button>
                         <Button variant="secondary">{t.whyChooseUs}</Button>
                    </div>

                    <div className="flex items-start gap-6 md:gap-10 w-full md:w-[50%]">
                         <div>
                              <h2 className="text-2xl font-bold">350+</h2>
                              <p className="text-muted-foreground">
                                   {t.firstText}
                              </p>
                         </div>

                         <div>
                              <h2 className="text-2xl font-bold">70+</h2>
                              <p className="text-muted-foreground">
                                   {t.secondText}
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
};
