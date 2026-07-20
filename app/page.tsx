import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.afsdevelopment.com" },
};

// JSON-LD structured data for the homepage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AFS Development",
  url: "https://www.afsdevelopment.com",
  logo: "https://www.afsdevelopment.com/logo.svg",
  description:
    "AFS Development builds custom websites, mobile apps, e-commerce stores, and enterprise software. 500+ projects delivered worldwide.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18276 Waterloo Road",
    addressLocality: "Amissville",
    addressRegion: "VA",
    postalCode: "20106",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-540-934-0195",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/afsdevelopment",
    "https://www.linkedin.com/in/daniel-morris-396965187",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AFS Development",
  image: "https://www.afsdevelopment.com/og-image.png",
  url: "https://www.afsdevelopment.com",
  telephone: "+1-540-934-0195",
  email: "info@afsdevelopment.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18276 Waterloo Road",
    addressLocality: "Amissville",
    addressRegion: "VA",
    postalCode: "20106",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.6823,
    longitude: -78.0147,
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}
