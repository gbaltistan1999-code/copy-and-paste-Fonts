"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useConsent } from "@/lib/use-storage";

/** Floating "back to top" button that appears after scrolling down. */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const consent = useConsent();
  // Sit above the cookie banner while it is showing.
  const bannerShowing = consent === null;

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 700);
        ticking = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => {
        const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
      }}
      aria-label="Back to top"
      // On phones the banner is tall, so the button waits until a choice is made;
      // on wider screens the banner is one short row and the button sits above it.
      className={`fixed right-4 z-40 h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent via-fuchsia-700 to-orange-600 text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105 sm:right-6 sm:h-14 sm:w-14 ${
        bannerShowing ? "hidden md:inline-flex md:bottom-32" : "inline-flex bottom-5 sm:bottom-6"
      }`}
    >
      <ArrowUp size={22} aria-hidden />
    </button>
  );
}
