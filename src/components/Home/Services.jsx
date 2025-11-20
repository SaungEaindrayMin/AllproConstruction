"use client";

import { ArrowUpRight, Building2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { GradientIcon } from "../ui/GradientIcon";
import { useMessages } from "@/providers/I18nProvider";

export const Services = () => {
     const { messages } = useMessages();
     const t = messages.services;

     const servicesData = [
          {
               title: t.firstServiceTitle,
               description: t.firstServiceDescription,
               icon: Building2,
          },
          {
               title: t.secondServiceTitle,
               description: t.secondServiceDescription,
               icon: Building2,
          },
          {
               title: t.thirdServiceTitle,
               description: t.thirdServiceDescription,
               icon: Building2,
          },
          {
               title: t.fourthServiceTitle,
               description: t.fourthServiceDescription,
               icon: Building2,
          },
          {
               title: t.fifthServiceTitle,
               description: t.fifthServiceDescription,
               icon: Building2,
          },
          {
               title: t.sixthServiceTitle,
               description: t.sixthServiceDescription,
               icon: Building2,
          },
     ];

     return (
          <section className="w-full py-20">
               <div className="space-y-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-baseline justify-between gap-x-[20%] gap-y-4">
                         <h1 className="text-4xl md:text-5xl font-bold">
                              <span className="bg-text-primary-gradient text-transparent bg-clip-text">
                                   {t.comprehensive}
                              </span>{" "}
                              {t.title}
                         </h1>
                         <p className="text-muted-foreground max-w-lg">
                              {t.text}
                         </p>
                    </div>

                    <Separator />

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                         {servicesData.map((service, index) => {
                              const Icon = service.icon;
                              return (
                                   <div key={index} className="space-y-4">
                                        <GradientIcon Icon={Icon} size={28} />

                                        <div className="flex items-center justify-between">
                                             <h2 className="text-xl font-medium">
                                                  {service.title}
                                             </h2>
                                             <GradientIcon
                                                  Icon={ArrowUpRight}
                                                  size={28}
                                             />
                                        </div>

                                        <p className="text-muted-foreground">
                                             {service.description}
                                        </p>

                                        <Separator />
                                   </div>
                              );
                         })}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-x-4 justify-center">
                         <Button variant="default">{t.primaryButton}</Button>
                         <Button variant="secondary">
                              {t.secondaryButton}
                         </Button>
                    </div>
               </div>
          </section>
     );
};
