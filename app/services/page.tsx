import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AFS Development's full range of services: custom web development, mobile apps (iOS & Android), Shopify, WooCommerce, Magento, WordPress, CMS, SEO, PSD-to-HTML, and affiliate marketing. Based in Virginia, serving clients worldwide.",
  keywords: [
    "web development services", "mobile app development", "Shopify developer",
    "WordPress development", "WooCommerce store", "Magento development",
    "iOS app development", "Android app development", "SEO services",
    "PSD to HTML", "e-commerce development", "custom software Virginia",
  ],
  alternates: { canonical: "https://www.afsdevelopment.com/services" },
  openGraph: {
    title: "Services | AFS Development",
    description:
      "Custom web, mobile, e-commerce, CMS, SEO and more. 500+ projects delivered by AFS Development.",
    url: "https://www.afsdevelopment.com/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AFS Development Services" }],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AFS Development Services",
  description: "Full range of digital development services offered by AFS Development",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Web Development", url: "https://www.afsdevelopment.com/services#web" },
    { "@type": "ListItem", position: 2, name: "E-Commerce Development", url: "https://www.afsdevelopment.com/services#ecommerce" },
    { "@type": "ListItem", position: 3, name: "Mobile App Development", url: "https://www.afsdevelopment.com/services#mobile" },
    { "@type": "ListItem", position: 4, name: "CMS Development", url: "https://www.afsdevelopment.com/services#cms" },
    { "@type": "ListItem", position: 5, name: "Backend & Custom Systems", url: "https://www.afsdevelopment.com/services#backend" },
    { "@type": "ListItem", position: 6, name: "SEO Services", url: "https://www.afsdevelopment.com/services#seo" },
  ],
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesPage />
    </>
  );
}
