import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  ClipboardList,
  Settings,
  Zap,
  Monitor,
  Package,
  Wind,
  Gauge,
  Settings2,
  RotateCcw,
  Truck,
  ScanLine,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — NPNES",
  description:
    "Explore NPNES services: power plant maintenance, overhauling, O&M, electrical, spare parts and more.",
};

const services = [
  {
    slug: "power-plant-services",
    icon: Wrench,
    title: "Power Plant Services",
    desc: "Back-end product support for Jenbacher, MAN, Wartsila, Caterpillar, Waukesha and especially MWM (Deutz) gas, diesel and HFO engines through services and genuine/OEM parts.",
  },
  {
    slug: "amc",
    icon: ClipboardList,
    title: "Annual Maintenance Contract (AMC)",
    desc: "Structured AMC contracts around power conditioner or total plant performance, with quarterly and annual service visits planned to manufacturer recommendations.",
  },
  {
    slug: "operation-maintenance",
    icon: Settings,
    title: "Operation & Maintenance (O&M)",
    desc: "Complete O&M services for existing power plants — from mobilisation of the O&M organisation to performance guarantees and fuel management.",
  },
  {
    slug: "engine-overhauling",
    icon: Wrench,
    title: "Engine Major Overhauling",
    desc: "Engine overhauling and emergency troubleshooting for gas, diesel and HFO plants, including line boring, honing, crankshaft grinding and valve seat grinding.",
  },
  {
    slug: "electrical-switchgear",
    icon: Zap,
    title: "Electrical & Switchgear Services",
    desc: "Design and manufacturing of low/high voltage switchgear: DBs, LV distribution panels, PFI panels, ATS/AMF panels, synchronizing panels and more.",
  },
  {
    slug: "electronic-repairs",
    icon: Monitor,
    title: "Electronic Repairing Workshop",
    desc: "State-of-the-art electronic repair facility covering PLC cards, VFDs, inverters, electronic actuator motors, VR cards, TEM EVO cards, HMI and IPC.",
  },
  {
    slug: "used-power-plants",
    icon: Package,
    title: "Supply of Used Power Plants",
    desc: "All kinds of diesel, gas and HFO based used power plants ranging from 100KW to 18MW — popular makes and models maintained to high-quality standards.",
  },
  {
    slug: "emissions-analysis",
    icon: Wind,
    title: "Emissions Analysis",
    desc: "Emissions analysis facility available as part of NPNES's commitment to searching for environment-friendly power generation solutions.",
  },
  {
    slug: "inspection-line-boring",
    icon: ScanLine,
    title: "Inspection & Engine Line Boring (In-Situ)",
    desc: "On-site line boring of large generating and marine diesel engines using precision in-line boring machines with laser and optical alignment tooling — 100KW to 18MW capacity.",
  },
  {
    slug: "honing-roughness-tester",
    icon: Gauge,
    title: "Honing Machine Including Roughness Tester",
    desc: "In-situ boring and honing of cylinder liners for diameters 150mm to 400mm, with a roughness tester to verify surface finish quality to manufacturer specifications.",
  },
  {
    slug: "cylinder-head-valve-grinding",
    icon: Settings2,
    title: "Cylinder Head Seat & Valve Grinding",
    desc: "On-site valve and seat grinding using portable in-situ machines, restoring cylinder head geometry to factory tolerances for all major engine brands.",
  },
  {
    slug: "crankshaft-grinding",
    icon: RotateCcw,
    title: "Crankshaft Grinding & Repair",
    desc: "Professional crankshaft grinding up to 20 feet length, including journal machining, fillet reforming, peen straightening and removal of hard surfaces up to HB 650.",
  },
  {
    slug: "rental-power-plants",
    icon: Truck,
    title: "Rental Power Plant Services",
    desc: "Fast-track rental generator sets — moveable, plug-in type in sound-proof canopies and open configurations — for temporary power needs, shutdowns or peak demand.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero — industrial machinery image */}
      <section
        className="relative flex items-center justify-center py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
            What We Offer
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl uppercase">Our Services</h1>
          <p className="mt-3 text-gray-300 text-sm">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>{" "}
            &rsaquo; Services
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="group border border-gray-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-brand transition-all duration-200 flex gap-5"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center group-hover:bg-brand transition-colors duration-200">
                    <Icon
                      className="text-brand group-hover:text-white transition-colors duration-200"
                      size={24}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading font-bold text-xl text-charcoal uppercase mb-2">
                      {svc.title}
                    </h2>
                    <p className="text-sm text-charcoal-mid leading-relaxed mb-3">{svc.desc}</p>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="text-brand text-sm font-semibold hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white uppercase mb-4">
            Need a Specific Service?
          </h2>
          <p className="text-white/90 mb-6">
            Our team is ready to discuss your requirements and provide tailored solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
