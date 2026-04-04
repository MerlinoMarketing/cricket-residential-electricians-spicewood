import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { getServiceIcon } from "@/lib/business";
import { SectionHeading } from "@/components/section-heading";

export function Services() {
  return (
    <section id="services" className="section-shell" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={`Professional ${brand.category.toLowerCase()} services you can count on.`}
          description="We provide a full range of residential electrical solutions for homeowners across all of our service locations."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon);

            return (
              <Link
                key={service.name}
                href={`/services/${service.slug}`}
                className="reveal service-card group rounded-md border-gray-200 bg-white p-6"
              >
                <div className="flex h-full flex-col justify-between gap-10">
                  <div className="space-y-5">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary/15">
                      <Icon className="size-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-gray-900">{service.name}</h3>
                      <p className="max-w-xl text-sm leading-7 text-gray-500">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-dashed border-gray-100 pt-5 text-sm text-gray-600">
                    <span>Learn more</span>
                    <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
