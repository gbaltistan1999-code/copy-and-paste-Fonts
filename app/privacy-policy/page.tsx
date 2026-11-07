import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const description =
  "CopyFontStyle Privacy Policy: your text is converted in your browser and never sent to us. What little data is involved, browser storage, consent and your rights.";

export const metadata = pageMetadata({ title: "Privacy Policy", description, path: "/privacy-policy" });

// NOTE FOR SITE OWNER: have this policy reviewed for your jurisdiction before launch,
// and name your hosting provider in the "Hosting and server logs" section.

export default function PrivacyPolicyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      name="Privacy Policy"
      description={description}
      path="/privacy-policy"
      lastUpdated={siteConfig.legalLastUpdated}
    >
      <p>
        This policy explains what information is involved when you use {siteConfig.name} ({siteConfig.url}) and how it
        is handled. The short version: the font generator runs in your browser, we don&apos;t see what you type, and we
        don&apos;t use analytics, advertising or tracking cookies.
      </p>

      <h2>The text you type</h2>
      <p>
        Text you enter into any generator on this site is converted by JavaScript running on your own device. It is not
        sent to our server or any third party, it is not logged, and it is not saved. When you close or reload the page,
        your text is gone. We do not keep an input history.
      </p>

      <h2>Clipboard</h2>
      <p>
        When you press a Copy button, the site writes the styled text to your clipboard. It only writes when you ask it
        to, and it never reads from your clipboard.
      </p>

      <h2>Information we collect</h2>
      <p>
        We do not offer accounts, we do not run analytics or advertising services, and we do not set cookies. The site
        loads no third-party scripts, fonts or trackers.
      </p>

      <h3>Hosting and server logs</h3>
      <p>
        Like every website, this site is delivered by a hosting provider. When your browser requests a page, the
        provider&apos;s servers may automatically process technical information such as your IP address, browser type,
        the page requested and the time of the request. This is needed to deliver pages and protect against abuse, and it
        is handled under the hosting provider&apos;s own policies and retention periods. We don&apos;t use this
        information to identify or profile visitors.
      </p>

      <h3>When you email us</h3>
      <p>
        If you contact us by email, we receive your email address and whatever you include in your message. We use it
        only to reply and to fix any problem you report, and we keep it only as long as needed for that purpose. We do
        not add you to mailing lists or share your message.
      </p>

      <h2>Browser storage</h2>
      <p>The site stores a small amount of information in your browser&apos;s local storage, on your device only:</p>
      <ul>
        <li>
          <strong>Consent choice (necessary):</strong> remembers whether you accepted or rejected optional storage, so
          the banner doesn&apos;t reappear on every page.
        </li>
        <li>
          <strong>Favorite styles (preferences, optional):</strong> the IDs of font styles you mark as favorites, stored only if you
          allow preference storage. It contains style names such as “bold-serif”, never your text.
        </li>
      </ul>
      <p>
        This information is never sent to us. See the <Link href="/cookie-policy">Cookie Policy</Link> for details. You
        can change your choice at any time: <CookieSettingsButton className="font-medium text-accent underline underline-offset-2" label="open Cookie Settings" />.
        Turning off preferences deletes saved favorites. You can also clear site data in your browser settings.
      </p>

      <h2>External links</h2>
      <p>
        Some pages link to other websites, such as the Unicode Consortium. Those sites have their own privacy practices,
        which we don&apos;t control.
      </p>

      <h2>Children</h2>
      <p>
        The site is a general-audience tool and does not knowingly collect personal information from children. Because
        the generator collects no personal information, children can use it without providing any.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, laws such as the GDPR (EU), UK GDPR, or California privacy law may give you rights to
        access, correct or delete personal information about you, or to object to its use. Because the generator itself
        collects no personal information, these rights mainly apply to emails you send us. To make a request, use the
        details on our <Link href="/contact">contact page</Link>. You may also have the right to complain to your local
        data protection authority.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we add a feature that changes how information is handled, such as analytics, we will update this policy and
        the Cookie Policy before the change takes effect, and ask for consent where required. The date at the top shows
        when this policy last changed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Reach us through the <Link href="/contact">contact page</Link>.
      </p>
    </ContentPage>
  );
}
