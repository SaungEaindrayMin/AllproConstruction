import Image from "next/image";
import { ArrowRight } from "lucide-react";

import building1 from "../../../public/images/ProjectBuilding.png";
import building2 from "../../../public/images/ProjectBuilding2.png";

const ProjectBlock = ({
  image,
  title,
  location,
  description,
  reverse = false,
}) => {
  return (
    <div className="space-y-24">
      {/* top section */}
      <div
        className={`grid lg:grid-cols-2 gap-x-8 gap-y-4 ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* text */}
        <div className={`space-y-6 ${reverse ? "lg:order-2" : ""}`}>
          <p className="text-sm bg-text-primary-gradient text-transparent bg-clip-text tracking-wide">
            {location}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
            {title}
          </h1>
        </div>

        {/* image */}
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

      {/* bottom description */}
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal">
          Building a Healthy Future Together
        </h2>

        <p className="text-lg tracking-wide text-muted-foreground font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export const ProjectInfo = () => {
  const description =
    "The Orlando Health Bayfront Medical Pavilion project consists of a new medical office facility to provide multidisciplinary state of the art outpatient services. The project includes a 123,000 SF multi-tenant facility which will include three external partners offering Radiation Oncology, Medical Oncology Clinics, Oncology Research, Orthopedic Clinics, Orlando Health Imaging Center, OH/BHSP Lab, and other specialty clinics.";

  return (
    <section className="w-full">
      <div className="space-y-[20%]">
        <ProjectBlock
          image={building1}
          location="ST. PETERSBURG, FLORIDA | UNITED STATES"
          title="Bayfront Health Medical Pavilion at Institute Square"
          description={description}
        />

        <ProjectBlock
          image={building2}
          location="ST. PETERSBURG, FLORIDA | UNITED STATES"
          title="Bayfront Health Medical Pavilion at Institute Square"
          description={description}
          reverse
        />
      </div>
    </section>
  );
};
