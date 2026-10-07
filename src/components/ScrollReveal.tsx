"use client";

import { useEffect } from "react";

// Elements that fade up when they scroll into view
const SELECTOR = [
  ".section-head", ".service-card", ".approach-grid > div", ".step",
  ".booking-header", ".contact-lines", ".form-card",
  ".testimonial blockquote", ".testimonial cite",
].join(", ");

// Scroll reveal that works in every browser (CSS scroll timelines aren't in Firefox yet).
// Elements are hidden by JS, never by CSS alone: without JS or with reduced motion, everything stays visible.
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // reveal once, then stop watching
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    document.querySelectorAll(SELECTOR).forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
