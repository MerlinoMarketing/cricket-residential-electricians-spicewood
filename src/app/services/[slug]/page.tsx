import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { business } from "@/config/business";
import { renderServiceIcon, toTel } from "@/lib/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} — ${brand.name}`,
    description: `${service.description} Professional ${service.name.toLowerCase()} by ${brand.name}. Call ${business.phone} for a free estimate.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-b border-gray-200 pb-16 pt-32 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
            >
              <ArrowLeft className="size-4" />
              All Services
            </Link>
            <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex size-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {renderServiceIcon(service.icon, "size-7")}
                </div>
                <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {service.name}
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:pt-10">
                <Button
                  render={
                    <a href={toTel(business.phone)} className="min-h-12 rounded-full px-6 text-base" />
                  }
                  className="rounded-full bg-primary px-6 text-white hover:bg-primary/90"
                >
                  <Phone className="size-4" />
                  Call {business.phone}
                </Button>
                <Button
                  render={
                    <Link href="/contact" className="min-h-12 rounded-full px-6 text-base" />
                  }
                  variant="outline"
                  className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Request Free Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
              <div className="space-y-10">
                {/* Long description */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Why choose {brand.name} for {service.name.toLowerCase()}?
                  </h2>
                  <p className="text-base leading-8 text-gray-600">
                    {service.longDescription}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">What you can expect</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                        <span className="text-sm leading-7 text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ */}
                {service.faq.length > 0 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Frequently asked questions
                    </h3>
                    {service.faq.map((item) => (
                      <div key={item.question} className="dotted-card rounded-xl bg-white p-5">
                        <h4 className="text-base font-semibold text-gray-900">
                          {item.question}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-gray-600">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="dotted-card rounded-xl bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    Quick Facts
                  </p>
                  <dl className="mt-4 space-y-4">
                    {[
                      { label: "Experience", value: `${brand.yearsInBusiness}+ years` },
                      { label: "Rating", value: `${business.rating}/5 (${business.reviewCount}+ reviews)` },
                      { label: "Licensing", value: brand.license },
                      { label: "Coverage", value: brand.insurance },
                      { label: "Hours", value: business.hours },
                    ].map(({ label, value }) => (
                      <div key={label} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                        <dt className="text-xs uppercase tracking-[0.2em] text-gray-400">{label}</dt>
                        <dd className="mt-1 text-sm font-medium text-gray-700">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-xl bg-primary p-6 text-white">
                  <p className="text-lg font-semibold">Need {service.name.toLowerCase()}?</p>
                  <p className="mt-2 text-sm leading-7 text-white/80">
                    Call now for same-day service or request a free estimate online.
                  </p>
                  <a
                    href={toTel(business.phone)}
                    className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                  >
                    <Phone className="size-4" />
                    {business.phone}
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Other services */}
        {otherServices.length > 0 && (
          <section className="section-shell border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold text-gray-900">Other services we offer</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-dashed border-gray-200 bg-white p-4 transition hover:border-primary/30"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {renderServiceIcon(s.icon)}
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {s.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
