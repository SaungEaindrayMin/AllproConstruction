"use client";

import Image from "next/image";
import { Separator } from "../ui/separator";
import Service1 from "../../../public/images/Service1.jpg";
import Service2 from "../../../public/images/Service2.jpg";
import { useMessages } from "@/providers/I18nProvider";

export const ServiceInfo = () => {
  const { messages } = useMessages();
  const t = messages.serviceInfo;
  return (
    <section>
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-semibold">
          {t.title}{" "}
          <span className="bg-text-primary-gradient text-transparent bg-clip-text ">
            {t.services}
          </span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t.text}</p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-between mt-12">
        <div className="max-w-md space-y-6 flex-1">
          <Separator />

          <div className="space-y-3">
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.firstTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.firstText}
            </p>
          </div>

          <Separator />

          <div className="space-y-3">
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.secondTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.secondText}
            </p>
          </div>

          <Separator />
        </div>

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

      <div className="flex flex-col md:flex-row-reverse items-stretch justify-between mt-12">
        <div className="max-w-md space-y-6 flex-1">
          <Separator />

          <div className="space-y-3">
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.thirdTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.thirdText}
            </p>
          </div>

          <Separator />

          <div className="space-y-3">
            <h2 className="text-3xl font-semibold bg-text-primary-gradient text-transparent bg-clip-text">
              {t.fourthTitle}
            </h2>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {t.fourthText}
            </p>
          </div>

          <Separator />
        </div>

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
