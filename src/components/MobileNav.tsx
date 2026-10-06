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
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
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
