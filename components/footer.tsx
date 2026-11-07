import Link from "next/link";
import { CookieSettingsButton } from "./cookie-settings-button";
import { fontNav, legalNav, platformNav, siteConfig, trustNav } from "@/lib/site-config";
import type { NavLink } from "@/types";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <Link href="/" className="text-lg font-bold tracking-tight text-ink">
            Copy<span className="text-accent">Font</span>Style
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Free copy and paste fonts made from Unicode characters. Your text is converted in your browser and never sent
            to our server.
          </p>
        </div>
        <FooterGroup title="Font styles" links={fontNav} />
        <FooterGroup title="Platforms" links={[...platformNav, { href: "/", label: "All font styles" }]} />
        <div>
          <FooterGroup title="Site" links={[...trustNav, ...legalNav]} />
          <CookieSettingsButton className="mt-2 text-left text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline" />
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs leading-relaxed text-ink-soft sm:px-6">
          © {new Date().getFullYear()} {siteConfig.name}. Not affiliated with Instagram, TikTok, Discord or any other
          platform mentioned on this site. Styled text is made of Unicode characters and may not display on every
          device.
        </p>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-semibold text-ink">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
