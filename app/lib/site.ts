export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Junk My Car YYC",
  domain: "junkmycaryyc.ca",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://junkmycaryyc.ca",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(403) 837-1550",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF || "tel:+14038371550",
  email: "info@junkmycaryyc.ca",
  streetAddress: "1135 44 Ave SE",
  addressLocality: "Calgary",
  addressRegion: "AB",
  addressCountry: "CA",
  primaryColor: "#0757B8",
  socialImage:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const servicesNav = [
  { label: "Junk Car Removal Calgary", href: "/services/junk-car-removal-calgary" },
  { label: "Scrap Car Removal Calgary", href: "/services/scrap-car-removal-calgary" },
  { label: "Cash For Scrap Cars Calgary", href: "/services/cash-for-scrap-cars-calgary" },
  { label: "Cash For Junk Cars Calgary", href: "/services/cash-for-junk-cars-calgary" },
] as const;
