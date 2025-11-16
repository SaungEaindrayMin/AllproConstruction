import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const CallToAction = () => {
  return (
    <section className="max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full text-center space-y-10">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            <span className="bg-text-primary-gradient text-transparent bg-clip-text">
              Connect
            </span>{" "}
            with Us for
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Tailored Solution
          </h1>
        </div>

        <div className="text-lg text-muted-foreground w-full md:w-[50%] lg:w-[35%] mx-auto">
          <p>
            Don't miss out the oportunity to elevate your operations with our
            cutting-edge chemical solution.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center justify-between gap-x-3 md:w-[35%] lg:w-[25%] bg-muted-foreground/10 p-3 rounded-full">
            <p className="text-lg font-medium text-primary">
              Unlock your next step
            </p>

            <Button className="p-2 bg-primary rounded-full">
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
