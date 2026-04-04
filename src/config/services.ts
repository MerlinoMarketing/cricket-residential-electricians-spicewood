export type ServiceIcon =
  | "wrench"
  | "shield"
  | "home"
  | "zap"
  | "clock"
  | "check";

export interface Service {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: ServiceIcon;
  benefits: string[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    name: "Electrical Panel Upgrade",
    slug: "electrical-panel-upgrade",
    description:
      "Upgrade your electrical panel to handle modern power demands safely. Essential for home additions, EV chargers, and aging systems that need to meet current code.",
    longDescription:
      "An outdated electrical panel is more than an inconvenience -- it is a safety liability. We replace Federal Pacific, Zinsco, and undersized panels with modern 200-amp or 400-amp load centers that support today's appliances, EV chargers, home offices, and smart-home systems. Every upgrade includes a full load calculation, utility coordination, and post-installation inspection to ensure your home's electrical backbone is ready for the next decade of demand.",
    icon: "zap",
    benefits: [
      "Full load calculation before every upgrade",
      "200-amp and 400-amp panel options available",
      "Utility coordination and permit handling included",
      "Whole-home surge protection included with every upgrade",
      "Post-install inspection and certificate of completion",
      "Financing options available for qualifying homeowners",
    ],
    faq: [
      {
        question: "How long does a panel upgrade take?",
        answer:
          "Most residential panel upgrades are completed in a single day, typically six to eight hours. If your home requires a meter upgrade through the utility company, we coordinate that process for you so there is no confusion.",
      },
      {
        question: "Will my power be off during the upgrade?",
        answer:
          "Yes, power is disconnected during the panel swap. We schedule strategically and work efficiently to minimize downtime, usually four to six hours of actual power-off time.",
      },
      {
        question: "How do I know if my panel needs upgrading?",
        answer:
          "Common signs include frequently tripping breakers, a panel manufactured by Federal Pacific or Zinsco, a fuse box instead of circuit breakers, or a 100-amp panel in a home with modern appliance loads. We offer free assessments to determine your needs.",
      },
    ],
  },
  {
    name: "Outlet Installation",
    slug: "outlet-installation",
    description:
      "Professional outlet installation, replacement, and upgrades including GFCI outlets, USB outlets, and dedicated circuits for heavy appliances.",
    longDescription:
      "Whether you need additional outlets in a renovation, GFCI protection in kitchens and bathrooms, or dedicated circuits for heavy-draw appliances, our electricians install every outlet to code with clean, concealed wiring. We handle everything from standard duplex receptacles to specialty 240V outlets for dryers and ranges, and we always test polarity and grounding before completing the job.",
    icon: "wrench",
    benefits: [
      "GFCI and AFCI outlets installed to current NEC standards",
      "USB-integrated outlets for convenient device charging",
      "Dedicated 240V outlets for dryers, ranges, and workshops",
      "Tamper-resistant outlets for homes with children",
      "Clean installation with minimal wall disruption",
      "All outlets tested for proper polarity and grounding",
    ],
    faq: [
      {
        question: "How much does it cost to add a new outlet?",
        answer:
          "Standard outlet installation typically ranges from $150 to $350 depending on wiring accessibility and whether a new circuit is required. We provide an exact quote before any work begins.",
      },
      {
        question: "Do I need GFCI outlets in my kitchen and bathroom?",
        answer:
          "Yes. NEC code requires GFCI protection within six feet of any water source, including kitchens, bathrooms, laundry rooms, garages, and outdoor locations. We can upgrade your existing outlets to GFCI if they are not already protected.",
      },
      {
        question: "Can you add outlets without tearing up my walls?",
        answer:
          "In most cases, yes. We use remodel-style boxes and fish wiring through existing wall cavities to minimize drywall disruption. For finished basements or concrete walls, surface-mounted conduit is an option as well.",
      },
    ],
  },
  {
    name: "Lighting Installation",
    slug: "lighting-installation",
    description:
      "Indoor and outdoor lighting design and installation including recessed lights, landscape lighting, under-cabinet lighting, and smart lighting systems.",
    longDescription:
      "The right lighting transforms how a space looks and feels. We install recessed LED downlights, under-cabinet task lighting, pendant fixtures, landscape path lights, security floodlights, and smart-controlled systems. Every installation starts with a lighting plan that balances aesthetics, function, and energy efficiency for your specific space. Whether you are renovating a single room or lighting an entire property, our team delivers professional results with clean wiring and no drywall patches.",
    icon: "home",
    benefits: [
      "Custom lighting plan tailored to your space",
      "Energy-efficient LED fixtures as standard",
      "Smart-home integration with Lutron, Hue, and others",
      "Indoor, outdoor, and landscape lighting options",
      "Dimmer and scene control setup included",
      "Clean installation with no drywall patches needed",
    ],
    faq: [
      {
        question: "Can you add recessed lights without major drywall work?",
        answer:
          "Yes. We use remodel-style housings that require only a small cutout per fixture. In most cases, there is no need for drywall patching or repainting after installation.",
      },
      {
        question: "Do you install smart lighting systems?",
        answer:
          "Absolutely. We set up systems compatible with Lutron Caseta, Philips Hue, and other platforms, including switch-level dimmers and app-based scene controls for whole-home automation.",
      },
      {
        question: "How much does recessed lighting cost per fixture?",
        answer:
          "Installed cost varies by fixture type and accessibility, but most standard LED recessed lights range from $150 to $250 per fixture installed, including the fixture, wiring, and switch.",
      },
    ],
  },
  {
    name: "Ceiling Fan Installation",
    slug: "ceiling-fan-installation",
    description:
      "Expert ceiling fan installation, replacement, and wiring. We handle mounting, wiring, and controls for any room in your home.",
    longDescription:
      "A properly installed ceiling fan improves comfort and reduces energy costs year-round. Our electricians handle every aspect of the installation, from reinforcing ceiling boxes and running new wiring to mounting the fan and programming remote or wall controls. We install fans in standard rooms, vaulted ceilings, covered patios, and anywhere else you need improved air circulation. If your home does not have existing wiring at the fan location, we can run new circuits without visible conduit in most cases.",
    icon: "home",
    benefits: [
      "Ceiling box reinforcement for safe, secure mounting",
      "New wiring run to locations without existing circuits",
      "Vaulted and angled ceiling installations available",
      "Remote control and wall switch setup included",
      "Outdoor-rated fans for covered patios and porches",
      "All existing wiring inspected during installation",
    ],
    faq: [
      {
        question: "Can you install a ceiling fan where there is only a light fixture?",
        answer:
          "Yes. We reinforce the ceiling box to support the fan weight and ensure the wiring can handle the fan motor. If your current box is light-fixture-only rated, we replace it with a fan-rated box.",
      },
      {
        question: "How long does a ceiling fan installation take?",
        answer:
          "A straightforward replacement takes about one to two hours. New installations where wiring needs to be run typically take two to four hours depending on accessibility.",
      },
      {
        question: "Do you install fans on vaulted ceilings?",
        answer:
          "Yes. We use angled mounting kits and extended downrods designed for vaulted and sloped ceilings. The fan is mounted securely and balanced properly regardless of ceiling angle.",
      },
    ],
  },
  {
    name: "Whole-House Rewiring",
    slug: "whole-house-rewiring",
    description:
      "Complete home rewiring for older homes with outdated, unsafe, or insufficient wiring. Bring your entire electrical system up to modern code.",
    longDescription:
      "Older homes with knob-and-tube, aluminum, or deteriorating wiring pose serious fire and safety risks. Our whole-house rewiring service replaces all outdated wiring with modern copper conductors, installs a new panel if needed, and brings every circuit up to current NEC standards. We work room by room to minimize disruption, protect your furnishings, and leave your walls with minimal patching. The result is a safe, efficient electrical system that supports modern loads and passes inspection with confidence.",
    icon: "shield",
    benefits: [
      "Complete replacement of knob-and-tube or aluminum wiring",
      "Modern copper conductors rated for current and future loads",
      "Room-by-room approach to minimize household disruption",
      "New panel installation included when needed",
      "GFCI and AFCI protection installed throughout the home",
      "Full inspection and certificate of compliance upon completion",
    ],
    faq: [
      {
        question: "How long does a whole-house rewire take?",
        answer:
          "A typical three-bedroom home takes five to seven business days. Larger homes or homes with complex layouts may take longer. We provide a detailed timeline before work begins.",
      },
      {
        question: "Do I need to move out during the rewiring?",
        answer:
          "In most cases, no. We work room by room and restore power to completed sections each day. There will be periods without power in specific areas, but we schedule to minimize inconvenience.",
      },
      {
        question: "How do I know if my home needs rewiring?",
        answer:
          "Signs include frequent breaker trips, discolored outlets, a burning smell near outlets or switches, two-prong outlets throughout the home, or wiring that is more than 40 years old. We offer a thorough inspection to assess your situation.",
      },
    ],
  },
  {
    name: "EV Charger Installation",
    slug: "ev-charger-installation",
    description:
      "Level 2 home EV charger installation for Tesla, ChargePoint, and all major electric vehicle brands. Dedicated circuits and panel upgrades available.",
    longDescription:
      "Charging your electric vehicle at home is the most convenient and cost-effective option, and a professionally installed Level 2 charger makes it fast and safe. We install Tesla Wall Connectors, ChargePoint Home Flex, JuiceBox, and all other major EV charger brands. Every installation includes a load calculation to determine whether your panel can handle the additional draw, a dedicated 240V circuit with the correct amperage, and proper mounting. If a panel upgrade is needed, we handle that as part of the project.",
    icon: "zap",
    benefits: [
      "Compatible with Tesla, ChargePoint, JuiceBox, and all brands",
      "Dedicated 240V circuit with proper amperage for fast charging",
      "Load calculation to verify panel capacity before installation",
      "Panel upgrade available if additional capacity is needed",
      "Indoor and outdoor mounting options with weatherproof wiring",
      "Permit acquisition and final inspection handled for you",
    ],
    faq: [
      {
        question: "Do I need a panel upgrade for an EV charger?",
        answer:
          "It depends on your current panel capacity. We perform a load calculation to determine whether your existing panel can handle the additional 40-50 amp draw. Many homes with 100-amp panels do need an upgrade.",
      },
      {
        question: "How long does EV charger installation take?",
        answer:
          "Most installations are completed in three to five hours, assuming no panel upgrade is needed. If a panel upgrade is required, the total project typically takes one full day.",
      },
      {
        question: "Can you install a charger outside?",
        answer:
          "Yes. We install outdoor-rated chargers with weatherproof wiring and proper GFCI protection. The charger and all connections are rated for exposure to rain, heat, and cold.",
      },
    ],
  },
  {
    name: "Generator Installation",
    slug: "generator-installation",
    description:
      "Whole-home standby generator installation with automatic transfer switches. Keep your home powered during storms, outages, and grid failures.",
    longDescription:
      "A standby generator keeps your home running when the grid goes down. We install Generac, Kohler, and Briggs and Stratton whole-home generators with automatic transfer switches that detect outages and restore power within seconds. From site evaluation and gas line coordination to electrical hookup and commissioning, we handle the entire process. Every installation includes a full load calculation to ensure proper sizing, a concrete pad, and all required permits and inspections.",
    icon: "check",
    benefits: [
      "Generac, Kohler, and Briggs and Stratton units available",
      "Automatic transfer switch included with every installation",
      "Gas line and electrical hookup managed start to finish",
      "Full load calculation for proper generator sizing",
      "Permit acquisition and final inspection included",
      "Maintenance plan options available after installation",
    ],
    faq: [
      {
        question: "What size generator do I need for my home?",
        answer:
          "It depends on what you want to power. A load calculation tells us exactly how many watts your essential circuits require. Most homes need a 16-24 kW unit for whole-home coverage.",
      },
      {
        question: "How long does generator installation take?",
        answer:
          "Typical installation takes one to two days: one day for the concrete pad, gas line, and electrical work, and a second day for startup, testing, and commissioning.",
      },
      {
        question: "Do I need a natural gas connection?",
        answer:
          "Natural gas is the most common fuel source, but propane-powered generators are also available for homes without gas service. We help determine the best option for your property.",
      },
    ],
  },
  {
    name: "Smoke Detector Installation",
    slug: "smoke-detector-installation",
    description:
      "Hardwired smoke and carbon monoxide detector installation, replacement, and testing. Ensure your family is protected with code-compliant detection systems.",
    longDescription:
      "Properly functioning smoke and carbon monoxide detectors are your first line of defense in an emergency. We install hardwired, interconnected detection systems that meet current NEC and local fire code requirements. When one detector sounds, they all sound, giving everyone in the home maximum warning time. We also install combination smoke and CO detectors, replace aging battery-only units with hardwired models, and test every device to confirm proper operation before we leave.",
    icon: "shield",
    benefits: [
      "Hardwired interconnected systems for whole-home alerting",
      "Combination smoke and carbon monoxide detectors available",
      "Battery backup on all hardwired units for power outages",
      "Placement per NFPA and local fire code requirements",
      "Replacement of outdated battery-only detectors",
      "Complete testing and verification before job completion",
    ],
    faq: [
      {
        question: "How often should smoke detectors be replaced?",
        answer:
          "Smoke detectors should be replaced every 10 years, and carbon monoxide detectors every 5 to 7 years. If your detectors are past these dates or chirping frequently after battery replacement, it is time for new units.",
      },
      {
        question: "Do I need hardwired smoke detectors?",
        answer:
          "Most current building codes require hardwired, interconnected smoke detectors in new construction and major renovations. Even in existing homes, upgrading to hardwired units provides significantly better protection than battery-only models.",
      },
      {
        question: "How many smoke detectors does my home need?",
        answer:
          "Code requires detectors in every bedroom, outside each sleeping area, and on every level of the home including the basement. We assess your home layout and install detectors in all required locations.",
      },
    ],
  },
  {
    name: "Surge Protection",
    slug: "surge-protection",
    description:
      "Whole-home surge protection systems that guard your appliances, electronics, and HVAC equipment from power surges, lightning, and grid fluctuations.",
    longDescription:
      "Power surges from lightning strikes, utility switching, and even cycling HVAC systems can damage sensitive electronics, appliances, and wiring over time. A whole-home surge protector installed at your main electrical panel provides a first line of defense by clamping dangerous voltage spikes before they reach your devices. We install commercial-grade surge protection devices rated for high-energy events, and we can add point-of-use protection for especially sensitive equipment like home theaters and computer systems.",
    icon: "shield",
    benefits: [
      "Whole-home protection installed directly at the main panel",
      "Guards against lightning, utility surges, and grid fluctuations",
      "Protects HVAC systems, appliances, and sensitive electronics",
      "Commercial-grade devices with high joule ratings",
      "Point-of-use protection available for critical equipment",
      "LED indicator confirms active protection status at all times",
    ],
    faq: [
      {
        question: "What causes power surges?",
        answer:
          "Power surges come from lightning strikes, utility grid switching, downed power lines, and even large appliances cycling on and off inside your home. External surges from the grid are the most destructive, but internal surges occur daily and cause cumulative damage.",
      },
      {
        question: "Is a whole-home surge protector worth it?",
        answer:
          "Absolutely. A single major surge can destroy thousands of dollars in electronics and appliances. Whole-home protection typically costs a fraction of what a single appliance replacement costs and protects everything connected to your electrical system.",
      },
      {
        question: "Do I still need power strips with whole-home protection?",
        answer:
          "For maximum protection, yes. Whole-home surge protectors handle large external surges, while quality point-of-use protectors provide additional filtering for sensitive equipment like computers, TVs, and audio systems. The two layers work together.",
      },
    ],
  },
  {
    name: "Electrical Inspection",
    slug: "electrical-inspection",
    description:
      "Comprehensive electrical safety inspections for homebuyers, sellers, insurance requirements, and general peace of mind. Detailed reports with prioritized recommendations.",
    longDescription:
      "Whether you are buying a home, listing a property, or need an insurance compliance report, our inspections give you a clear picture of the electrical system's condition. We check the panel, grounding, GFCI and AFCI protection, wiring condition, outlet polarity, and code compliance throughout the entire home. You receive a detailed written report with photographs and prioritized recommendations so you know exactly what needs attention and how urgently.",
    icon: "check",
    benefits: [
      "100-point residential inspection checklist covering all systems",
      "Detailed photo-documented report delivered within 24 hours",
      "Prioritized safety recommendations with severity ratings",
      "Insurance and real-estate compliant report formatting",
      "Same-week scheduling available for urgent requests",
      "Verbal walkthrough of findings provided on-site",
    ],
    faq: [
      {
        question: "How long does an electrical inspection take?",
        answer:
          "A standard residential inspection takes two to three hours depending on the size and age of the home. You will receive the written report within 24 hours of the visit.",
      },
      {
        question: "Is an electrical inspection required when buying a home?",
        answer:
          "It is not legally required in most areas, but it is highly recommended. Many home inspectors check only basic outlet function. A dedicated electrical inspection catches hidden issues like improper wiring, overloaded circuits, and missing safety protections.",
      },
      {
        question: "Can you perform inspections for insurance purposes?",
        answer:
          "Yes. We provide reports formatted to meet insurance underwriting requirements, including four-point inspections common in Texas.",
      },
    ],
  },
];
