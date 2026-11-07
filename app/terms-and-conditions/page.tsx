import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const description =
  "Terms and Conditions for using CopyFontStyle: acceptable use of generated text, intellectual property, compatibility limits and limitation of liability.";

export const metadata = pageMetadata({ title: "Terms and Conditions", description, path: "/terms-and-conditions" });

// NOTE FOR SITE OWNER: these terms intentionally omit a governing-law and
// dispute-resolution clause. Add one after legal review for your jurisdiction.

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms and Conditions"
      name="Terms and Conditions"
      description={description}
      path="/terms-and-conditions"
      lastUpdated={siteConfig.legalLastUpdated}
    >
      <p>
        These terms apply to your use of {siteConfig.name} ({siteConfig.url}). By using the site you agree to them. If
        you don&apos;t agree, please don&apos;t use the site.
      </p>

      <h2>1. The service</h2>
      <p>
        {siteConfig.name} provides free tools that convert text into Unicode characters resembling different font
        styles, along with information about how those characters work. The tools run in your browser. No account is
        required.
      </p>

      <h2>2. Acceptable use</h2>
      <p>You agree not to use the site or the text it generates to:</p>
      <ul>
        <li>send spam or bulk unsolicited messages;</li>
        <li>impersonate another person, brand or organization, or create lookalike names to deceive people;</li>
        <li>carry out phishing, fraud or other scams, including disguising links or misleading text;</li>
        <li>evade the rules, filters or moderation of other platforms, or get around bans;</li>
        <li>harass, threaten or abuse others, or break any applicable law;</li>
        <li>interfere with the site, for example by attempting to overload it or access it in unauthorized ways.</li>
      </ul>
      <p>
        You are responsible for following the rules of every platform where you paste generated text. Some platforms
        restrict or remove unusual characters.
      </p>

      <h2>3. Your text and generated output</h2>
      <p>
        We claim no rights in the text you type or the styled text you create. The characters themselves are part of the
        Unicode Standard and can be used freely. You are responsible for the content you create and share.
      </p>

      <h2>4. Our content</h2>
      <p>
        The site&apos;s design, written content and code are owned by {siteConfig.name} or its licensors. You may share
        links to any page. Please don&apos;t copy substantial portions of our written guides to republish elsewhere
        without permission. Third-party names such as Instagram, TikTok and Discord are trademarks of their respective
        owners and are used only for description.
      </p>

      <h2>5. Compatibility and accuracy</h2>
      <p>
        Styled text is displayed using the fonts available on each device and app. We can&apos;t guarantee that any
        character will display correctly, be accepted by a particular platform, be read correctly by assistive
        technology, or remain supported in the future. Information about platform limits is provided for general
        guidance and may be out of date. See the <Link href="/disclaimer">Disclaimer</Link> for more.
      </p>

      <h2>6. Availability</h2>
      <p>
        We aim to keep the site available but may change, suspend or discontinue any part of it at any time without
        notice.
      </p>

      <h2>7. Disclaimer of warranties</h2>
      <p>
        The site and its tools are provided “as is” and “as available”, without warranties of any kind, express or
        implied, including fitness for a particular purpose and non-infringement, to the fullest extent permitted by
        law.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {siteConfig.name} will not be liable for any indirect, incidental,
        special or consequential damages, or for any loss of data, accounts, profits or reputation, arising from your use
        of the site or of generated text, including the rejection, removal or misdisplay of text on other platforms.
        Nothing in these terms limits liability that cannot be limited under applicable law.
      </p>

      <h2>9. Links to other sites</h2>
      <p>We may link to other websites. We are not responsible for their content or practices.</p>

      <h2>10. Changes to these terms</h2>
      <p>
        We may update these terms. The date at the top shows the latest version. Continuing to use the site after a
        change means you accept the updated terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these terms? Use our <Link href="/contact">contact page</Link>.
      </p>
    </ContentPage>
  );
}
