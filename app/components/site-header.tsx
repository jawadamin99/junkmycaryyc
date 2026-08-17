"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cityPages } from "../lib/city-pages";
import { mainNav, servicesNav, siteConfig } from "../lib/site";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-shell site-header-shell">
        <Link href="/" className="site-brand" aria-label={`${siteConfig.name} home`} onClick={closeMenu}>
          <Image
            src="/brand/junkmycaryyc-new-logo.png"
            alt="Junk My Car YYC"
            width={1600}
            height={520}
            className="site-brand-logo"
            priority
          />
        </Link>

        <button
          type="button"
          className="site-menu-toggle"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isOpen ? "site-nav-open" : ""}`} aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

          <div
            className={`site-nav-group ${servicesOpen ? "site-nav-group-open" : ""}`}
          >
            <button
              type="button"
              className="site-nav-trigger"
              aria-expanded={servicesOpen}
              onClick={() => {
                setServicesOpen((open) => !open);
                setLocationsOpen(false);
              }}
            >
              Services
            </button>

            <div className="site-nav-dropdown">
              {servicesNav.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            className={`site-nav-group ${locationsOpen ? "site-nav-group-open" : ""}`}
          >
            <button
              type="button"
              className="site-nav-trigger"
              aria-expanded={locationsOpen}
              onClick={() => {
                setLocationsOpen((open) => !open);
                setServicesOpen(false);
              }}
            >
              Locations
            </button>

            <div className="site-nav-dropdown">
              {cityPages.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} onClick={closeMenu}>
                  {page.city}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <div className="site-header-cta">
          <a href={siteConfig.phoneHref} className="header-phone">
            {siteConfig.phoneDisplay}
          </a>
          <Link href="/contact" className="header-quote-btn">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
