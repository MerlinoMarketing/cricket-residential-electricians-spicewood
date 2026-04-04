import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { locations } from "@/config/locations";
import { formatAddress, toTel } from "@/lib/business";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-gray-50" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:px-8">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title={`Request a free estimate from ${brand.name}.`}
            description="Ready to get started? Give us a call or fill out the form and we will get back to you promptly."
          />

          <form
            className="reveal grid gap-4 rounded-xl border border-dashed border-gray-200 bg-white p-6 sm:grid-cols-2"
            action="#"
            method="post"
          >
            <label className="space-y-2 text-sm text-gray-700">
              <span>Name</span>
              <input
                type="text"
                name="name"
                className="min-h-12 w-full rounded-md border border-gray-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm text-gray-700">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                className="min-h-12 w-full rounded-md border border-gray-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
                placeholder="Best callback number"
              />
            </label>
            <label className="space-y-2 text-sm text-gray-700 sm:col-span-2">
              <span>Email</span>
              <input
                type="email"
                name="email"
                className="min-h-12 w-full rounded-md border border-gray-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
                placeholder="you@example.com"
              />
            </label>
            <label className="space-y-2 text-sm text-gray-700 sm:col-span-2">
              <span>How can we help?</span>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
                placeholder="Describe the issue, service need, or project scope."
              />
            </label>
            <div className="sm:col-span-2">
              <Button className="min-h-12 w-full rounded-full bg-primary px-6 text-base text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 sm:w-auto">
                Get Free Quote
              </Button>
            </div>
          </form>
        </div>

        <aside className="space-y-5">
          <div className="reveal dotted-card rounded-xl bg-white p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Contact Info</p>
            <div className="mt-5 space-y-5">
              {[
                { icon: Phone, label: "Phone", value: business.phone, href: toTel(business.phone) },
                { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
                { icon: MapPin, label: "Address", value: formatAddress(), href: business.mapUrl },
                { icon: Clock3, label: "Hours", value: business.hours, href: business.mapUrl },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex min-h-12 items-start gap-4 rounded-md border border-dashed border-gray-100 px-4 py-4 transition hover:border-primary/30 hover:bg-gray-50"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-4.5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-gray-700">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-xl border border-dashed border-gray-200 bg-white">
            <div className="flex min-h-[280px] items-end bg-gray-100 p-6">
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-primary">
                  Multiple Locations
                </p>
                <p className="mt-3 max-w-xs text-base leading-7 text-gray-600">
                  We serve {locations.length} regions. Visit our{" "}
                  <Link href="/locations" className="text-primary hover:underline">
                    locations page
                  </Link>{" "}
                  to find your nearest team.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
