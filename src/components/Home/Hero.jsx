
import Image from "next/image";
import { Button } from "../ui/button";
import hero from "../../../public/images/Hero.png";
// import { useI18n } from "next-localization";

export const Hero = () => {

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12 md:gap-20 pb-12">
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

      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold  leading-tight">
          <span className="bg-text-primary-gradient text-transparent bg-clip-text ">
            Complete
          </span>{" "}
          Construction & Renovation Solutions
        </h1>

        <p className="text-muted-foreground text-lg">
          From foundations to finishes — we build, repair, and transform.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Get a Quote</Button>
          <Button variant="secondary">Why Choose Us</Button>
        </div>

        <div className="flex items-start gap-6 md:gap-10 w-full md:w-[50%]">
          <div>
            <h2 className="text-2xl font-bold">350+</h2>
            <p className="text-muted-foreground">
              Renovated and built projects
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">70+</h2>
            <p className="text-muted-foreground">
              Swimming pools designed and built
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
