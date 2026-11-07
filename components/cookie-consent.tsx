"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { OPEN_SETTINGS_EVENT, saveConsent } from "@/lib/consent";
import { useConsent } from "@/lib/use-storage";

/**
 * Consent banner + settings dialog.
 * This site sets no cookies and loads no analytics or advertising. It only uses
 * localStorage for (1) remembering this choice and (2) optional saved favorites.
 */
export function CookieConsent() {
  const consent = useConsent();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [preferences, setPreferences] = useState(false);
  const consentRef = useRef(consent);

  useEffect(() => {
    consentRef.current = consent;
  }, [consent]);

  useEffect(() => {
    function open() {
      // Reflect the saved choice each time settings open.
      setPreferences(consentRef.current?.preferences === true);
      dialogRef.current?.showModal();
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  function choose(prefs: boolean) {
    saveConsent(prefs);
    dialogRef.current?.close();
  }

  const showBanner = consent === null;

  return (
    <>
      {showBanner && (
        <section
          aria-label="Cookie and storage consent"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-relaxed text-ink-soft">
              We don&apos;t use tracking or advertising cookies. We use your browser&apos;s local storage to remember
              this choice and, only if you allow it, your favorite font styles. Read our{" "}
              <Link href="/cookie-policy" className="text-accent underline underline-offset-2">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-accent underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setPreferences(false);
                  dialogRef.current?.showModal();
                }}
                className="h-10 rounded-lg px-4 text-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                Cookie Settings
              </button>
              <button
                type="button"
                onClick={() => choose(false)}
                className="h-10 rounded-lg border border-line bg-white px-4 text-sm font-semibold text-ink hover:border-ink"
              >
                Reject Optional
              </button>
              <button
                type="button"
                onClick={() => choose(true)}
                className="h-10 rounded-lg bg-accent px-4 text-sm font-semibold text-white hover:bg-accent-hover"
              >
                Accept All
              </button>
            </div>
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-settings-title"
        className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-line bg-white p-0 text-ink shadow-xl backdrop:bg-black/40"
      >
        <form
          method="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            choose(preferences);
          }}
          className="p-5 sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 id="cookie-settings-title" className="text-lg font-bold">
              Cookie Settings
            </h2>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-soft hover:bg-mist hover:text-ink"
              aria-label="Close cookie settings"
            >
              <X size={18} aria-hidden />
            </button>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            CopyFontStyle sets no cookies and runs no analytics or advertising. The items below use your browser&apos;s
            local storage, which stays on your device.
          </p>

          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-line p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">Necessary</span>
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Always on</span>
              </div>
              <p className="mt-1 text-sm text-ink-soft">
                Remembers your consent choice so this banner doesn&apos;t appear on every page.
              </p>
            </div>

            <label className="block cursor-pointer rounded-xl border border-line p-4 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent">
              <span className="flex items-center justify-between gap-4">
                <span className="font-semibold">Preferences</span>
                <input
                  type="checkbox"
                  checked={preferences}
                  onChange={(e) => setPreferences(e.target.checked)}
                  className="h-5 w-5 accent-[var(--color-accent)]"
                />
              </span>
              <span className="mt-1 block text-sm text-ink-soft">
                Saves the font styles you star as favorites so they stay at the top next time. Turning this off deletes
                saved favorites.
              </span>
            </label>

            <div className="rounded-xl border border-dashed border-line p-4">
              <p className="text-sm text-ink-soft">
                <span className="font-semibold text-ink">Analytics and marketing:</span> not used. There is nothing to
                turn on.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-end gap-2">
            <button
              type="button"
              onClick={() => choose(false)}
              className="h-10 rounded-lg border border-line px-4 text-sm font-semibold hover:border-ink"
            >
              Reject Optional
            </button>
            <button
              type="button"
              onClick={() => choose(true)}
              className="h-10 rounded-lg border border-line px-4 text-sm font-semibold hover:border-ink"
            >
              Accept All
            </button>
            <button type="submit" className="h-10 rounded-lg bg-accent px-4 text-sm font-semibold text-white hover:bg-accent-hover">
              Save Choices
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
