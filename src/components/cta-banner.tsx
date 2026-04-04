import { ArrowRight, Phone } from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { toTel } from "@/lib/business";

export function CtaBanner() {
  return (
    <section className="section-shell py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-xl bg-primary p-8 shadow-xl shadow-primary/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" aria-hidden="true" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/80">
                Ready to Get Started?
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl">
                Call now for faster scheduling, or request a free quote in under a minute.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                {brand.name} is standing by to help with your {brand.category.toLowerCase()} needs. Same-day appointments available.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={toTel(business.phone)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                <Phone className="size-4" />
                {business.phone}
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Get Free Quote
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
