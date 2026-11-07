import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import { CONSENT_STORAGE_KEY, FAVORITES_STORAGE_KEY } from "@/lib/consent";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const description =
  "CopyFontStyle Cookie Policy: we set no cookies and use no analytics or ads. Learn what browser storage we use, why, and how to change your choice.";

export const metadata = pageMetadata({ title: "Cookie Policy", description, path: "/cookie-policy" });

const rows = [
  {
    name: CONSENT_STORAGE_KEY,
    category: "Necessary",
    purpose: "Remembers your consent choice so the banner isn't shown on every page.",
    duration: "Until you clear site data or change your choice",
  },
  {
    name: FAVORITES_STORAGE_KEY,
    category: "Preferences (optional)",
    purpose: "Remembers the font styles you starred so they appear first. Stored only if you allow preferences.",
    duration: "Until you remove favorites, turn off preferences, or clear site data",
  },
];

export default function CookiePolicyPage() {
  return (
    <ContentPage
      title="Cookie Policy"
      name="Cookie Policy"
      description={description}
      path="/cookie-policy"
      lastUpdated={siteConfig.legalLastUpdated}
    >
      <p>
        {siteConfig.name} <strong>does not set any cookies</strong> and does not use analytics, advertising or social
        media tracking. We use a small amount of your browser&apos;s local storage instead, explained below.
      </p>

      <h2>Cookies and local storage</h2>
      <p>
        Cookies are small files a website stores in your browser and that are sent back to the website with each request.
        Local storage is similar, but its contents stay in your browser and are not sent to the server automatically.
        Privacy laws generally treat both the same way, so we ask for your consent before using local storage for anything
        that isn&apos;t strictly necessary.
      </p>

      <h2>What we store</h2>
      <div className="mt-4 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="bg-mist text-ink">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Name</th>
              <th scope="col" className="px-4 py-3 font-semibold">Category</th>
              <th scope="col" className="px-4 py-3 font-semibold">Purpose</th>
              <th scope="col" className="px-4 py-3 font-semibold">How long</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line text-ink-soft">
            {rows.map((r) => (
              <tr key={r.name}>
                <td className="px-4 py-3 align-top">
                  <code>{r.name}</code>
                </td>
                <td className="px-4 py-3 align-top">{r.category}</td>
                <td className="px-4 py-3 align-top">{r.purpose}</td>
                <td className="px-4 py-3 align-top">{r.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Neither item contains the text you type. Your text is never stored. Nothing is stored for optional purposes until
        you choose “Accept All” or turn on Preferences in Cookie Settings.
      </p>

      <h2>Analytics and marketing</h2>
      <p>
        We don&apos;t use any. If that ever changes, we will update this policy, add the category to Cookie Settings with
        it switched off by default, and load nothing until you agree.
      </p>

      <h2>Changing your choice</h2>
      <p>
        You can review or withdraw your consent at any time.{" "}
        <CookieSettingsButton className="font-medium text-accent underline underline-offset-2" label="Open Cookie Settings" />{" "}
        (also linked in the footer of every page). Turning off Preferences immediately deletes saved favorites. You can
        also delete all site data through your browser&apos;s settings, after which the consent banner will appear again.
      </p>

      <h2>More information</h2>
      <p>
        See our <Link href="/privacy-policy">Privacy Policy</Link> for how we handle information overall, or{" "}
        <Link href="/contact">contact us</Link> with questions.
      </p>
    </ContentPage>
  );
}
