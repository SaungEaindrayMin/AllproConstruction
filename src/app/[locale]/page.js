"use client";

import { Certificates } from "@/components/Home/Certificates";
import { Hero } from "@/components/Home/Hero";
import { Projects } from "@/components/Home/Projects";
import { Services } from "@/components/Home/Services";
import { WhoWeAre } from "@/components/Home/WhoWeAre";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-24">
      <Hero />
      <WhoWeAre />
      <Certificates/>
      <Services />
      <Projects />
    </div>
  );
}
