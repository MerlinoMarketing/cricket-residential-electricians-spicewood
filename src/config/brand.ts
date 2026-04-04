export interface BrandConfig {
  name: string;
  tagline: string;
  category: string;
  email: string;
  website: string;
  phone: string;
  yearsInBusiness: number;
  founded: number;
  license: string;
  insurance: string;
  emergencyLabel: string;
  turnaroundLabel: string;
  heroImage: string;
  aboutImage: string;
  serviceImages: string[];
  theme: {
    name: string;
    primary: string;
    accent: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    google: string;
  };
  trustBadges: string[];
}

export const brand: BrandConfig = {
  name: "Cricket Residential Electricians",
  tagline: "Trusted Residential Electrical Experts",
  category: "Electrician",
  email: "info@cricketelectricians.com",
  phone: "(512) 555-0147",
  website: "https://cricket-residential-electricians.vercel.app",
  yearsInBusiness: 10,
  founded: 2015,
  license: "Licensed & Bonded",
  insurance: "Fully Insured",
  emergencyLabel: "24/7 Emergency Response",
  turnaroundLabel: "Same-Day Service Available",
  heroImage: "/images/hero.png",
  aboutImage: "/images/about.png",
  serviceImages: ["/images/service-1.svg", "/images/service-2.svg"],
  theme: {
    name: "cricket-electric",
    primary: "#1A5276",
    accent: "#F1C40F",
  },
  socialLinks: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
  trustBadges: [
    "Locally Owned & Operated",
    "Background-Checked Technicians",
    "Upfront Pricing -- No Surprises",
  ],
};
