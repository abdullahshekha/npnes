import type { Metadata } from "next";
import Link from "next/link";
import { Package, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Spare Parts — NPNES",
  description:
    "Genuine and OEM spare parts for Deutz MWM, Wartsila, Perkins, MAN B&W, Jenbacher and more.",
};

const brands = [
  {
    name: "DEUTZ (MWM)",
    desc: "Genuine & OEM parts for MWM Diesel, GAS and HFO Engines",
    series: [
      "TCG 2032 Series",
      "TCG 2020 Series",
      "TCG 2016 Series",
      "TBG 620 Series",
      "TBG 616 Series",
      "TGD 2020 Series",
      "M 640 HFO",
      "M 540 HFO",
    ],
  },
  {
    name: "WARTSILA",
    desc: "Genuine & OEM parts for WARTSILA HFO Engines",
    series: ["WARTSILA 20 Series", "WARTSILA 32 Series", "WARTSILA 46 Series"],
  },
  {
    name: "PERKINS",
    desc: "Genuine & OEM parts for Gas and Diesel Engines",
    series: [
      "4000 Series",
      "3000 Series",
      "2800 Series",
      "2300 Series",
      "1300 Series",
      "1100 Series",
      "400 Series",
    ],
  },
  {
    name: "MAN B&W",
    desc: "Genuine & OEM parts for MAN HFO Engines",
    series: ["40/45 Series", "48/60 Series"],
  },
  {
    name: "JENBACHER (GE)",
    desc: "Genuine & OEM parts for GAS Engines",
    series: ["JGS 616 Series", "JGS 320 Series", "JGS 316 Series", "JGS 620 Series"],
  },
];

const alsoSupport = ["NIIGATA", "MITSUBISHI", "CATERPILLAR", "WAUKESHA", "CUMMINS", "GUASCOR"];

export default function SparePartsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
            Parts & Supply
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl uppercase">Spare Parts</h1>
          <p className="mt-3 text-gray-300 text-sm">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>{" "}
            &rsaquo; Spare Parts
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
            Genuine &amp; OEM
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase mb-6">
            Parts We Supply
          </h2>
          <p className="text-charcoal-mid leading-8">
            NPNES provides genuine as well as OEM parts for a wide range of engines. We support
            the following makers and many more. Emergency parts are available to facilitate the
            customer round the clock.
          </p>
        </div>
      </section>

      {/* Brand cards */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-border hover:border-brand transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="text-brand" size={18} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal uppercase">
                    {brand.name}
                  </h3>
                </div>
                <p className="text-charcoal-mid text-xs font-semibold uppercase tracking-wide mb-3">
                  {brand.desc}
                </p>
                <ul className="space-y-1">
                  {brand.series.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-charcoal-mid">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also support — plain text, not pill-style */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
              Additional Support
            </p>
            <h2 className="font-heading font-bold text-3xl text-charcoal uppercase mb-4">
              Also Available For
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {alsoSupport.map((brand) => (
              <div
                key={brand}
                className="bg-gray-light rounded-lg p-4 text-center"
              >
                <p className="font-heading font-bold text-sm text-charcoal uppercase">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-brand py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Phone className="text-white" size={26} />
            </div>
          </div>
          <h2 className="font-heading font-bold text-4xl text-white uppercase mb-3">
            Emergency Parts Available 24/7
          </h2>
          <p className="text-white/90 mb-6">
            Contact us now for urgent spare part requirements — we facilitate customers around the
            clock.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
