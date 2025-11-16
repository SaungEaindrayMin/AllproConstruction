import image1 from "../../../public/images/Hero.png";
import image2 from "../../../public/images/Project1.jpg";
import image3 from "../../../public/images/Project2.jpg";
import image4 from "../../../public/images/Service2.jpg";
import image5 from "../../../public/images/Service1.jpg";
import image6 from "../../../public/images/WhoWeAre.jpg";
import image7 from "../../../public/images/WhyUs.jpg";
import Image from "next/image";

const images = [image1, image2, image3, image4, image5, image6, image7];

export const Certificates = () => {
  return (
    <section className="w-full py-12">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-text-primary-gradient text-transparent bg-clip-text">
            Qualified
          </span>{" "}
          Certificates
        </h1>

        <div className="flex flex-col items-center gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
            {images.slice(0, 4).map((src, i) => (
              <div
                key={i}
                className="w-full aspect-square bg-gray-200 rounded-md"
              >
                <Image
                  src={src}
                  alt="certificate"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-4xl place-items-center">
            {images.slice(4).map((src, i) => (
              <div
                key={i}
                className="w-full aspect-square bg-gray-200 rounded-md"
              >
                <Image
                  src={src}
                  alt="certificate"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
