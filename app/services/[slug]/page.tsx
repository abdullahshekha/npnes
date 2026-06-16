import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { generators } from "@/lib/generators";

type FAQ = { q: string; a: string };

type ServiceData = {
  title: string;
  intro: string;
  listLabel?: string;
  items: string[];
  image: string;
  faqs: FAQ[];
};

const services: Record<string, ServiceData> = {
  "power-plant-services": {
    title: "Power Plant Services",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
    intro:
      "NPNES provides back-end product support for MWM, Caterpillar, Jenbacher, MAN, Wartsila, Waukesha, Guascor, Nohab and especially MWM (Deutz) gas, diesel and HFO engines through services and parts. Our aim is to be a real alternative to the OEM builder through fast, cost-effective and slim services.",
    listLabel: "Key Features",
    items: [
      "Diversified experience in Power Plant Solutions",
      "Expertise in latest Gas, Diesel and HFO power plant technology",
      "Highly skilled, trained & experienced team",
      "Onsite repairing services anywhere in the world",
      "Main line boring capability",
      "All repairs tested to ensure highest quality",
    ],
    faqs: [
      {
        q: "Which engine brands does NPNES support?",
        a: "NPNES provides back-end support for MWM, Caterpillar, Jenbacher, MAN, Wartsila, Waukesha, Guascor, Nohab and especially MWM (Deutz) gas, diesel and HFO engines.",
      },
      {
        q: "Do you offer onsite power plant services?",
        a: "Yes. Our experienced field service teams travel anywhere in the world to provide onsite repairs, maintenance and overhauling with no geographical limitation.",
      },
      {
        q: "Are replacement parts genuine OEM?",
        a: "We supply both genuine OEM parts and high-quality equivalent parts, giving clients cost-effective alternatives without compromising plant performance or reliability.",
      },
      {
        q: "How quickly can NPNES respond to emergencies?",
        a: "We maintain emergency parts inventory and have field teams on standby. Emergency parts are available 24/7 to minimise plant downtime.",
      },
    ],
  },
  amc: {
    title: "Annual Maintenance Contract (AMC)",
    image: "https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?w=1920&q=80",
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
    faqs: [
      {
        q: "What is included in an AMC?",
        a: "An AMC typically covers scheduled quarterly and annual inspections, calibration, servicing, and minor repairs in line with the manufacturer's maintenance schedule. Scope can be customised to cover the full plant or specific systems.",
      },
      {
        q: "How often are service visits scheduled?",
        a: "We plan both quarterly and annual service visits. The exact schedule is agreed at the start of the contract based on the plant type, age and manufacturer recommendations.",
      },
      {
        q: "Can the AMC be customised to our needs?",
        a: "Yes. AMC contracts are flexible and can be tailored to cover a single power conditioner, specific equipment, or the entire plant from generation to distribution.",
      },
      {
        q: "What happens if equipment breaks down between scheduled visits?",
        a: "AMC clients benefit from priority response. Our team is available for emergency callouts, and we maintain a stock of critical spare parts to minimise downtime.",
      },
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
    faqs: [
      {
        q: "What does NPNES cover under O&M?",
        a: "NPNES takes full responsibility for mobilisation of the O&M team, day-to-day plant operation, routine and preventive maintenance, equipment repair, fuel management, performance monitoring and performance guarantees.",
      },
      {
        q: "Does NPNES provide O&M services outside Pakistan?",
        a: "Yes. We utilise our global resources to provide complete plant O&M services worldwide. Our teams are experienced in working across different regulatory environments and climates.",
      },
      {
        q: "How does NPNES ensure plant performance?",
        a: "We implement structured preventive maintenance programmes, continuous performance monitoring, and provide engineering support to optimise plant efficiency and reliability.",
      },
      {
        q: "Can NPNES take over O&M of an existing plant?",
        a: "Yes. We can mobilise an O&M organisation for existing plants at any stage of their lifecycle, from newly commissioned plants to ageing assets requiring intensive support.",
      },
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
      "Air Compressors: HATLAPA, Neuenhauser, BOGA, HENSHING, etc.",
      "Heat Exchangers: ALFA LAVAL, NKR, GEA, etc.",
      "Engine Overhauling & Routine Maintenance",
      "Honing Machine Including Roughness Tester — cylinder liner diameter 150mm to 400mm",
      "Cylinder Head Seat & Valve Grinding",
    ],
    faqs: [
      {
        q: "What engine types can NPNES overhaul?",
        a: "We overhaul Gas, Diesel and HFO engines from all major manufacturers including MWM (Deutz), Jenbacher, MAN, Wartsila, Caterpillar and others across the 100KW to 18MW capacity range.",
      },
      {
        q: "Do you provide ON-SITE Cylinder head Rebuild services?",
        a: "We can provide services for cylinder head rebuild service for 100mm bore to 260 mm bore engines.",
      },
      {
        q: "What cylinder liner diameters can you handle?",
        a: "Our honing machine handles cylinder liner diameters from 150mm to 400mm, with a roughness tester included to verify finish quality.",
      },
      {
        q: "How long does a major engine overhaul take?",
        a: "Overhaul duration depends on engine size and condition. We assess each engine individually and provide a detailed timeline before commencing work to help you plan around production schedules.",
      },
    ],
  },
  "electrical-switchgear": {
    title: "Electrical Engineering & Switchgear Services",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=1920&q=80",
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
      "Transformer installation repair and maintenance",
    ],
    faqs: [
      {
        q: "What types of switchgear does NPNES manufacture?",
        a: "We manufacture a complete range of LV switchgear including DBs, distribution panels, PFI panels, motor control panels, ATS/AMF panels, synchronising panels, bus tie ducts and more.",
      },
      {
        q: "Do NPNES products meet international standards?",
        a: "Yes. All NPNES switchgear products are designed and manufactured to meet both national Pakistani electricity standards and applicable international standards.",
      },
      {
        q: "Can you design custom panels for specific applications?",
        a: "Absolutely. Our engineering team designs custom panels to match specific load requirements, installation environments and client specifications.",
      },
      {
        q: "Which sectors do you serve?",
        a: "We serve industrial facilities, commercial buildings, multi-storey plazas, hotels, hospitals, banks and power plants requiring reliable low and high voltage distribution solutions.",
      },
    ],
  },
  "electronic-repairs": {
    title: "Electronic Repairing Workshop",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=1920&q=80",
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
    faqs: [
      {
        q: "What electronic components do you repair?",
        a: "We repair PLC cards, VFDs, inverters, electronic actuator motors, VR cards, TEM EVO cards, HMI systems and IPC units used in power plant control and automation.",
      },
      {
        q: "How long does an electronic repair typically take?",
        a: "Turnaround time depends on the component and fault complexity. We diagnose each component and give a clear timeline before starting work. Many standard repairs are completed within a few business days.",
      },
      {
        q: "Do repaired components come with a warranty?",
        a: "Yes. Repaired components are tested before return and we provide a warranty period on our workmanship, giving clients confidence in the reliability of the repaired parts.",
      },
      {
        q: "Can you repair components from any manufacturer?",
        a: "Our technicians are experienced with components from all major industrial manufacturers. We handle both common and specialist items used in gas, diesel and HFO power plant control systems.",
      },
    ],
  },
  "used-power-plants": {
    title: "Supply of Used Power Plants",
    image: "https://images.unsplash.com/photo-1636867900334-025210ac78a0?w=1920&q=80",
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
    faqs: [
      {
        q: "What capacity range is available?",
        a: "We supply used power plants from 100KW up to 18MW. Whether you need a small standby unit or a large baseload plant, we can source the right equipment.",
      },
      {
        q: "What fuel types are available?",
        a: "We supply diesel, natural gas and HFO (Heavy Fuel Oil) engine-based power plants to suit different site fuel availability and economic considerations.",
      },
      {
        q: "How do you ensure the quality of used equipment?",
        a: "All used power plants are inspected and tested before supply. We provide honest condition assessments and can carry out reconditioning or overhauling prior to delivery if required.",
      },
      {
        q: "Do you provide installation and commissioning support?",
        a: "Yes. NPNES can provide full installation, testing and commissioning support for supplied used power plants, ensuring they are fully operational before handover.",
      },
    ],
  },
  "emissions-analysis": {
    title: "Emissions Analysis",
    image: "https://images.unsplash.com/photo-1585496058078-29596a3a7ced?w=1920&q=80",
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
    faqs: [
      {
        q: "What does an emissions analysis involve?",
        a: "Our team measures exhaust emissions from your power plant engines, compares results against applicable national and international standards, and provides a detailed report with findings.",
      },
      {
        q: "Why is emissions analysis important?",
        a: "Emissions analysis helps plant operators meet regulatory requirements, identify engine inefficiencies, reduce fuel consumption and demonstrate environmental responsibility to stakeholders.",
      },
      {
        q: "How often should emissions analysis be conducted?",
        a: "We recommend annual emissions analysis as a minimum, or following any major engine work. More frequent testing may be required to satisfy specific regulatory or contractual obligations.",
      },
      {
        q: "Can NPNES help reduce our plant emissions?",
        a: "Yes. Based on analysis findings, we provide practical recommendations including engine tuning, combustion optimisation and component upgrades to reduce emissions while maintaining output.",
      },
    ],
  },
  "cylinder-head-valve-grinding": {
    title: "Cylinder Head Seat & Valve Grinding",
    image: "https://images.unsplash.com/photo-1565954786194-d22abeaac3ae?w=1920&q=80",
    intro:
      "NPNES provides on-site machining support with our range of in-situ portable machines designed for on-site valve and seat grinding. Worn or damaged valve seats and valve faces directly impact engine compression and combustion efficiency. Our specialist equipment and trained technicians restore valve and seat geometry to factory tolerances, returning the cylinder head to full performance without workshop removal.",
    listLabel: "Scope of Work",
    items: [
      "In-situ portable valve seat and valve face grinding",
      "Cylinder head reconditioning on-site",
      "Valve seat cutting and precision grinding",
      "Restoration of valve and seat geometry to factory tolerances",
      "Compatible with all major engine brands",
      "Expert technicians ensuring precise clearances and sealing",
    ],
    faqs: [
      {
        q: "Why is valve and seat grinding necessary?",
        a: "Over time, valve faces and seats wear, leading to poor compression, misfires, increased fuel consumption and power loss. Grinding restores the sealing surfaces to correct geometry, recovering engine performance.",
      },
      {
        q: "Do you remove the cylinder head to perform grinding?",
        a: "In most cases we perform the work in-situ at the engine, minimising downtime. Where head removal is required, our team can manage the full process including refitment and leak testing.",
      },
      {
        q: "Which engine makes do you support?",
        a: "Our portable grinding equipment is compatible with all major engine manufacturers including MWM (Deutz), Jenbacher, MAN, Wartsila, Caterpillar, Waukesha, Cummins and Perkins.",
      },
      {
        q: "How do you verify the quality of the grind?",
        a: "We use engineer's blue and leak-down testing to verify that each valve and seat meets the required sealing standard before the engine is returned to service.",
      },
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

      {/* Main content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Detail */}
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
                  <ul className="space-y-3 mb-12">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-charcoal-mid text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* FAQs */}
              <h3 className="font-heading font-bold text-2xl text-charcoal uppercase mb-5">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {svc.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-gray-border rounded-lg overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                      <span className="font-heading font-bold text-sm text-charcoal uppercase pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className="flex-shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
                        size={16}
                      />
                    </summary>
                    <div className="px-4 pb-4 pt-3 border-t border-gray-border text-charcoal-mid text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
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

      {/* Available Generators — shown only on used-power-plants */}
      {slug === "used-power-plants" && (
        <section className="bg-gray-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
                In Stock
              </p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase">
                Available Generators
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {generators.map((gen) => (
                <div
                  key={gen.slug}
                  className="bg-white rounded-lg shadow-sm border border-gray-border hover:shadow-md hover:border-brand transition-all duration-200 overflow-hidden"
                >
                  {/* Card image */}
                  <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={gen.images[0]}
                      alt={gen.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-brand uppercase mb-3">
                      {gen.name}
                    </h3>
                    <div className="border-t border-gray-border pt-3 space-y-2 mb-4">
                      {[
                        { label: "Brand", value: gen.brand },
                        { label: "Model", value: gen.model },
                        { label: "Fuel", value: gen.fuel },
                        { label: "kW", value: String(gen.kw) },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between text-sm">
                          <span className="text-charcoal-mid">{row.label}:</span>
                          <span className="font-bold text-charcoal">{row.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <Link
                        href={`/used-power-plants/${gen.slug}`}
                        className="border border-brand text-brand text-sm font-semibold px-4 py-2 rounded hover:bg-brand hover:text-white transition-colors duration-200"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* View all */}
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
