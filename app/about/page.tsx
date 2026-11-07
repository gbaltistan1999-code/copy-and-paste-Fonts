import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { pageMetadata } from "@/lib/seo";
import { FONT_STYLES } from "@/lib/styles";

const description =
  "About CopyFontStyle: a free, privacy-friendly copy and paste fonts generator. How the tool works, what it can and can't do, and how we write our guides.";

export const metadata = pageMetadata({ title: "About CopyFontStyle", description, path: "/about" });

export default function AboutPage() {
  return (
    <ContentPage title="About CopyFontStyle" name="About" description={description} path="/about">
      <p>
        CopyFontStyle is a free website for turning ordinary text into stylish Unicode characters you can copy and paste
        into social profiles, messages and games. It currently offers {FONT_STYLES.length} styles, from bold and cursive
        to bubble letters, gothic Fraktur and glitch text, along with focused pages for individual styles and platforms.
      </p>

      <h2>What we focus on</h2>
      <ul>
        <li>
          <strong>Speed:</strong> you can start typing the moment the page loads, and results update as you type.
        </li>
        <li>
          <strong>Privacy:</strong> text is converted in your browser. We don&apos;t send, log or store what you type,
          and we don&apos;t run analytics or advertising.
        </li>
        <li>
          <strong>Accuracy:</strong> each style is built from the official Unicode character tables, including the
          letters that live outside the main blocks (for example ℎ, ℬ and ℭ), so the generator never outputs empty or
          unassigned characters.
        </li>
        <li>
          <strong>Honesty about limits:</strong> styled text depends on the fonts installed on each device, may be read
          poorly by screen readers, and isn&apos;t accepted everywhere. We explain these limits on every page instead of
          hiding them.
        </li>
      </ul>

      <h2>How the generator works</h2>
      <p>
        Each style is a mapping from normal letters and numbers to specific Unicode code points. When you type, the page
        runs that mapping in JavaScript on your device. Characters without a styled equivalent are left unchanged.
        Line styles (strikethrough, underline) add a combining mark after every character, and glitch text adds a
        repeatable set of random combining marks. The conversion code is covered by automated tests that check every
        style against uppercase and lowercase letters, digits, punctuation, emoji and non-Latin scripts.
      </p>

      <h2>How we write our guides</h2>
      <p>
        The explanations on this site are based on the Unicode Standard and its published code charts from the{" "}
        <a href="https://www.unicode.org/charts/" rel="noopener" target="_blank">
          Unicode Consortium
        </a>
        , and on the behavior of the generator itself. Platform rules, such as bio lengths and username restrictions,
        change from time to time; where we mention them, we say so and recommend checking the app. We don&apos;t
        publish made-up statistics, testimonials or reviews.
      </p>

      <h2>Independence</h2>
      <p>
        CopyFontStyle is not affiliated with, endorsed by or sponsored by Instagram, TikTok, Discord, the Unicode
        Consortium or any other company or organization mentioned on this site. Product names are used only to describe
        where styled text can be pasted.
      </p>

      <h2>Get in touch</h2>
      <p>
        Found a character that displays incorrectly, or have a style suggestion? Visit the{" "}
        <Link href="/contact">contact page</Link>. You can also read our <Link href="/privacy-policy">Privacy Policy</Link>{" "}
        and <Link href="/disclaimer">Disclaimer</Link>.
      </p>
    </ContentPage>
  );
}
