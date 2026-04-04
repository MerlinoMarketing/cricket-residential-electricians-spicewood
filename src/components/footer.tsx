import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Star } from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { services } from "@/config/services";
import { locations } from "@/config/locations";
import { isUsableHref, toTel } from "@/lib/business";

export function Footer() {
  const socialLinks = [
    { href: brand.socialLinks.facebook, label: "Facebook", icon: Facebook },
    { href: brand.socialLinks.instagram, label: "Instagram", icon: Instagram },
    { href: brand.socialLinks.google, label: "Google Business Profile", icon: MapPin },
  ].filter(({ href }) => isUsableHref(href));

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.8fr))] lg:px-8">
        {/* Brand */}
        <div className="space-y-5">
          <Link href="/" className="inline-block">
            <span className="block font-heading text-xl font-semibold tracking-[0.18em] text-gray-900">
              {brand.name}
            </span>
            <span className="block text-xs uppercase tracking-[0.3em] text-gray-400">
              {brand.category}
            </span>
          </Link>
          <p className="max-w-md text-sm leading-7 text-gray-500">
            Professional residential electrician services across Texas.
            Licensed, insured, and committed to quality workmanship since {brand.founded}.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <a
              href={toTel(business.phone)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-200 px-4 hover:bg-white"
            >
              <Phone className="size-4 text-primary" />
              {business.phone}
            </a>
            <div className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-200 px-4">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              {business.rating} rating
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Services
          </p>
          <div className="mt-4 space-y-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block min-h-11 py-2 text-sm capitalize text-gray-500 transition hover:text-gray-900"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Locations
          </p>
          <div className="mt-4 space-y-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
              >
                <MapPin className="size-3.5 text-gray-400" />
                {loc.city}, {loc.stateAbbr}
              </Link>
            ))}
          </div>
        </div>

        {/* Connect + Pages */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Company
          </p>
          <div className="mt-4 space-y-3">
            {[
              { label: "About", href: "/about" },
              { label: "Reviews", href: "/reviews" },
              { label: "Blog", href: "/blog" },
              { label: "Pricing", href: "/pricing" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {socialLinks.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-white hover:text-gray-700"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-gray-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>
            {brand.license} &middot; {brand.insurance}
          </p>
        </div>
      </div>
    </footer>
  );
}
