"use client";

import { openCookieSettings } from "@/lib/consent";

export function CookieSettingsButton({ className, label = "Cookie Settings" }: { className?: string; label?: string }) {
  return (
    <button type="button" className={className} onClick={openCookieSettings}>
      {label}
    </button>
  );
}
