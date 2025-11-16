"use client";

import Image from "next/image";
import { Separator } from "../ui/separator";
import Service1 from "../../../public/images/Service1.jpg";
import Service2 from "../../../public/images/Service2.jpg";

export const ServiceInfo = () => {
  return (
    <section>
      {/* heading */}
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-semibold">
          Our Available{" "}
          <span className="bg-text-primary-gradient text-transparent bg-clip-text ">
            Services
          </span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our comprehensive services are thoughtfully integrated to provide you
          with a seamless experience resulting in exceptional value and results.
        </p>
      </div>

      {/* first row */}
      <div className="flex flex-col md:flex-row items-stretch justify-between mt-12">
        {/* text section */}
        <div className="max-w-md space-y-6 flex-1 px-4 sm:px-6 lg:px-8">
          <Separator />
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text ">Planning</h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              Our comprehensive home remodeling planning process ensures every
              aspect of your project is thoughtfully addressed. From initial
              consultations to detailed feasibility assessments, we work closely
              with you to understand your unique needs and goals.
            </p>
          </div>
          <Separator />
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text ">Design</h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              Our home design services are tailored to transform your vision
              into reality that elevates your living space. Every element of the
              design process is focused on creating a home that reflects your
              style and meets your functional needs.
            </p>
          </div>
          <Separator />
        </div>

        {/* image section - full width no layout padding */}
        <div className="w-full md:w-1/2">
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen md:static md:w-full md:mx-0">
            <Image
              src={Service1}
              alt="service image"
              width={1920}
              height={1080}
              placeholder="blur"
              className="object-cover w-full h-[400px] md:h-full"
            />
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="flex flex-col md:flex-row-reverse items-stretch justify-between mt-12">
        {/* text section */}
        <div className="max-w-md space-y-6 flex-1 px-4 sm:px-6 lg:px-8">
          <Separator />
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold  bg-text-primary-gradient text-transparent bg-clip-text">Remodeling</h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              Whether it’s a kitchen renovation, bathroom upgrade, or a
              whole-house transformation, our remodeling services are designed
              to deliver exceptional results with top-quality craftsmanship.
            </p>
          </div>
          <Separator />
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold  bg-text-primary-gradient text-transparent bg-clip-text">
              Specialty Projects
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              We specialize in unique construction projects that go beyond
              traditional remodeling. From accessory units to functional
              solutions tailored to your lifestyle, we help you elevate your
              home.
            </p>
          </div>
          <Separator />
        </div>

        {/* image section - full width no layout padding */}
        <div className="w-full md:w-1/2">
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen md:static md:w-full md:mx-0">
            <Image
              src={Service2}
              alt="service image"
              width={1920}
              height={1080}
              placeholder="blur"
              className="object-cover w-full h-[400px] md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
