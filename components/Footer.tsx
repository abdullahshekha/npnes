import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/spare-parts", label: "Spare Parts" },
  { href: "/clients", label: "Our Clients" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/power-plant-services", label: "Power Plant Services" },
  { href: "/services/amc", label: "Annual Maintenance Contract" },
  { href: "/services/operation-maintenance", label: "Operation & Maintenance" },
  { href: "/services/engine-overhauling", label: "Engine Overhauling" },
  { href: "/services/electrical-switchgear", label: "Electrical & Switchgear" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Image
            src="/images/npnes-logo.jpg"
            alt="NPNES Logo"
            width={160}
            height={44}
            className="h-10 w-auto object-contain mb-3 brightness-0 invert"
          />
          <p className="text-sm text-brand font-heading font-semibold uppercase tracking-widest mb-6">
            Energy · Efficiency · Sustainability
          </p>
          <h3 className="font-heading font-bold text-sm uppercase tracking-wide mb-3 text-gray-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-300 hover:text-brand transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-4 text-white">
            Our Services
          </h3>
          <ul className="space-y-2">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-300 hover:text-brand transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-4 text-white">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-gray-300">
              <MapPin size={16} className="text-brand mt-0.5 flex-shrink-0" />
              <span>
                Plot # ST-38, Ground Floor, K.E.S.C Co-Operative Housing Society,
                Sector 34-A, K.D.A, Scheme-33, Karachi.
              </span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300">
              <Phone size={16} className="text-brand mt-0.5 flex-shrink-0" />
              <span>+92 324 8420096 / +92 334 2560701</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300">
              <Mail size={16} className="text-brand mt-0.5 flex-shrink-0" />
              <a href="mailto:info@npnes.com" className="hover:text-brand transition-colors">
                info@npnes.com
              </a>
            </li>
            <li className="flex gap-3 text-sm text-gray-300">
              <Globe size={16} className="text-brand mt-0.5 flex-shrink-0" />
              <span>www.npnes.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="text-center text-xs text-gray-400">
          © {year} Net Power &amp; Energy Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
