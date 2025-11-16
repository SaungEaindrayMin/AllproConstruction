"use client";

import { ArrowUpRight, Building2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { GradientIcon } from "../ui/GradientIcon";

const servicesData = [
  {
    title: "Project Planning",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aut dolores nostrum soluta inventore cum veniam delectus.",
    icon: Building2,
  },
  {
    title: "Project Management",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aut dolores nostrum soluta inventore cum veniam delectus.",
    icon: Building2,
  },
  {
    title: "Construction Services",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aut dolores nostrum soluta inventore cum veniam delectus.",
    icon: Building2,
  },
  {
    title: "Interior Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aut dolores nostrum soluta inventore cum veniam delectus.",
    icon: Building2,
  },
  {
    title: "Consultancy",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aut dolores nostrum soluta inventore cum veniam delectus.",
    icon: Building2,
  },
  {
    title: "Maintenance & Support",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aut dolores nostrum soluta inventore cum veniam delectus.",
    icon: Building2,
  },
];

export const Services = () => {
  return (
    <section className="w-full py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-baseline justify-between gap-x-[20%] gap-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            A{" "}
            <span className="bg-text-primary-gradient text-transparent bg-clip-text">
              comprehensive
            </span>{" "}
            set of services
          </h1>
          <p className="text-muted-foreground max-w-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aut
            dolores nostrum soluta inventore cum veniam delectus.
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
                  <h2 className="text-xl font-medium">{service.title}</h2>
                  <GradientIcon Icon={ArrowUpRight} size={28} />
                </div>
                <p className="text-muted-foreground">{service.description}</p>
                <Separator />
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-x-4 justify-center">
          <Button variant="default">Get a service</Button>
          <Button variant="secondary">More service info</Button>
        </div>
      </div>
    </section>
  );
};
