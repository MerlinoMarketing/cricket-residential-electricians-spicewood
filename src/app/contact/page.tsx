import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { business } from "@/config/business";
import { formatAddress, toTel } from "@/lib/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { Breadcrumb, getBreadcrumbSchema } from "@/components/breadcrumb";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Contact ${business.name} | Free Estimates in ${business.city}, ${business.state}`,
  description: `Contact ${business.name} for a free electrical estimate. Call ${business.phone} or fill out our form. Serving ${business.city} and surrounding areas.`,
  alternates: { canonical: `${business.website}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-shell" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Contact" }]} />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
              <div className="space-y-8">
                <SectionHeading
                  eyebrow="Get In Touch"
                  title={`Request a free estimate from ${business.name}.`}
                  description="Ready to get started? Give us a call or fill out the form below and we'll get back to you promptly."
                />

                <form
                  className="reveal grid gap-4 rounded-[2rem] border border-gray-200 bg-white p-6 sm:grid-cols-2"
                  action="#"
                  method="post"
                >
                  <label className="space-y-2 text-sm text-gray-700">
                    <span>Name</span>
                    <input type="text" name="name" className="min-h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none" placeholder="Your name" />
                  </label>
                  <label className="space-y-2 text-sm text-gray-700">
                    <span>Phone</span>
                    <input type="tel" name="phone" className="min-h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none" placeholder="Best callback number" />
                  </label>
                  <label className="space-y-2 text-sm text-gray-700 sm:col-span-2">
                    <span>Email</span>
                    <input type="email" name="email" className="min-h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none" placeholder="you@example.com" />
                  </label>
                  <label className="space-y-2 text-sm text-gray-700 sm:col-span-2">
                    <span>How can we help?</span>
                    <textarea name="message" rows={5} className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none" placeholder="Describe the issue, service need, or project scope." />
                  </label>
                  <div className="sm:col-span-2">
                    <Button className="min-h-12 w-full rounded-full bg-primary px-6 text-base text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 sm:w-auto">
                      Get Free Quote
                    </Button>
                  </div>
                </form>
              </div>

              <aside className="space-y-5">
                <div className="reveal rounded-[2rem] border border-gray-200 bg-white p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">Contact Info</p>
                  <div className="mt-5 space-y-5">
                    {[
                      { icon: Phone, label: "Phone", value: business.phone, href: toTel(business.phone) },
                      { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
                      { icon: MapPin, label: "Address", value: formatAddress(), href: business.mapUrl },
                      { icon: Clock3, label: "Hours", value: business.hours, href: business.mapUrl },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <a key={label} href={href} className="flex min-h-12 items-start gap-4 rounded-2xl border border-gray-100 px-4 py-4 transition hover:border-primary/30 hover:bg-gray-50">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
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

                <div className="reveal overflow-hidden rounded-[2rem] border border-gray-200 bg-white">
                  <iframe
                    title={`${business.name} location on Google Maps`}
                    src={`https://www.google.com/maps?q=${business.coordinates.lat},${business.coordinates.lng}&z=14&output=embed`}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([{ label: "Contact", href: "/contact" }])),
        }}
      />
    </>
  );
}
