"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Clock10Icon, MapPinIcon, PlusIcon } from "lucide-react";
import project1 from "../../../public/images/Project1.jpg";
import project2 from "../../../public/images/Project2.jpg";

const ProjectCard = ({ image, title, reverse = false }) => {
  const containerClip = reverse
    ? "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)"
    : "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)";

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 bg-gray-50 p-4 rounded-lg ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      style={{ clipPath: containerClip }}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div
          className="w-full max-w-lg h-64 md:h-80 lg:h-64 bg-white overflow-hidden rounded-lg"
          style={{ clipPath: containerClip }}
        >
          <Image
            src={image}
            alt={`${title} image`}
            width={600}
            height={300}
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left mt-6 lg:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          ratione quibusdam dolores adipisci sapiente nostrum vel illum aliquam?
          Maxime, reiciendis.
        </p>

        <div className="space-y-3 mt-2">
          <InfoItem
            icon={<MapPinIcon />}
            label="Location"
            value="New York, USA"
          />
          <InfoItem
            icon={<PlusIcon />}
            label="Total Area"
            value="11,000 sq. meters"
          />
          <InfoItem icon={<Clock10Icon />} label="Duration" value="5Y, 3M" />
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-2   lg:justify-start">
    <div className="bg-primary-gradient  text-secondary rounded-full p-1">
      {icon}
    </div>
    <p className="text-sm md:text-base text-muted-foreground">
      {label}: <span className="font-medium text-foreground/60">{value}</span>
    </p>
  </div>
);

export const Projects = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-muted-foreground/70 text-sm md:text-base">
          Recent Projects
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Our{" "}
          <span className="bg-text-primary-gradient text-transparent bg-clip-text">
            Completed Projects
          </span>
        </h1>
      </div>

      {/* Projects */}
      <div className="space-y-10">
        <ProjectCard image={project1} title="The Business Hub" />
        <ProjectCard image={project2} title="The Creative Space" reverse />
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-10">
        <Button variant="default" className="w-40">
          View All Projects
        </Button>
      </div>
    </section>
  );
};
