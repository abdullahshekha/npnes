import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

type ServiceData = {
  title: string;
  intro: string;
  listLabel?: string;
  items: string[];
  image: string;
};

const services: Record<string, ServiceData> = {
  "power-plant-services": {
    title: "Power Plant Services",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
    intro:
      "NPNES provides back-end product support for Jenbacher, MAN, Wartsila, Caterpillar, Waukesha, Guascor, Nohab, Cockerill, and especially MWM (Deutz) gas, diesel and HFO engines through services and parts. Our aim is to be a real alternative to the OEM builder through fast, cost-effective and slim services.",
    listLabel: "Key Features",
    items: [
      "Diversified experience in Power Plant Solutions",
      "Expertise in latest Gas, Diesel and HFO power plant technology",
      "Highly skilled, trained & experienced team",
      "Onsite repairing services anywhere in the world",
      "Main line boring capability",
      "All repairs tested to ensure highest quality",
    ],
  },
  amc: {
    title: "Annual Maintenance Contract (AMC)",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1920&q=80",
    intro:
      "AMC contracts can be structured around power conditioner or total power plant performance. Quarterly and annual service visits can be planned to ensure the power conditioner or plant is checked, calibrated, or serviced according to manufacturer recommendations. Our contracts ensure long system life and minimal downtime to maximise financial returns for the owner.",
    listLabel: "Contract Benefits",
    items: [
      "Flexible contract structure — conditioner or full plant",
      "Scheduled quarterly and annual service visits",
      "Manufacturer-recommended calibration and servicing",
      "Extended system life and reduced unplanned downtime",
      "Maximised financial returns for plant owners",
      "Factory-trained technical staff on every visit",
    ],
  },
  "operation-maintenance": {
    title: "Operation & Maintenance (O&M)",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
    intro:
      "NPNES is one of the best O&M service providers at power plants. We help ensure optimum performance at existing power plants and provide consultation services for plants in planning stages through to project completion. Utilising our global resources, we provide complete plant services worldwide.",
    listLabel: "NPNES Takes Full Responsibility For",
    items: [
      "Mobilization of the complete O&M organization",
      "Preparing, Implementing & Maintaining Health & Safety Procedures",
      "Reliable, safe and economic plant operation",
      "Day-to-day operation and routine maintenance",
      "Equipment services and repair",
      "Engineering and technical support",
      "Unplanned maintenance protection",
      "Preventive maintenance programs",
      "Power delivery & fuel management",
      "Performance Monitoring",
      "Performance guarantees",
    ],
  },
  "engine-overhauling": {
    title: "Engine Major Overhauling & Trouble Shooting",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
    intro:
      "Engine major overhauling and emergency troubleshooting is one of the main activities in the NPNES company profile. We handle the full spectrum from routine maintenance through to complete engine rebuilds across all fuel types.",
    listLabel: "Scope of Work",
    items: [
      "Overhauling of Gas, Diesel & HFO Power Plants",
      "Purifiers: ALFA LAVAL, WESTFALIA, MITSUBISHI, etc.",
      "Air Compressors: IMW, SAFE, BOGA, HENSHING, etc.",
      "Heat Exchangers: ALFA LAVAL, NKR, GEA, etc.",
      "Rental power plant services — moveable, plug-in type, sound proof canopies & open type",
      "Engine Overhauling & Routine Maintenance",
      "Inspection & Engine Line Boring (In-Situ) — 100KW to 18MW capacity",
      "Honing Machine Including Roughness Tester — cylinder liner diameter 150mm to 400mm",
      "Cylinder Head Seat & Valve Grinding",
      "Crankshaft grinding up to 20 feet length",
    ],
  },
  "electrical-switchgear": {
    title: "Electrical Engineering & Switchgear Services",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    intro:
      "NPNES is equipped with design & manufacturing facilities for a complete line of low/high voltage switchgear serving industrial, commercial, multi-story plazas, hotels, hospitals and banks. NPNES products meet national & international electricity standards and are run by a team of professional engineers with the spirit of innovation.",
    listLabel: "Products & Services",
    items: [
      "Power & lighting DBs",
      "LV distribution panels",
      "Power factor improvement panels (PFI)",
      "Motor control panels",
      "ATS/AMF panels",
      "Auto load shading panels",
      "Manual & Auto start panels",
      "Synchronizing & load shearing panels",
      "Bus Tie Duct",
      "Cable Tray / Cable ladder",
      "Component of LV switchgear",
    ],
  },
  "electronic-repairs": {
    title: "Electronic Repairing Workshop",
    image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=1920&q=80",
    intro:
      "We have a state-of-the-art electronic repairing workshop equipped with specialist tools and diagnostic equipment. Our experienced technicians handle repairs for critical industrial electronic components, ensuring minimum downtime for your plant.",
    listLabel: "Equipment We Repair",
    items: [
      "PLC Cards",
      "VFD, Inverters",
      "Electronic Actuator Motor",
      "VR Cards",
      "TEM EVO Cards",
      "HMI, IPC",
    ],
  },
  "used-power-plants": {
    title: "Supply of Used Power Plants",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
    intro:
      "NPNES provides all kinds of Diesel, Gas & HFO based used power plants. In addition to offering a vast selection of used engines, NPNES is dedicated to providing high-quality used equipment — a variety of popular makes and models. With a full range of used power generation equipment, NPNES has the equipment you need to keep your operation running.",
    listLabel: "Available Capacities & Types",
    items: [
      "100KW to 18MW generator sets",
      "Diesel engine power plants",
      "Natural gas engine power plants",
      "HFO (Heavy Fuel Oil) engine power plants",
      "Various popular OEM makes and models",
      "All equipment inspected and tested before supply",
    ],
  },
  "emissions-analysis": {
    title: "Emissions Analysis",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
    intro:
      "The Emissions Analysis facility is available with Net Power & Energy Solutions as part of our social responsibility to continuously search for environment-friendly solutions. We help plant operators understand and reduce their environmental footprint.",
    listLabel: "Service Includes",
    items: [
      "Exhaust emissions measurement and reporting",
      "Compliance assessment against national and international standards",
      "Recommendations for emissions reduction",
      "Engine tuning for optimal fuel efficiency and lower emissions",
      "Documentation for regulatory submissions",
    ],
  },
};

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = services[slug];
  if (!svc) return {};
  return {
    title: `${svc.title} — NPNES`,
    description: svc.intro.slice(0, 160),
  };
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const svc = services[slug];
  if (!svc) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center py-24"
        style={{
          backgroundImage: `url('${svc.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
            Our Services
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-6xl uppercase">{svc.title}</h1>
          <p className="mt-3 text-gray-300 text-sm">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>{" "}
            &rsaquo;{" "}
            <Link href="/services" className="hover:text-brand transition-colors">
              Services
            </Link>{" "}
            &rsaquo; {svc.title}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
                Service Detail
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal uppercase mb-6">
                {svc.title}
              </h2>
              <p className="text-charcoal-mid leading-8 mb-8">{svc.intro}</p>

              {svc.listLabel && (
                <>
                  <h3 className="font-heading font-bold text-2xl text-charcoal uppercase mb-4">
                    {svc.listLabel}
                  </h3>
                  <ul className="space-y-3">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-charcoal-mid text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Side CTA */}
            <div className="lg:col-span-1">
              <div className="bg-gray-light rounded-lg p-6 border border-gray-border sticky top-24">
                <h3 className="font-heading font-bold text-xl text-charcoal uppercase mb-3">
                  Need This Service?
                </h3>
                <p className="text-charcoal-mid text-sm leading-relaxed mb-5">
                  Our team is available around the clock for inquiries, emergency support and
                  detailed quotations.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 justify-center w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3 px-5 rounded transition-colors duration-200"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
                <div className="mt-6 pt-5 border-t border-gray-border space-y-2">
                  <p className="text-xs text-charcoal-mid font-semibold uppercase tracking-wide">
                    Emergency Hotline
                  </p>
                  <p className="text-charcoal font-semibold text-sm">+92 324 8420096</p>
                  <p className="text-charcoal font-semibold text-sm">+92 334 2560701</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-charcoal-mid text-sm mb-3">Explore more of what we offer</p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:underline"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
