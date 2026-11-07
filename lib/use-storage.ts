"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_STORAGE_KEY,
  FAVORITES_STORAGE_KEY,
  getMemoryConsent,
  parseConsent,
  parseFavorites,
  type ConsentState,
} from "./consent";

export const FAVORITES_CHANGE_EVENT = "cfs:favorites-change";
const SERVER = "__server__";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  window.addEventListener(FAVORITES_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
    window.removeEventListener(FAVORITES_CHANGE_EVENT, callback);
  };
}

function readRaw(key: string): string {
  try {
    return window.localStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
}

/**
 * Current consent.
 * - `undefined` during server rendering / hydration (unknown, render nothing)
 * - `null` when no valid choice has been made (show the banner)
 */
export function useConsent(): ConsentState | null | undefined {
  const raw = useSyncExternalStore(
    subscribe,
    () => readRaw(CONSENT_STORAGE_KEY) || getMemoryConsent(),
    () => SERVER,
  );
  return useMemo(() => (raw === SERVER ? undefined : parseConsent(raw || null)), [raw]);
}

/** Favorites persisted in localStorage (only meaningful when preferences consent is given). */
export function useStoredFavorites(): string[] {
  const raw = useSyncExternalStore(subscribe, () => readRaw(FAVORITES_STORAGE_KEY), () => "");
  return useMemo(() => parseFavorites(raw || null), [raw]);
}
