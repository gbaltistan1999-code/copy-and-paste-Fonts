"use client";

import { memo, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Lock, Star, X } from "lucide-react";
import { CopyButton } from "./copy-button";
import { getStyles } from "@/lib/styles";
import { writeFavorites, openCookieSettings } from "@/lib/consent";
import { FAVORITES_CHANGE_EVENT, useConsent, useStoredFavorites } from "@/lib/use-storage";
import { siteConfig } from "@/lib/site-config";
import type { FontStyle, ZalgoIntensity } from "@/types";

interface FontGeneratorProps {
  /** Style ids to show, in order. Omit to show every style. */
  styleIds?: string[];
  placeholder?: string;
  /** How many results to show before "Show all". */
  initialCount?: number;
  /** Focus the input on load (desktop pointers only, so mobile keyboards don't pop up). */
  autoFocus?: boolean;
  inputLabel?: string;
}

const DEBOUNCE_MS = 80;

export function FontGenerator({
  styleIds,
  placeholder = "Type your text here",
  initialCount,
  autoFocus = false,
  inputLabel = "Type or paste your text",
}: FontGeneratorProps) {
  const inputId = useId();
  const hintId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState("");
  const [debounced, setDebounced] = useState("");
  const [intensity, setIntensity] = useState<ZalgoIntensity>(2);
  const [showAll, setShowAll] = useState(false);
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

  const results = useMemo(
    () => styles.map((style) => ({ style, output: style.convert(source, { zalgoIntensity: intensity }) })),
    [styles, source, intensity],
  );

  const ordered = useMemo(() => {
    if (favorites.length === 0) return results;
    const fav = new Set(favorites);
    return [...results.filter((r) => fav.has(r.style.id)), ...results.filter((r) => !fav.has(r.style.id))];
  }, [results, favorites]);

  const limit = initialCount && !showAll ? initialCount : ordered.length;
  const visible = ordered.slice(0, limit);
  const hiddenCount = ordered.length - visible.length;

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

  function clear() {
    setInput("");
    setDebounced("");
    inputRef.current?.focus();
  }

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

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-1 text-sm text-ink-soft">
        <p>
          {usingPlaceholder ? "Showing sample text. Start typing to see your own." : `${ordered.length} styles for your text`}
        </p>
        {consent !== undefined && favorites.length > 0 && !canPersist && (
          <p className="text-xs">
            Favorites reset when you leave.{" "}
            <button type="button" onClick={openCookieSettings} className="font-medium text-accent underline underline-offset-2">
              Remember them
            </button>
          </p>
        )}
      </div>

      <ul className="mt-3 grid gap-3 lg:grid-cols-2" aria-label="Font style results">
        {visible.map(({ style, output }) => (
          <StyleCard
            key={style.id}
            style={style}
            output={output}
            plain={source}
            isFavorite={favorites.includes(style.id)}
            onToggleFavorite={toggleFavorite}
            onCopyResult={handleCopyResult}
          />
        ))}
      </ul>

      {hiddenCount > 0 && (
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent"
          >
            Show all {ordered.length} styles
          </button>
        </div>
      )}
      {showAll && initialCount && (
        <p className="mt-5 text-center text-sm text-ink-soft">
          Looking for one family? Try <Link href="/cursive-fonts" className="text-accent underline underline-offset-2">cursive</Link>,{" "}
          <Link href="/bold-font" className="text-accent underline underline-offset-2">bold</Link> or{" "}
          <Link href="/aesthetic-fonts" className="text-accent underline underline-offset-2">aesthetic</Link> fonts.
        </p>
      )}
    </div>
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
    <li className="flex items-center gap-2 rounded-xl border border-line bg-white p-3 transition-colors hover:border-accent/40 sm:gap-3 sm:p-4">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">{style.name}</p>
        <p
          className={`preview-text mt-1 text-lg text-ink sm:text-xl ${isGlitch ? "max-h-24 overflow-hidden py-3 leading-loose" : "leading-snug"}`}
          aria-hidden="true"
        >
          {output}
        </p>
        <span className="sr-only">
          {style.name} style of: {plain}
        </span>
        {style.note && <p className="mt-1 text-xs text-ink-soft">{style.note}</p>}
      </div>
      <button
        type="button"
        onClick={() => onToggleFavorite(style.id)}
        aria-pressed={isFavorite}
        aria-label={`${isFavorite ? "Remove" : "Add"} ${style.name} ${isFavorite ? "from" : "to"} favorites`}
        className={`inline-flex h-11 w-9 shrink-0 items-center justify-center rounded-lg hover:bg-mist ${
          isFavorite ? "text-amber-500" : "text-ink-soft/60 hover:text-ink"
        }`}
      >
        <Star size={18} aria-hidden fill={isFavorite ? "currentColor" : "none"} />
      </button>
      <CopyButton text={output} label={`Copy ${style.name} text`} onResult={(ok) => onCopyResult(style.name, ok)} />
    </li>
  );
});
