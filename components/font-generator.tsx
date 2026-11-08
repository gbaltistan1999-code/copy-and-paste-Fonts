"use client";

import { memo, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Heart, Lock, X } from "lucide-react";
import { CopyButton } from "./copy-button";
import { getStyles } from "@/lib/styles";
import { groupByStyle } from "@/lib/styles/groups";
import { writeFavorites, openCookieSettings } from "@/lib/consent";
import { FAVORITES_CHANGE_EVENT, useConsent, useStoredFavorites } from "@/lib/use-storage";
import { siteConfig } from "@/lib/site-config";
import type { FontStyle, ZalgoIntensity } from "@/types";

interface FontGeneratorProps {
  /** Style ids to show, in order. Omit to show every style. */
  styleIds?: string[];
  placeholder?: string;
  /** Focus the input on load (desktop pointers only, so mobile keyboards don't pop up). */
  autoFocus?: boolean;
  inputLabel?: string;
}

interface Result {
  style: FontStyle;
  output: string;
}

const DEBOUNCE_MS = 80;
const ALL = "all";
const FAVORITES = "favorites";

export function FontGenerator({
  styleIds,
  placeholder = "Type your text here",
  autoFocus = false,
  inputLabel = "Type or paste your text",
}: FontGeneratorProps) {
  const inputId = useId();
  const hintId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [debounced, setDebounced] = useState("");
  const [intensity, setIntensity] = useState<ZalgoIntensity>(2);
  const [activeTab, setActiveTab] = useState<string>(ALL);
  const [announcement, setAnnouncement] = useState("");
  const [sessionFavorites, setSessionFavorites] = useState<string[]>([]);

  const consent = useConsent();
  const storedFavorites = useStoredFavorites();
  const canPersist = consent?.preferences === true;
  const favorites = canPersist ? storedFavorites : sessionFavorites;

  const idsKey = styleIds?.join(",") ?? "";
  // eslint-disable-next-line react-hooks/exhaustive-deps -- idsKey captures styleIds by value
  const styles = useMemo(() => getStyles(styleIds), [idsKey]);
  const hasZalgo = styles.some((s) => s.id === "zalgo");

  useEffect(() => {
    if (!autoFocus) return;
    if (window.matchMedia("(pointer: fine)").matches) inputRef.current?.focus({ preventScroll: true });
  }, [autoFocus]);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(input), DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [input]);

  const source = debounced.trim() ? debounced : placeholder;
  const usingPlaceholder = !debounced.trim();

  const results = useMemo<Result[]>(
    () => styles.map((style) => ({ style, output: style.convert(source, { zalgoIntensity: intensity }) })),
    [styles, source, intensity],
  );

  const groups = useMemo(() => groupByStyle(results), [results]);
  const favoriteResults = useMemo(() => {
    const byId = new Map(results.map((r) => [r.style.id, r]));
    return favorites.map((id) => byId.get(id)).filter((r): r is Result => Boolean(r));
  }, [results, favorites]);

  // Tabs only help when there are several groups to choose from.
  const showTabs = groups.length >= 3;
  const tab = activeTab === FAVORITES && favoriteResults.length === 0 ? ALL : activeTab;

  const sections: { key: string; label: string; items: Result[] }[] = [];
  if ((tab === ALL || tab === FAVORITES) && favoriteResults.length > 0) {
    sections.push({ key: FAVORITES, label: "Your favorites", items: favoriteResults });
  }
  if (tab !== FAVORITES) {
    for (const g of groups) {
      if (tab === ALL || tab === g.group.key) sections.push({ key: g.group.key, label: g.group.label, items: g.items });
    }
  }

  const handleCopyResult = useCallback((name: string, ok: boolean) => {
    setAnnouncement(
      ok ? `Copied ${name} text to the clipboard.` : `Could not copy automatically. Select the ${name} text and copy it manually.`,
    );
  }, []);

  const toggleFavorite = useCallback(
    (id: string) => {
      const next = favorites.includes(id) ? favorites.filter((f) => f !== id) : [id, ...favorites];
      if (canPersist) {
        writeFavorites(next);
        window.dispatchEvent(new Event(FAVORITES_CHANGE_EVENT));
      } else {
        setSessionFavorites(next);
      }
    },
    [favorites, canPersist],
  );

  function selectTab(key: string) {
    setActiveTab(key);
    // If the user has scrolled past the top of the results, bring them back to it.
    const el = resultsRef.current;
    if (el && el.getBoundingClientRect().top < 0) {
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
    }
  }

  function clear() {
    setInput("");
    setDebounced("");
    inputRef.current?.focus();
  }

  const tabs = [
    { key: ALL, label: "All" },
    ...(favoriteResults.length > 0 ? [{ key: FAVORITES, label: "Favorites" }] : []),
    ...groups.map((g) => ({ key: g.group.key, label: g.group.label })),
  ];

  return (
    <div>
      <div className="rounded-2xl border border-line bg-white p-3 shadow-sm sm:p-4">
        <label htmlFor={inputId} className="sr-only">
          {inputLabel}
        </label>
        <div className="relative">
          <textarea
            id={inputId}
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (e.target.value === "") setDebounced("");
            }}
            maxLength={siteConfig.maxInputLength}
            rows={2}
            placeholder={placeholder}
            aria-describedby={hintId}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            className="block w-full resize-none rounded-xl border border-line bg-mist px-4 py-3 pr-12 text-lg text-ink placeholder:text-ink-soft/70 focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          {input && (
            <button
              type="button"
              onClick={clear}
              className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-soft hover:bg-white hover:text-ink"
              aria-label="Clear text"
            >
              <X size={18} aria-hidden />
            </button>
          )}
        </div>
        <div id={hintId} className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-1 text-xs text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <Lock size={12} aria-hidden />
            Converted in your browser. Your text is never sent or saved.
          </span>
          <span aria-live="off">
            {input.length}/{siteConfig.maxInputLength} characters
          </span>
        </div>

        {hasZalgo && (
          <fieldset className="mt-3 flex flex-wrap items-center gap-2 px-1">
            <legend className="sr-only">Glitch intensity</legend>
            <span className="text-sm font-medium text-ink" aria-hidden>
              Glitch intensity:
            </span>
            {([1, 2, 3] as const).map((level) => (
              <label
                key={level}
                className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                  intensity === level ? "border-accent bg-accent-soft font-semibold text-accent" : "border-line text-ink-soft hover:text-ink"
                }`}
              >
                <input
                  type="radio"
                  name={`${inputId}-intensity`}
                  value={level}
                  checked={intensity === level}
                  onChange={() => setIntensity(level)}
                  className="sr-only"
                />
                {level === 1 ? "Low" : level === 2 ? "Medium" : "High"}
              </label>
            ))}
          </fieldset>
        )}
      </div>

      <div className="sr-only" aria-live="polite" role="status">
        {announcement}
      </div>

      <div ref={resultsRef} className="scroll-mt-20">
        {showTabs && <CategoryTabs tabs={tabs} active={tab} onSelect={selectTab} />}

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-sm text-ink-soft">
          <p>{usingPlaceholder ? "Showing sample text. Start typing to see your own." : `${results.length} styles for your text`}</p>
          {consent !== undefined && favorites.length > 0 && !canPersist && (
            <p className="text-xs">
              Favorites reset when you leave.{" "}
              <button type="button" onClick={openCookieSettings} className="font-medium text-accent underline underline-offset-2">
                Remember them
              </button>
            </p>
          )}
        </div>

        {sections.map((section, index) => (
          <ResultSection
            key={section.key}
            id={`${inputId}-${section.key}`}
            label={section.label}
            // Render the first sections immediately; later ones mount as they near the viewport.
            eager={tab !== ALL || section.key === FAVORITES || index <= (sections[0]?.key === FAVORITES ? 1 : 0)}
            showHeading={showTabs || section.key === FAVORITES}
            items={section.items}
            plain={source}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onCopyResult={handleCopyResult}
          />
        ))}
      </div>
    </div>
  );
}

/** Horizontally scrollable filter pills with a bar that shows the scroll position. */
function CategoryTabs({
  tabs,
  active,
  onSelect,
}: {
  tabs: { key: string; label: string }[];
  active: string;
  onSelect: (key: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // Updates the progress bar directly (no React state, no re-renders while scrolling).
  const updateBar = useCallback(() => {
    const el = scrollRef.current;
    const bar = barRef.current;
    if (!el || !bar) return;
    const ratio = el.scrollWidth <= el.clientWidth ? 1 : (el.scrollLeft + el.clientWidth) / el.scrollWidth;
    bar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  }, []);

  useEffect(() => {
    updateBar();
    window.addEventListener("resize", updateBar);
    return () => window.removeEventListener("resize", updateBar);
  }, [updateBar, tabs.length]);

  return (
    <div className="sticky top-16 z-30 -mx-4 mt-6 bg-white px-4 pb-2 pt-2 sm:mx-0 sm:rounded-b-2xl sm:px-0">
      <div
        ref={scrollRef}
        onScroll={updateBar}
        role="group"
        aria-label="Filter font styles by category"
        className="flex gap-1 overflow-x-auto rounded-full border border-line bg-white p-1.5 shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => onSelect(t.key)}
              aria-pressed={isActive}
              className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-accent via-brand-mid to-brand-end text-white shadow"
                  : "text-ink-soft hover:bg-accent-soft hover:text-ink"
              }`}
            >
              {t.key === FAVORITES && <Heart size={14} aria-hidden fill="currentColor" />}
              {t.label}
            </button>
          );
        })}
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line/70" aria-hidden="true">
        <div
          ref={barRef}
          className="h-full w-full rounded-full bg-gradient-to-r from-accent via-brand-mid to-brand-end transition-[width] duration-150"
        />
      </div>
    </div>
  );
}

function ResultSection({
  id,
  label,
  eager,
  showHeading,
  items,
  plain,
  favorites,
  onToggleFavorite,
  onCopyResult,
}: {
  id: string;
  label: string;
  eager: boolean;
  showHeading: boolean;
  items: Result[];
  plain: string;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onCopyResult: (name: string, ok: boolean) => void;
}) {
  const headingId = `${id}-heading`;
  const placeholderRef = useRef<HTMLUListElement>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const mounted = eager || nearViewport;

  // Laying out dozens of rare Unicode glyphs is expensive on slow phones, so cards in
  // later sections are only created when the section comes within ~600px of the screen.
  useEffect(() => {
    if (mounted) return;
    const el = placeholderRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setNearViewport(true), 0);
      return () => clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <section aria-labelledby={showHeading ? headingId : undefined} aria-label={showHeading ? undefined : "Font styles"} className="cv-section mt-6">
      {showHeading && (
        <h2 id={headingId} className="flex items-baseline gap-2 border-b-2 border-line pb-3 font-display text-2xl text-ink">
          {label}
          <span className="font-sans text-sm font-normal text-ink-soft">{items.length} styles</span>
        </h2>
      )}
      {!mounted ? (
        <ul ref={placeholderRef} aria-hidden="true" className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map(({ style }) => (
            <li key={style.id} className="h-[124px] rounded-2xl border border-line bg-white/60" />
          ))}
        </ul>
      ) : (
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map(({ style, output }) => (
          <StyleCard
            key={style.id}
            style={style}
            output={output}
            plain={plain}
            isFavorite={favorites.includes(style.id)}
            onToggleFavorite={onToggleFavorite}
            onCopyResult={onCopyResult}
          />
        ))}
      </ul>
      )}
    </section>
  );
}

interface StyleCardProps {
  style: FontStyle;
  output: string;
  plain: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onCopyResult: (name: string, ok: boolean) => void;
}

const StyleCard = memo(function StyleCard({ style, output, plain, isFavorite, onToggleFavorite, onCopyResult }: StyleCardProps) {
  const isGlitch = style.category === "glitch";
  return (
    <li data-style-id={style.id} className="flex min-w-0 flex-col rounded-2xl border border-line bg-white p-4 transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-md sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="min-w-0 text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-ink-soft">{style.name}</p>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => onToggleFavorite(style.id)}
            aria-pressed={isFavorite}
            aria-label={`${isFavorite ? "Remove" : "Add"} ${style.name} ${isFavorite ? "from" : "to"} favorites`}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-coral-soft ${
              isFavorite ? "text-coral" : "text-coral/60 hover:text-coral"
            }`}
          >
            <Heart size={17} aria-hidden fill={isFavorite ? "currentColor" : "none"} />
          </button>
          <CopyButton
            text={output}
            label={`Copy ${style.name} text`}
            onResult={(ok) => onCopyResult(style.name, ok)}
            size="sm"
            variant="soft"
          />
        </div>
      </div>
      <p
        className={`preview-text mt-3 text-2xl text-ink xl:text-[1.375rem] ${isGlitch ? "max-h-28 overflow-hidden py-3 leading-loose" : "leading-snug"}`}
        aria-hidden="true"
      >
        {output}
      </p>
      <span className="sr-only">
        {style.name} style of: {plain}
      </span>
      {style.note && <p className="mt-auto pt-2 text-xs text-ink-soft">{style.note}</p>}
    </li>
  );
});
