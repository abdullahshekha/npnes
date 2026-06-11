import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — NPNES",
  description:
    "Get in touch with Net Power & Energy Solutions. Office in Karachi, Pakistan.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "35vh",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
            Reach Out
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl uppercase">Get In Touch</h1>
          <p className="mt-3 text-gray-300 text-sm">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>{" "}
            &rsaquo; Contact
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact info + map */}
            <div>
              <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
                Contact Details
              </p>
              <h2 className="font-heading font-bold text-4xl text-charcoal uppercase mb-8">
                Our Office
              </h2>

              <ul className="space-y-5 mb-8">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-brand" size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-charcoal-mid tracking-wide mb-1">
                      Address
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Plot # ST-38, Ground Floor, K.E.S.C Co-Operative Housing Society, Sector 34-A,
                      K.D.A, Scheme-33, Karachi, Pakistan
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-brand" size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-charcoal-mid tracking-wide mb-1">
                      Phone
                    </p>
                    <p className="text-charcoal-mid text-sm">+92 324 8420096</p>
                    <p className="text-charcoal-mid text-sm">+92 334 2560701</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-brand" size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-charcoal-mid tracking-wide mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@npnes.com"
                      className="text-charcoal-mid text-sm hover:text-brand transition-colors"
                    >
                      info@npnes.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="text-brand" size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-charcoal-mid tracking-wide mb-1">
                      Website
                    </p>
                    <p className="text-charcoal-mid text-sm">www.npnes.com</p>
                  </div>
                </li>
              </ul>

              {/* Google Maps embed */}
              <div className="rounded-lg overflow-hidden border border-gray-border">
                <iframe
                  title="NPNES Office Location — Karachi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.975!2d67.07!3d24.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzQ4LjAiTiA2N8KwMDQnMTIuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
                Send a Message
              </p>
              <h2 className="font-heading font-bold text-4xl text-charcoal uppercase mb-8">
                How Can We Help?
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
