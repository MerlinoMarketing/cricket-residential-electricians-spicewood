"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { business } from "@/config/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { CtaBanner } from "@/components/cta-banner";
import { Breadcrumb, getBreadcrumbSchema } from "@/components/breadcrumb";
import { SectionHeading } from "@/components/section-heading";

const faqItems = [
  {
    question: `What areas does ${business.name} serve?`,
    answer: `We proudly serve ${business.serviceAreas.join(", ")}. Contact us to confirm availability in your specific location.`,
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes. ${business.name} is ${business.license.toLowerCase()} and ${business.insurance.toLowerCase()}. We carry full liability and workers' compensation coverage for your protection.`,
  },
  {
    question: "Do you offer free estimates?",
    answer: `Absolutely. We provide free, no-obligation estimates for all electrical services. Call ${business.phone} or fill out our online form to get started.`,
  },
  {
    question: "Do you offer emergency electrical services?",
    answer: `Yes, we offer ${business.emergencyLabel.toLowerCase()}. Call ${business.phone} anytime for immediate assistance with power outages, sparking outlets, or other electrical emergencies.`,
  },
  {
    question: "How quickly can you respond?",
    answer: `We offer ${business.turnaroundLabel.toLowerCase()} for most requests. Emergency situations are prioritized for the fastest possible response.`,
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, checks, and cash. Financing options are available for larger projects. We provide transparent pricing with no hidden fees.",
  },
  {
    question: "How do I know if my electrical panel needs an upgrade?",
    answer: "Signs include frequently tripping breakers, flickering lights, a panel that feels warm to the touch, or a home older than 25 years that still has the original panel. Texas heat puts extra stress on electrical systems, making regular assessments important.",
  },
  {
    question: "Do you pull permits for electrical work?",
    answer: "Yes. All work that requires a permit is properly permitted and inspected. We handle the entire permitting process so you don't have to worry about code compliance.",
  },
  {
    question: "Can you install EV charger stations?",
    answer: "Absolutely. We install Level 2 EV charging stations for all major electric vehicle brands. This includes the dedicated 240V circuit, proper breaker sizing, and weatherproof outdoor installations rated for Texas conditions.",
  },
  {
    question: "Does Texas heat affect my home's electrical system?",
    answer: "Yes. Texas heat can accelerate wire insulation degradation, cause thermal expansion in connections, and overwork AC systems. Regular electrical inspections help catch heat-related damage before it becomes a safety hazard.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes. All our electrical work comes with a workmanship warranty. Additionally, any products or equipment we install carry the manufacturer's warranty. We stand behind every job.",
  },
  {
    question: "Is it safe to use my home's electricity if I smell burning near an outlet?",
    answer: "No. A burning smell near an outlet or switch is a serious warning sign. Turn off the circuit at the breaker panel and call us immediately. This could indicate a loose connection, overloaded circuit, or damaged wiring that poses a fire risk.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-shell" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "FAQ" }]} />

            <SectionHeading
              eyebrow="FAQ"
              title="Common questions, straight answers."
              description={`Everything you need to know about working with ${business.name} and electrical services in ${business.city}.`}
              align="center"
            />

            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div key={item.question} className="reveal rounded-[1.75rem] border border-gray-200 bg-white">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-base font-semibold text-gray-900">{item.question}</span>
                    <ChevronDown className={["size-5 shrink-0 text-gray-400 transition-transform duration-200", openIndex === index ? "rotate-180" : ""].join(" ")} />
                  </button>
                  <div className={["overflow-hidden transition-all duration-200", openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"].join(" ")}>
                    <p className="px-6 pb-5 text-sm leading-7 text-gray-600">{item.answer}</p>
                  </div>
                </div>
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([{ label: "FAQ", href: "/faq" }])),
        }}
      />
    </>
  );
}
