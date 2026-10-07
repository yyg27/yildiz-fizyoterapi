"use client";

import { useEffect } from "react";

// Marks the header link of the section in view (aria-current) and adds .is-scrolled to the header
// once the page leaves the top. A scroll listener instead of IntersectionObserver because the footer
// is too short to ever reach the middle of the screen; at the bottom of the page the last link wins.
export default function ScrollSpy() {
  useEffect(() => {
    const header = document.querySelector("header");
    const links = [...document.querySelectorAll<HTMLAnchorElement>(".nav-links a")];
    const sections = links.map((link) => document.querySelector(link.hash));
    let frame = 0;

    const update = () => {
      frame = 0;
      header?.classList.toggle("is-scrolled", window.scrollY > 0);

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let active = atBottom ? links.length - 1 : -1;
      if (!atBottom) {
        sections.forEach((section, i) => {
          if (section && section.getBoundingClientRect().top <= window.innerHeight / 2) active = i;
        });
      }
      // aria-current="" counts as false for screen readers, so set an explicit value
      links.forEach((link, i) => (i === active ? link.setAttribute("aria-current", "true") : link.removeAttribute("aria-current")));
    };

    const onScroll = () => { frame ||= requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
