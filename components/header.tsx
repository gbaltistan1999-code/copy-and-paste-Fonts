import { Logo } from "./logo";
import { SiteNav } from "./site-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <SiteNav />
      </div>
    </header>
  );
}
