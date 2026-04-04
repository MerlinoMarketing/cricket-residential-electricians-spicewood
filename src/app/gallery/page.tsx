import type { Metadata } from "next";
import { Zap } from "lucide-react";

import { business } from "@/config/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { CtaBanner } from "@/components/cta-banner";
import { Breadcrumb, getBreadcrumbSchema } from "@/components/breadcrumb";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: `Project Gallery | ${business.name} — Electrical Work in ${business.city}`,
  description: `Browse completed residential electrical projects by ${business.name} in ${business.city}, ${business.state}. Panel upgrades, lighting, generators, and more.`,
  alternates: { canonical: `${business.website}/gallery` },
};

const projects = [
  {
    title: "200-Amp Panel Upgrade",
    category: "Panel Upgrades",
    description: "Replaced an outdated 100-amp panel with a modern 200-amp breaker panel. Added whole-home surge protection and clearly labeled every circuit for the homeowner.",
    location: business.city,
  },
  {
    title: "Smart Home Lighting System",
    category: "Lighting Installation",
    description: "Full smart lighting retrofit with Lutron Caseta dimmers throughout the home. Integrated with voice assistants and automated scheduling for Texas Hill Country living.",
    location: business.city,
  },
  {
    title: "Whole-Home Standby Generator",
    category: "Generator Installation",
    description: "20kW Generac generator installation with automatic transfer switch. Critical for Texas Hill Country homes where extended outages during severe storms are common.",
    location: business.city,
  },
  {
    title: "Pool Equipment Electrical",
    category: "Electrical Repair",
    description: "Rewired pool pump, heater, and lighting circuits to current code. Installed proper GFCI protection and bonding per NEC requirements for swimming pool electrical.",
    location: business.city,
  },
  {
    title: "EV Charger Installation",
    category: "Electrical Repair",
    description: "Installed a 48-amp ChargePoint home EV charger in the garage. Required a dedicated 60-amp circuit from the panel with heat-rated conduit for the Texas climate.",
    location: business.city,
  },
  {
    title: "Attic Fan & Ventilation Wiring",
    category: "Emergency Electrical",
    description: "Wired two solar-powered attic fans with thermostat controls to reduce cooling costs. Texas attics can exceed 150 degrees in summer -- proper ventilation cuts AC load significantly.",
    location: business.city,
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-shell" aria-labelledby="gallery-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Gallery" }]} />

            <SectionHeading
              eyebrow="Project Gallery"
              title={`Recent residential electrical projects in ${business.city}.`}
              description={`Browse a selection of completed projects by ${business.name}. Every job is completed to code and backed by our workmanship warranty.`}
              align="center"
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="service-card group rounded-[2rem] border border-gray-200 bg-white p-6">
                  <div className="flex h-full flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                        <Zap className="size-3" />
                        {project.category}
                      </span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-sm leading-7 text-gray-500">{project.description}</p>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-xs text-gray-400">{project.location}, {business.state}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ label: "Gallery", href: "/gallery" }])) }}
      />
    </>
  );
}
