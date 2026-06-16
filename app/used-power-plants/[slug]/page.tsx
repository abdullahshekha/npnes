import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { generators } from "@/lib/generators";
import GeneratorGallery from "@/components/GeneratorGallery";
import EnquiryForm from "@/components/EnquiryForm";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gen = generators.find((g) => g.slug === slug);
  if (!gen) return {};
  return {
    title: `${gen.name} — Used Generator | NPNES`,
    description: `${gen.brand} ${gen.model}, ${gen.fuel} engine, ${gen.kw} kW${gen.year ? `, ${gen.year}` : ""}. Available for sale. Contact NPNES for pricing and availability.`,
  };
}

export async function generateStaticParams() {
  return generators.map((g) => ({ slug: g.slug }));
}

export default async function GeneratorDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const gen = generators.find((g) => g.slug === slug);
  if (!gen) notFound();

  const specs = [
    gen.apsId ? { label: "APS-ID", value: gen.apsId } : null,
    { label: "Brand", value: gen.brand },
    { label: "Model", value: gen.model },
    gen.year ? { label: "Year", value: String(gen.year) } : null,
    { label: "kW", value: String(gen.kw) },
    { label: "Fuel", value: gen.fuel },
    gen.rpm ? { label: "RPM", value: String(gen.rpm) } : null,
    gen.hz ? { label: "Hz", value: String(gen.hz) } : null,
    gen.hours ? { label: "Hours", value: gen.hours.toLocaleString() } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
            Used Generators For Sale
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white uppercase mb-3">
            {gen.name}
          </h1>
          <p className="text-gray-300 text-sm">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>{" "}
            &rsaquo;{" "}
            <Link
              href="/services/used-power-plants"
              className="hover:text-brand transition-colors"
            >
              Used Power Plants
            </Link>{" "}
            &rsaquo; {gen.name}
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left — gallery + full details */}
            <div className="lg:col-span-2 space-y-10">
              <GeneratorGallery images={gen.images} name={gen.name} />

              {/* Specifications table */}
              <div>
                <h2 className="font-heading font-bold text-2xl text-charcoal uppercase mb-4">
                  Product Details
                </h2>
                <div className="border border-gray-border rounded-lg overflow-hidden">
                  {specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`flex items-center px-5 py-3 ${
                        i % 2 === 0 ? "bg-gray-light" : "bg-white"
                      }`}
                    >
                      <span className="text-charcoal-mid text-sm w-36 flex-shrink-0">
                        {spec.label}:
                      </span>
                      <span className="font-semibold text-charcoal text-sm">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Condition */}
              {gen.condition && (
                <div>
                  <h2 className="font-heading font-bold text-2xl text-charcoal uppercase mb-3">
                    Condition
                  </h2>
                  <div className="bg-brand-light border border-brand rounded-lg px-5 py-4">
                    <p className="text-charcoal text-sm font-semibold leading-relaxed">
                      {gen.condition}
                    </p>
                  </div>
                </div>
              )}

              {/* Description */}
              {gen.description && (
                <div>
                  <h2 className="font-heading font-bold text-2xl text-charcoal uppercase mb-3">
                    Description
                  </h2>
                  <div className="bg-gray-light rounded-lg px-5 py-4">
                    {gen.description.split("\n").map((line, i) =>
                      line.trim() === "" ? (
                        <br key={i} />
                      ) : (
                        <p key={i} className="text-charcoal-mid text-sm leading-relaxed">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Scope of Delivery */}
              {gen.scopeOfDelivery && gen.scopeOfDelivery.length > 0 && (
                <div>
                  <h2 className="font-heading font-bold text-2xl text-charcoal uppercase mb-4">
                    Scope of Delivery
                  </h2>
                  <ul className="space-y-2">
                    {gen.scopeOfDelivery.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="text-brand flex-shrink-0" size={18} />
                        <span className="text-charcoal-mid text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right — enquiry form */}
            <div className="lg:col-span-1">
              <div className="bg-gray-light rounded-lg p-6 border border-gray-border sticky top-24">
                <h2 className="font-heading font-bold text-xl text-charcoal uppercase mb-1">
                  Enquire About This Unit
                </h2>
                <p className="text-charcoal-mid text-sm mb-5 leading-relaxed">
                  Interested in the {gen.name}? Fill in the form and our team
                  will get back to you promptly.
                </p>
                <EnquiryForm productName={gen.name} />
                <div className="mt-6 pt-5 border-t border-gray-border space-y-1">
                  <p className="text-xs text-charcoal-mid font-semibold uppercase tracking-wide mb-2">
                    Or call us directly
                  </p>
                  <p className="text-charcoal font-semibold text-sm">+92 324 8420096</p>
                  <p className="text-charcoal font-semibold text-sm">+92 334 2560701</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="bg-gray-light py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/services/used-power-plants"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:underline"
          >
            ← View All Available Generators
          </Link>
        </div>
      </section>
    </>
  );
}
