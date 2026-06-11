import type { Metadata } from "next";
import Link from "next/link";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Clients — NPNES",
  description:
    "Meet the valued clients NPNES serves across Pakistan and worldwide.",
};

const clients = [
  { name: "Soortt Enterprises", capacity: "6MW Gas & Diesel" },
  { name: "Artistic Miliners-03", capacity: "7MW Gas & Diesel" },
  { name: "Artistic Miliners-05", capacity: "10MW Gas & Diesel" },
  { name: "Diamond International", capacity: "9MW Gas & Diesel" },
  { name: "NP Cotton Mill", capacity: "6MW Gas & Diesel" },
  { name: "Habib ADM", capacity: "3MW Gas & Diesel" },
  { name: "NP Cotton Mill (2nd unit)", capacity: "6MW Gas & Diesel" },
];

export default function ClientsPage() {
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
          minHeight: "40vh",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
            Our Portfolio
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl uppercase">Our Clients</h1>
          <p className="mt-3 text-gray-300 text-sm">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>{" "}
            &rsaquo; Clients
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
            Trusted By Industry Leaders
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase mb-4">
            Our Valued Clients
          </h2>
          <p className="text-charcoal-mid leading-8">
            Our well-known customers in Pakistan &amp; worldwide. We are proud to have built
            long-term relationships with industry leaders who trust NPNES for their critical power
            plant operations.
          </p>
        </div>
      </section>

      {/* Client cards */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-border hover:border-brand hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="text-brand" size={20} />
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal uppercase mb-3">
                  {client.name}
                </h3>
                <span className="inline-block bg-brand-light text-brand text-xs font-semibold px-3 py-1 rounded-full">
                  {client.capacity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-heading font-bold text-2xl md:text-3xl text-charcoal uppercase italic">
            &ldquo;Net Power &amp; Energy Solutions — Committed to Total Customer Satisfaction&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white uppercase mb-4">
            Join Our Client Family
          </h2>
          <p className="text-white/90 mb-6">
            Partner with NPNES for reliable, high-quality power plant services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
