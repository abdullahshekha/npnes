"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { href: "/services/power-plant-services", label: "Power Plant Services" },
  { href: "/services/amc", label: "Annual Maintenance Contract" },
  { href: "/services/operation-maintenance", label: "Operation & Maintenance" },
  { href: "/services/engine-overhauling", label: "Engine Overhauling" },
  { href: "/services/electrical-switchgear", label: "Electrical & Switchgear" },
  { href: "/services/electronic-repairs", label: "Electronic Repairs" },
  { href: "/services/used-power-plants", label: "Used Power Plants" },
  { href: "/services/emissions-analysis", label: "Emissions Analysis" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/spare-parts", label: "Spare Parts" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const isServicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/npnes-logo.jpg"
            alt="NPNES — Net Power & Energy Solutions"
            width={180}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Home */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors duration-200 ${
              isActive("/") ? "text-brand border-b-2 border-brand pb-0.5" : "text-charcoal hover:text-brand"
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors duration-200 ${
              isActive("/about") ? "text-brand border-b-2 border-brand pb-0.5" : "text-charcoal hover:text-brand"
            }`}
          >
            About
          </Link>

          {/* Services with dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                isServicesActive ? "text-brand border-b-2 border-brand pb-0.5" : "text-charcoal hover:text-brand"
              }`}
            >
              Services
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            {/* Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-border py-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150">
              <Link
                href="/services"
                className="block px-4 py-2 text-xs font-heading font-bold uppercase text-brand tracking-wide border-b border-gray-border mb-1"
              >
                All Services
              </Link>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-charcoal-mid hover:text-brand hover:bg-gray-light transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Spare Parts */}
          <Link
            href="/spare-parts"
            className={`text-sm font-medium transition-colors duration-200 ${
              isActive("/spare-parts") ? "text-brand border-b-2 border-brand pb-0.5" : "text-charcoal hover:text-brand"
            }`}
          >
            Spare Parts
          </Link>

          <Link
            href="/contact"
            className="ml-2 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-border px-4 py-4 flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`text-sm font-medium py-3 border-b border-gray-border transition-colors ${
              isActive("/") ? "text-brand" : "text-charcoal hover:text-brand"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className={`text-sm font-medium py-3 border-b border-gray-border transition-colors ${
              isActive("/about") ? "text-brand" : "text-charcoal hover:text-brand"
            }`}
          >
            About
          </Link>

          {/* Services toggle */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`w-full flex items-center justify-between text-sm font-medium py-3 border-b border-gray-border transition-colors ${
                isServicesActive ? "text-brand" : "text-charcoal hover:text-brand"
              }`}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="pl-4 pb-2 flex flex-col gap-1">
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-heading font-bold uppercase text-brand py-2"
                >
                  All Services
                </Link>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-charcoal-mid hover:text-brand py-1.5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/spare-parts"
            onClick={() => setMobileOpen(false)}
            className={`text-sm font-medium py-3 border-b border-gray-border transition-colors ${
              isActive("/spare-parts") ? "text-brand" : "text-charcoal hover:text-brand"
            }`}
          >
            Spare Parts
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-full text-center transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
