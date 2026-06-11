import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Eye,
  Heart,
  Search,
  Layers,
  Wrench,
  Settings,
  Package,
  Zap,
  BarChart2,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — NPNES",
  description:
    "Learn about Net Power & Energy Solutions — our vision, principles and areas of activity.",
};

const activities = [
  { n: 1, icon: Search, label: "System Studies & Consultancy Services" },
  { n: 2, icon: Layers, label: "EPC & Turnkey Solutions" },
  { n: 3, icon: Zap, label: "Installations, Testing & Commissioning" },
  { n: 4, icon: Settings, label: "Operation & Maintenance (O&M) / AMC" },
  { n: 5, icon: BookOpen, label: "Trouble Shooting" },
  { n: 6, icon: Wrench, label: "Engine Overhauling & Routine Maintenance" },
  { n: 7, icon: BarChart2, label: "Product Support" },
  { n: 8, icon: ShoppingCart, label: "Supply of Used Power Plants" },
  { n: 9, icon: Package, label: "Supply of Spare Parts" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative flex items-center justify-center py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
            Who We Are
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl uppercase">About NPNES</h1>
          <p className="mt-3 text-gray-300 text-sm">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>{" "}
            &rsaquo; About
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
            Leadership
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase mb-8">
            CEO Message
          </h2>
          <blockquote className="border-l-4 border-brand pl-6 text-charcoal-mid leading-8 text-base">
            <p>
              I am extremely proud of what we are going to achieve, and even more excited about our
              outlook for an equally promising future business from across the world while earning
              our clients&apos; trust along the way. It is satisfying to know that we are able to
              help our clients build the strategic plan that enable them to connect and operate
              critical aspects of their business more efficiently and economically.
            </p>
            <p className="mt-4">
              Customer satisfaction is the hallmark by which we measure our performance, and we hold
              ourselves, as do our clients to the highest standards of quality. In this evolving
              marketplace, our clients are more informed than ever about their solutions provider
              options. Even so, they will select NPNES as their partner of choice because of our
              experience, commitment &amp; high quality services.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gray-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5 items-start">
            <div className="flex-shrink-0 w-14 h-14 bg-brand rounded-lg flex items-center justify-center">
              <Eye className="text-white" size={26} />
            </div>
            <div>
              <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-1">
                What Drives Us
              </p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase mb-4">
                Our Vision
              </h2>
              <p className="text-charcoal-mid leading-8">
                Striving to be a leader company in providing value added and reliable services, as
                well as contributing to the competitiveness and sustainable development of our valued
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5 items-start">
            <div className="flex-shrink-0 w-14 h-14 bg-brand rounded-lg flex items-center justify-center">
              <Heart className="text-white" size={26} />
            </div>
            <div>
              <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-1">
                How We Work
              </p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase mb-2">
                Our Principles
              </h2>
              <h3 className="font-heading font-semibold text-2xl text-brand uppercase mb-4">
                Customer Focus
              </h3>
              <p className="text-charcoal-mid leading-8">
                Not losing customer focus and prioritizing customer focus at all time. Sincere, open
                and honest dialogue with our valued customers and partners as well as our colleagues.
                Our Service Department is staffed with factory trained technical persons to provide
                emergency repairs. Our dedicated field service teams are at your site whenever you
                need us, working for you around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Areas of Activity */}
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading font-semibold uppercase text-brand tracking-widest text-sm mb-2">
              What We Cover
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal uppercase">
              Areas of Activity
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.n}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-border flex gap-4 items-start"
                >
                  <span className="font-heading font-bold text-3xl text-brand leading-none w-8 flex-shrink-0">
                    {String(a.n).padStart(2, "0")}
                  </span>
                  <div>
                    <Icon className="text-charcoal-mid mb-2" size={20} />
                    <p className="font-heading font-bold text-base text-charcoal uppercase">
                      {a.label}
                    </p>
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
            Partner With Us
          </h2>
          <p className="text-white/90 mb-6">
            Discover how NPNES can support your power plant operations.
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
