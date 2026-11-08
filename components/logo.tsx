import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/**
 * Brand logo: calligraphic wordmark (Great Vibes, self-hosted via next/font),
 * a gradient pen-nib icon, and a small tag line pill.
 */
export function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  const word = size === "sm" ? "text-[1.7rem]" : "text-[1.95rem] sm:text-[2.15rem]";
  const nib = size === "sm" ? 18 : 22;
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className="group inline-flex flex-col items-start leading-none">
      <span className="flex items-end">
        <span
          className={`font-logo ${word} bg-gradient-to-r from-accent via-brand-mid to-brand-end -mt-2 bg-clip-text pb-1 pl-0.5 pr-1 pt-2 leading-[1.2] text-transparent`}
        >
          {siteConfig.name}
        </span>
        <PenNib size={nib} gradientId={`logo-nib-${size}`} />
      </span>
      <span className="-mt-1 ml-[22%] inline-flex items-center gap-1 rounded-full border border-coral-line bg-coral-soft px-2 py-[2px] text-[9px] font-semibold uppercase tracking-[0.14em] text-coral-ink">
        <span aria-hidden="true">✦</span>
        Copy &amp; Paste Fonts
        <span aria-hidden="true">✦</span>
      </span>
    </Link>
  );
}

function PenNib({ size, gradientId }: { size: number; gradientId: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="mb-2 -ml-0.5 shrink-0 transition-transform group-hover:-rotate-6"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f766e" />
          <stop offset="0.55" stopColor="#0e7490" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      {/* Nib tilted as if writing */}
      <g transform="rotate(35 12 12)">
        <path d="M12 1.5C15.5 4.5 17.5 7.5 17.5 10.5L12 22.5 6.5 10.5C6.5 7.5 8.5 4.5 12 1.5Z" fill={`url(#${gradientId})`} />
        <path d="M12 12.2V22" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="12" cy="10.6" r="1.6" fill="#fff" />
      </g>
      {/* Sparkle */}
      <path d="M20.5 1.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z" fill="#e4572e" />
    </svg>
  );
}
