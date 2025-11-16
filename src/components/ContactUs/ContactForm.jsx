
import Link from "next/link";
import Form from "./Form";
import {
  Facebook,
  Instagram,
  Mail,
  Twitter,
} from "lucide-react";

export const ContactForm = () => {
  return (
    <section className="w-full py-12">
      <div className="grid lg:grid-cols-2 items-center justify-between gap-8">
        {/* text section  */}
        <div className="space-y-6">
          <div className="w-sm">
            <h1 className="text-4xl md:text-5xl font-bold ">
              <span className="bg-text-primary-gradient text-transparent bg-clip-text">
                Reach
              </span>{" "}
              out to us
            </h1>
          </div>

          <div className="space-y-3">
            <h2 className="bg-text-primary-gradient text-transparent bg-clip-text text-3xl font-semibold">
              Contact
            </h2>

            <div className="text-muted-foreground flex items-center gap-x-3">
              <ul className="space-y-2">
                <li>Office Hour : Mon - Sat 09:00AM to 06:30PM</li>
                <li>118(A) Bangkok street</li>
                <li>London Eye, London, UK</li>
              </ul>
              <ul className="space-y-2">
                <li className="text-destructive">Sunday (Close)</li>
                <li>connect@gmail.com</li>
                <li>+(959) 893275835</li>
              </ul>
            </div>

            <div className="flex items-center gap-x-3">
              <Link
                href="/facebook"
                className="p-2 bg-muted/90 text-primary rounded-full hover:bg-primary/20 transition"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="/twitter"
                className="p-2 bg-muted/90 text-primary rounded-full hover:bg-primary/20 transition"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="/instagram"
                className="p-2 bg-muted/90 text-primary rounded-full hover:bg-primary/20 transition"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="/contact"
                className="p-2 bg-muted/90 text-primary rounded-full hover:bg-primary/20 transition"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* form section  */}
        <div>
          <Form />
        </div>
      </div>
    </section>
  );
};
