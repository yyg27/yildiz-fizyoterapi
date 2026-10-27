"use client";

import { useState } from "react";

type NavItem = { label: string; href: string };

// Hamburger menu for small screens (desktop links are hidden below 860px).
// Client component because the menu must close when a link is tapped.
export default function MobileNav({ items, label }: { items: NavItem[]; label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-label={label}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
      >
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>

      {open && (
        <div id="mobile-nav" className="mobile-nav">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
