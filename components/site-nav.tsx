"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { fontNav, platformNav } from "@/lib/site-config";
import type { NavLink } from "@/types";

type MenuKey = "fonts" | "platforms" | null;

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const navRef = useRef<HTMLDivElement>(null);

  // Close menus after navigation (state adjustment during render, no effect needed).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-mist hover:text-ink ${
      pathname === href ? "text-ink" : "text-ink-soft"
    }`;

  return (
    <div ref={navRef} className="flex items-center">
      {/* Desktop */}
      <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
        <Link href="/" className={linkClass("/")} aria-current={pathname === "/" ? "page" : undefined}>
          Home
        </Link>
        <Dropdown
          label="Fonts"
          links={fontNav}
          isOpen={open === "fonts"}
          onToggle={() => setOpen(open === "fonts" ? null : "fonts")}
          pathname={pathname}
        />
        <Dropdown
          label="Platforms"
          links={platformNav}
          isOpen={open === "platforms"}
          onToggle={() => setOpen(open === "platforms" ? null : "platforms")}
          pathname={pathname}
        />
        <Link href="/about" className={linkClass("/about")} aria-current={pathname === "/about" ? "page" : undefined}>
          About
        </Link>
        <Link href="/faq" className={linkClass("/faq")} aria-current={pathname === "/faq" ? "page" : undefined}>
          FAQ
        </Link>
      </nav>

      {/* Mobile */}
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-mist md:hidden"
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((v) => !v)}
      >
        {mobileOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
      </button>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-line bg-white px-4 pb-6 pt-2 shadow-lg md:hidden"
        >
          <ul className="space-y-1">
            <MobileLink href="/" label="Home" pathname={pathname} />
          </ul>
          <MobileGroup title="Font styles" links={fontNav} pathname={pathname} />
          <MobileGroup title="Platforms" links={platformNav} pathname={pathname} />
          <ul className="mt-4 space-y-1 border-t border-line pt-4">
            <MobileLink href="/about" label="About" pathname={pathname} />
            <MobileLink href="/faq" label="FAQ" pathname={pathname} />
            <MobileLink href="/contact" label="Contact" pathname={pathname} />
          </ul>
        </nav>
      )}
    </div>
  );
}

function Dropdown({
  label,
  links,
  isOpen,
  onToggle,
  pathname,
}: {
  label: string;
  links: NavLink[];
  isOpen: boolean;
  onToggle: () => void;
  pathname: string;
}) {
  const id = useId();
  const active = links.some((l) => l.href === pathname);
  return (
    <div className="relative">
      <button
        type="button"
        className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-mist hover:text-ink ${
          active ? "text-ink" : "text-ink-soft"
        }`}
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
      >
        {label}
        <ChevronDown size={16} aria-hidden className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <ul
          id={id}
          className="absolute right-0 top-full mt-1 w-56 rounded-lg border border-line bg-white p-1.5 shadow-lg"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`block rounded-md px-3 py-2 text-sm hover:bg-mist ${
                  pathname === link.href ? "font-semibold text-accent" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MobileGroup({ title, links, pathname }: { title: string; links: NavLink[]; pathname: string }) {
  return (
    <div className="mt-4">
      <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-ink-soft">{title}</p>
      <ul className="grid grid-cols-2 gap-1">
        {links.map((l) => (
          <MobileLink key={l.href} href={l.href} label={l.label} pathname={pathname} />
        ))}
      </ul>
    </div>
  );
}

function MobileLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const current = pathname === href;
  return (
    <li>
      <Link
        href={href}
        aria-current={current ? "page" : undefined}
        className={`block rounded-md px-3 py-2.5 text-[15px] hover:bg-mist ${current ? "font-semibold text-accent" : "text-ink"}`}
      >
        {label}
      </Link>
    </li>
  );
}
