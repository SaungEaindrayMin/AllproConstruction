"use client";

import { Certificates } from "@/components/Home/Certificates";
import { Hero } from "@/components/Home/Hero";
import { Projects } from "@/components/Home/Projects";
import { Services } from "@/components/Home/Services";
import { WhoWeAre } from "@/components/Home/WhoWeAre";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <Hero />
      <WhoWeAre />
      <div className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] px-0">
        <Certificates />
      </div>
      <Services />
      <Projects />
    </div>
  );
}
