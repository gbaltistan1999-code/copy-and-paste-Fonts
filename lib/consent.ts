/**
 * Cookie / browser-storage consent.
 *
 * The site has no analytics or marketing scripts, so there are only two
 * categories:
 * - necessary: remembers the consent choice itself (always on)
 * - preferences: remembers favorite font styles (off until the visitor opts in)
 *
 * If analytics or marketing are ever added, add a category here, gate the
 * script on it, and update the Cookie Policy and Privacy Policy.
 */

export const CONSENT_STORAGE_KEY = "cfs-consent";
export const FAVORITES_STORAGE_KEY = "cfs-favorites";
/** Bump when categories change so visitors are asked again. */
export const CONSENT_VERSION = 1;

export const CONSENT_CHANGE_EVENT = "cfs:consent-change";
export const OPEN_SETTINGS_EVENT = "cfs:open-cookie-settings";

export interface ConsentState {
  version: number;
  necessary: true;
  preferences: boolean;
  updatedAt: string;
}

/** Parses a stored value. Returns null when missing, malformed or outdated. */
export function parseConsent(raw: string | null): ConsentState | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as Partial<ConsentState>;
    if (data.version !== CONSENT_VERSION || typeof data.preferences !== "boolean") return null;
    return {
      version: CONSENT_VERSION,
      necessary: true,
      preferences: data.preferences,
      updatedAt: typeof data.updatedAt === "string" ? data.updatedAt : "",
    };
  } catch {
    return null;
  }
}

export function createConsent(preferences: boolean, now = new Date()): ConsentState {
  return { version: CONSENT_VERSION, necessary: true, preferences, updatedAt: now.toISOString() };
}

function safeStorage(): Storage | null {
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch {
    return null;
  }
}

export function readConsent(): ConsentState | null {
  try {
    return parseConsent(safeStorage()?.getItem(CONSENT_STORAGE_KEY) || memoryConsent || null);
  } catch {
    return null;
  }
}

// In-memory copy so a choice still applies on this page view if storage is blocked.
let memoryConsent = "";
export function getMemoryConsent(): string {
  return memoryConsent;
}

export function saveConsent(preferences: boolean): ConsentState {
  const state = createConsent(preferences);
  memoryConsent = JSON.stringify(state);
  const storage = safeStorage();
  try {
    storage?.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    // Withdrawing consent deletes anything stored under that category.
    if (!preferences) storage?.removeItem(FAVORITES_STORAGE_KEY);
  } catch {
    // Storage blocked (private mode, disabled): the choice applies to this page view only.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: state }));
  return state;
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

// ----- Favorites (preferences category) -----

export function parseFavorites(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const data: unknown = JSON.parse(raw);
    return Array.isArray(data) ? data.filter((x): x is string => typeof x === "string").slice(0, 100) : [];
  } catch {
    return [];
  }
}

/** Reads favorites only when preference storage is allowed. */
export function readFavorites(): string[] {
  if (!readConsent()?.preferences) return [];
  try {
    return parseFavorites(safeStorage()?.getItem(FAVORITES_STORAGE_KEY) ?? null);
  } catch {
    return [];
  }
}

/** Writes favorites only when preference storage is allowed. */
export function writeFavorites(ids: string[]): void {
  if (!readConsent()?.preferences) return;
  try {
    safeStorage()?.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Ignore storage errors; favorites simply won't persist.
  }
}
