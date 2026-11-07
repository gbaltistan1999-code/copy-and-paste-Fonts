import Link from "next/link";
import { SiteNav } from "./site-nav";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-ink" aria-label={`${siteConfig.name} home`}>
          Copy<span className="text-accent">Font</span>Style
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
