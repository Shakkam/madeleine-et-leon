"use client";

/**
 * SiteHeader
 * Header fixe commun à toutes les pages :
 * bandeau défilant (h-9) + barre d'onglets (h-14) = 5.75rem.
 * Menu burger sous md.
 */
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MarqueeBanner from "./MarqueeBanner";
import { navigation } from "@/data/content";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => pathname === href;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <MarqueeBanner />

      <nav
        aria-label="Navigation principale"
        className="h-14 bg-creme/90 backdrop-blur-md border-b border-choco/10 px-6 sm:px-10 lg:px-16 flex items-center justify-between"
      >
        {/* Marque → accueil */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display fraunces-soft italic font-black text-xl text-choco leading-none"
        >
          Madeleine <span className="text-beurre">&amp;</span> Léon
        </Link>

        {/* Onglets — desktop */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navigation.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`font-label text-[11px] tracking-[0.18em] uppercase px-3 py-2 rounded-full transition-colors duration-200 ${
                  isActive(href)
                    ? "bg-choco text-creme"
                    : "text-choco hover:bg-beurre/25"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger — mobile */}
        <button
          type="button"
          className="md:hidden w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-1.5"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block w-6 h-0.5 bg-choco transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-choco transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-choco transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu déroulant — mobile */}
      {open && (
        <ul
          id="menu-mobile"
          className="md:hidden bg-creme border-b border-choco/10 px-6 py-4 flex flex-col gap-1 shadow-lg"
        >
          {navigation.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                aria-current={isActive(href) ? "page" : undefined}
                className={`block font-display fraunces-soft italic font-bold text-2xl py-2 ${
                  isActive(href) ? "text-beurre" : "text-choco"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
