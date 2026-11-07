import type { Metadata } from "next";
import Link from "next/link";
import { fontNav, platformNav } from "@/lib/site-config";

export const metadata: Metadata = {
  // Next.js adds noindex to 404 responses automatically.
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        <span aria-hidden="true">𝓟𝓪𝓰𝓮 𝓷𝓸𝓽 𝓯𝓸𝓾𝓷𝓭</span>
        <span className="sr-only">Page not found</span>
      </h1>
      <p className="mt-3 text-ink-soft">The page you were looking for doesn&apos;t exist or has moved.</p>
      <Link
        href="/"
        className="mt-6 inline-flex h-11 items-center rounded-lg bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-hover"
      >
        Go to the font generator
      </Link>
      <h2 className="mt-12 text-lg font-semibold">Popular font styles</h2>
      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {[...fontNav, ...platformNav].map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-block rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft hover:border-accent hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
