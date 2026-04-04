import { Award, Phone, ShieldCheck, Star, TimerReset, Zap } from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { toTel } from "@/lib/business";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-gray-200 pt-28 sm:pt-32"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${brand.heroImage})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0.88)_50%,rgba(249,250,251,0.98)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,82,118,0.06),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-end px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
          <div className="space-y-8">
            <div className="reveal space-y-5">
              <div className="flex flex-wrap gap-3">
                <Badge className="h-8 rounded-full bg-primary/10 px-3 text-primary ring-1 ring-inset ring-primary/20">
                  <TimerReset className="size-3.5" />
                  {brand.emergencyLabel}
                </Badge>
                <Badge className="h-8 rounded-full bg-accent/10 px-3 text-accent ring-1 ring-inset ring-accent/20">
                  <Zap className="size-3.5" />
                  {brand.turnaroundLabel}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="inline-flex items-center gap-2 rounded-md border border-dashed border-gray-200 bg-white/80 px-3 py-2 backdrop-blur-sm">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-gray-900">{business.rating}</span>
                  <span className="text-gray-500">
                    from {business.reviewCount}+ local reviews
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 text-gray-500">
                  <ShieldCheck className="size-4 text-primary" />
                  Licensed, insured, and locally trusted
                </div>
              </div>

              <h1
                id="hero-heading"
                className="max-w-4xl text-balance font-heading text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
              >
                {brand.name}
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-gray-600 sm:text-xl">
                {brand.tagline}. Serving Texas homeowners since {brand.founded} with expert
                electrical work you can count on.
              </p>
            </div>

            <div className="reveal flex flex-col gap-4 sm:flex-row">
              <Button
                render={
                  <a
                    href={toTel(business.phone)}
                    className="min-h-12 rounded-full px-6 text-base"
                  />
                }
                size="lg"
                className="rounded-full bg-primary px-6 text-base text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                <Phone className="size-4.5" />
                Call Now
              </Button>
              <Button
                render={
                  <a
                    href="/contact"
                    className="min-h-12 rounded-full px-6 text-base"
                  />
                }
                size="lg"
                variant="outline"
                className="rounded-full border-gray-300 bg-white/80 px-6 text-base text-gray-900 backdrop-blur-sm hover:bg-gray-50"
              >
                Get Free Quote
              </Button>
            </div>

            <div className="reveal grid gap-4 sm:grid-cols-3">
              {[
                `${brand.yearsInBusiness}+ years of experience`,
                brand.license,
                brand.insurance,
              ].map((item) => (
                <div
                  key={item}
                  className="stat-card rounded-md border border-dashed border-gray-200 bg-white/80 px-4 py-5 backdrop-blur-sm"
                >
                  <p className="text-sm font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="reveal lg:justify-self-end">
            <div className="max-w-md rounded-xl border border-dashed border-gray-200 bg-white/90 p-6 shadow-xl shadow-gray-900/[0.04] backdrop-blur-sm sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Why homeowners call first
              </p>
              <div className="mt-5 space-y-4">
                {[
                  {
                    icon: Award,
                    title: "Transparent pricing",
                    copy: "Clear scopes, upfront estimates, and no pressure when you request a quote.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Vetted professionals",
                    copy: "Every job is handled by licensed, insured technicians with verified credentials.",
                  },
                  {
                    icon: Star,
                    title: "Proven reputation",
                    copy: `Rated ${business.rating}/5 by ${business.reviewCount}+ homeowners who trust our work.`,
                  },
                ].map(({ icon: Icon, title, copy }) => (
                  <article
                    key={title}
                    className="rounded-md border border-dashed border-gray-100 bg-gray-50/80 p-4 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/[0.03]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div className="space-y-2">
                        <h2 className="font-heading text-lg font-semibold text-gray-900">{title}</h2>
                        <p className="text-sm leading-6 text-gray-500">{copy}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
