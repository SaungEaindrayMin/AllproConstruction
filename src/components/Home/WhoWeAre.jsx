"use client";

import Image from "next/image";
import whoWeAre from "../../../public/images/WhoWeAre.jpg";
import whyUs from "../../../public/images/WhyUs.jpg";

export const WhoWeAre = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 py-12 items-end">
      <div className="flex flex-col justify-start space-y-14">
        <div className="space-y-3">
          <p className="uppercase text-sm bg-text-primary-gradient text-transparent bg-clip-text tracking-[0.6em] font-bold">
            Who We Are
          </p>
          <h2 className="text-5xl bg-text-primary-gradient text-transparent bg-clip-text font-extrabold ">
            Who We Are
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Established in [Year of Establishment], [Your Company Name] has been
          dedicated to creating unforgettable construction and renovation
          experiences. Our journey started with a simple idea — to make every
          project extraordinary. Today, we continue to turn visions into
          reality.
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
            Why Us
          </p>
          <h2 className="text-5xl font-extrabold ">Why Us</h2>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          What makes us unique is our unwavering commitment to excellence. We're
          not just a construction company; we’re your trusted building partner.
          Discover the reasons why clients choose us for their dream spaces.
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
