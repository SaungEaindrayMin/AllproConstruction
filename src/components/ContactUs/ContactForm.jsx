import Link from "next/link";
import Form from "./Form";
import {
     Facebook,
     Instagram,
     Mail,
     Twitter,
     MapPin,
     Clock,
     Phone,
} from "lucide-react";

export const ContactForm = () => {
     return (
          <section className="w-full py-20 relative">
               <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12">
                         {/* Left Section - Contact Info */}
                         <div className="lg:col-span-5 space-y-12">
                              {/* Contact Details */}
                              <div className="space-y-8">
                                   <div className="flex gap-4">
                                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div className="space-y-1">
                                             <p className="font-medium">
                                                  Mon - Sat
                                             </p>
                                             <p className="text-muted-foreground text-sm">
                                                  09:00 AM - 06:30 PM
                                             </p>
                                             <p className="text-destructive text-sm">
                                                  Sunday (Closed)
                                             </p>
                                        </div>
                                   </div>

                                   <div className="flex gap-4">
                                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div className="space-y-1">
                                             <p className="font-medium">
                                                  118(A) Bangkok Street
                                             </p>
                                             <p className="text-muted-foreground text-sm">
                                                  London Eye, London, UK
                                             </p>
                                        </div>
                                   </div>

                                   <div className="flex gap-4">
                                        <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div className="space-y-1">
                                             <p className="font-medium">
                                                  connect@gmail.com
                                             </p>
                                             <p className="text-muted-foreground text-sm">
                                                  +(959) 893275835
                                             </p>
                                        </div>
                                   </div>
                              </div>

                              {/* Social Links */}
                              <div className="pt-8 border-t border-border">
                                   <div className="flex items-center gap-4">
                                        <Link
                                             href="/facebook"
                                             className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                                        >
                                             <Facebook size={18} />
                                        </Link>
                                        <Link
                                             href="/twitter"
                                             className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                                        >
                                             <Twitter size={18} />
                                        </Link>
                                        <Link
                                             href="/instagram"
                                             className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                                        >
                                             <Instagram size={18} />
                                        </Link>
                                        <Link
                                             href="/contact"
                                             className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                                        >
                                             <Mail size={18} />
                                        </Link>
                                   </div>
                              </div>

                              {/* Map */}
                              <div className="relative w-full h-80 rounded-lg overflow-hidden border border-border">
                                   <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540619755501!2d-0.1217!3d51.5033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="grayscale"
                                   />
                              </div>
                         </div>

                         {/* Right Section - Form */}
                         <div className="lg:col-span-7">
                              <div className="lg:float-end  lg:px-12">
                                   <h2 className="text-3xl font-bold mb-2">
                                        <span className="bg-text-primary-gradient text-transparent bg-clip-text">
                                             Send us a message
                                        </span>
                                   </h2>
                                   <p className="text-muted-foreground mb-8">
                                        We'll get back to you within 24 hours
                                   </p>
                                   <Form />
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
