import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, ClipboardList, Settings, Zap, Package, Monitor, CheckCircle2, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "NPNES — Net Power & Energy Solutions",
  description:
    "Industrial power plant services, maintenance, overhauling and spare parts. Karachi, Pakistan.",
};

const services = [
  {
    icon: Wrench,
    title: "Power Plant Services",
    href: "/services/power-plant-services",
    desc: "Back-end support for Jenbacher, MAN, Wartsila, MWM (Deutz) and other major OEM engines.",
  },
  {
    icon: ClipboardList,
    title: "O&M / AMC",
    href: "/services/operation-maintenance",
    desc: "Structured annual maintenance contracts and full plant operation & maintenance services.",
  },
  {
    icon: Settings,
    title: "Engine Overhauling",
    href: "/services/engine-overhauling",
    desc: "Major overhauling and emergency troubleshooting for gas, diesel and HFO power plants.",
  },
  {
    icon: Zap,
    title: "Electrical & Switchgear",
    href: "/services/electrical-switchgear",
    desc: "Design and manufacturing of LV/HV switchgear for industrial, commercial and high-rise use.",
  },
  {
    icon: Package,
    title: "Spare Parts Supply",
    href: "/spare-parts",
    desc: "Genuine and OEM spare parts for a wide range of engine manufacturers, available 24/7.",
  },
  {
    icon: Monitor,
    title: "Electronic Repairs",
    href: "/services/electronic-repairs",
    desc: "State-of-the-art workshop for PLC cards, VFDs, actuators, HMI and IPC systems.",
  },
];

const reasons = [
  "Diversified experience in Power Plant Solutions",
  "Latest technology for Gas, Diesel and HFO plants",
  "Highly skilled, trained & experienced team",
  "Onsite repairing services anywhere in the world",
  "All repairs tested to the highest quality standards",
  "Emergency parts available 24/7",
];

const brands = [
  "Jenbacher", "MAN", "Wartsila", "Caterpillar", "Waukesha",
  "Guascor", "Nohab", "Cockerill", "MWM (Deutz)", "Perkins",
  "Cummins", "Mitsubishi", "Niigata",
];

const clients = [
  { name: "Soorty Enterprises", capacity: "6MW Gas & Diesel" },
  { name: "Artistic Miliners-03", capacity: "7MW Gas & Diesel" },
  { name: "Diamond International", capacity: "9MW Gas & Diesel" },
  { name: "NP Cotton Mill", capacity: "6MW Gas & Diesel" },
  { name: "Habib ADM", capacity: "3MW Gas & Diesel" },
];

const faqs = [
  {
    q: "What services does NPNES provide?",
    a: "NPNES provides a full range of power plant services including installation & commissioning, annual maintenance contracts (AMC), operation & maintenance (O&M), engine overhauling, electrical & switchgear manufacturing, electronic repairs, and genuine/OEM spare parts supply.",
  },
  {
    q: "Which engine brands does NPNES support?",
    a: "We support all major engine brands including Jenbacher, MAN, Wartsila, Caterpillar, Waukesha, Guascor, Nohab, Cockerill, MWM (Deutz), Perkins, Cummins, Mitsubishi and Niigata for gas, diesel and HFO applications.",
  },
  {
    q: "Does NPNES provide emergency services?",
    a: "Yes. NPNES maintains an emergency parts inventory and has experienced field service teams on standby. Emergency parts and support are available 24/7 to minimise plant downtime.",
  },
  {
    q: "Can NPNES service power plants outside Pakistan?",
    a: "Absolutely. Our field service teams provide onsite repairing and maintenance services anywhere in the world, utilising our global resources and network.",
  },
  {
    q: "What is an Annual Maintenance Contract (AMC)?",
    a: "An AMC is a structured service agreement covering scheduled inspections, calibration and maintenance of your power plant or specific equipment. It ensures long system life, minimal unplanned downtime and maximised financial returns for the plant owner.",
  },
  {
    q: "How do I get a quote or contact NPNES?",
    a: "You can reach us via the Contact page, by emailing info@npnes.com, or by calling +92 324 8420096 / +92 334 2560701. Our team responds promptly to all inquiries.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto py-24">
          <p className="font-heading font-semibold text-brand uppercase tracking-widest text-sm mb-4">
            Net Power &amp; Energy Solutions
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-7xl uppercase mb-5 leading-tight">
            Your Efficient Energy Solutions Partner
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Installation · Commissioning · Maintenance · Overhauling · Spare Parts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded transition-colors duration-200"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold px-8 py-3 rounded transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Tagline strip */}
      <section className="bg-brand py-4">
        <p className="text-center text-white font-bold text-sm md:text-base px-4">
          Highly Reputed for Good Quality, Good Services, Competitive Pricing &amp; Fast Delivery
        </p>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
              What We Do
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="group border border-gray-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-brand transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand transition-colors duration-200">
                    <Icon
                      className="text-brand group-hover:text-white transition-colors duration-200"
                      size={22}
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal uppercase mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-charcoal-mid leading-relaxed">{svc.desc}</p>
                  <span className="inline-block mt-3 text-brand text-sm font-semibold">
                    Learn More →
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded transition-colors duration-200"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose NPNES */}
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
              Our Strengths
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase">
              Why Choose NPNES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3 bg-white rounded-lg p-5 shadow-sm">
                <CheckCircle2 className="text-brand flex-shrink-0 mt-0.5" size={20} />
                <p className="text-charcoal-mid text-sm leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands — plain grid, not pill/tab style */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
              OEM Support
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase">
              Brands We Support
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-5">
            {brands.map((brand) => (
              <div key={brand} className="bg-gray-light rounded-lg p-3 text-center">
                <p className="font-heading font-bold text-xs text-charcoal uppercase">{brand}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal-mid text-sm italic">
            Back-end product support through services and genuine/OEM parts
          </p>
        </div>
      </section>

      {/* Clients snapshot */}
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
              Trusted By
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase">
              Our Clients
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-white rounded-lg p-5 shadow-sm border border-gray-border"
              >
                <p className="font-heading font-bold text-lg text-charcoal uppercase mb-2">
                  {client.name}
                </p>
                <span className="inline-block bg-brand-light text-brand text-xs font-semibold px-3 py-1 rounded-full">
                  {client.capacity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
              Common Questions
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-gray-border rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-heading font-bold text-sm text-charcoal uppercase pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="flex-shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
                    size={16}
                  />
                </summary>
                <div className="px-5 pb-5 pt-3 border-t border-gray-border text-charcoal-mid text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white uppercase mb-4">
            Ready to Power Your Operations?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Talk to our team about AMC, overhauling, or spare parts.
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
