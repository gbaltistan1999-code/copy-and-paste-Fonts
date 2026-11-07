import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const description =
  "CopyFontStyle Disclaimer: styled text is made of Unicode characters, may not display everywhere, may be unreadable to screen readers, and is not affiliated with any platform.";

export const metadata = pageMetadata({ title: "Disclaimer", description, path: "/disclaimer" });

export default function DisclaimerPage() {
  return (
    <ContentPage
      title="Disclaimer"
      name="Disclaimer"
      description={description}
      path="/disclaimer"
      lastUpdated={siteConfig.legalLastUpdated}
    >
      <h2>Styled text is Unicode, not a font</h2>
      <p>
        The “fonts” on {siteConfig.name} are Unicode characters that resemble letters in different typefaces. They are
        not installable fonts, and they do not change the font of an app or website. How they look depends entirely on
        the device, operating system, app and fonts used to display them.
      </p>

      <h2>Display and compatibility</h2>
      <ul>
        <li>Some characters may appear as empty boxes, question marks or different symbols on some devices.</li>
        <li>The same text can look different on different phones, computers and apps.</li>
        <li>Combining marks (strikethrough, underline, glitch) may be positioned differently or removed by some apps.</li>
        <li>Styled letters may count as more than one character toward platform limits.</li>
      </ul>

      <h2>Accessibility and search</h2>
      <p>
        Screen readers and other assistive technologies may read styled characters by their technical names,
        mispronounce them, or skip them entirely. Search engines and in-app search usually treat styled text as different
        from the plain word. Do not use styled text for information people need to read, find or act on.
      </p>

      <h2>Platform rules</h2>
      <p>
        Social networks, games and other services may restrict, filter or remove unusual characters, and may treat
        excessive styling as spam. Any information we give about platform limits is general guidance, may be out of date,
        and is not a guarantee. Always follow each platform&apos;s current rules.
      </p>

      <h2>No affiliation</h2>
      <p>
        {siteConfig.name} is an independent website. It is not affiliated with, endorsed by or sponsored by Instagram,
        Meta, TikTok, ByteDance, Discord, X, Snapchat, Roblox, Epic Games, the Unicode Consortium or any other company or
        organization mentioned on the site. All trademarks belong to their respective owners.
      </p>

      <h2>General information only</h2>
      <p>
        Content on this site is provided for general information. We work to keep it accurate but make no guarantee
        that it is complete or current. Use of the site is also subject to our{" "}
        <Link href="/terms-and-conditions">Terms and Conditions</Link>.
      </p>
    </ContentPage>
  );
}
