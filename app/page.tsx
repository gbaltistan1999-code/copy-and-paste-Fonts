import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Type, Zap } from "lucide-react";
import { ExamplesGrid } from "@/components/examples-grid";
import { Faq } from "@/components/faq";
import { FontGenerator } from "@/components/font-generator";
import { JsonLd } from "@/components/json-ld";
import { PageLinks } from "@/components/page-links";
import { homeFaqs, homeSamples } from "@/data/home";
import { platformPages, stylePages } from "@/data/pages";
import { pageMetadata, webApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { FONT_STYLES } from "@/lib/styles";

const TITLE = `Copy and Paste Fonts – 50+ Cool Font Styles | ${siteConfig.name}`;
const DESCRIPTION =
  "Type once and get 50+ cool fonts to copy and paste: bold, cursive, gothic, bubble, aesthetic and more for Instagram, TikTok, Discord and games. Free and private.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/", absoluteTitle: true });

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title: TITLE, description: DESCRIPTION, path: "/" })} />
      <JsonLd
        data={webApplicationJsonLd({
          name: `${siteConfig.name} Font Generator`,
          path: "/",
          description: "A free browser-based generator that converts text into Unicode font styles for copying and pasting.",
        })}
      />

      <section className="bg-gradient-to-br from-accent-soft via-white to-orange-50">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pt-14">
          <div className="text-center">
            <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Copy and Paste{" "}
              <span className="bg-gradient-to-r from-accent via-fuchsia-600 to-orange-600 bg-clip-text text-transparent">
                Fonts
              </span>
            </h1>
            <p className="mt-2 text-balance font-display text-lg text-ink-soft sm:mt-4 sm:text-2xl">
              Fancy Text Generator for Bios, Captions &amp; Chats
            </p>
            <p className="mx-auto mt-3 hidden max-w-2xl leading-relaxed text-ink-soft sm:block sm:text-lg">
              Type once and get {FONT_STYLES.length} font styles you can copy and paste anywhere: Instagram, TikTok,
              Discord, WhatsApp and more.
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3" aria-label="Highlights">
              <li className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft shadow-sm sm:px-5 sm:py-2.5 sm:text-sm">
                <Type size={15} aria-hidden className="text-accent" />
                <span className="text-accent">{FONT_STYLES.length}</span> Font Styles
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft shadow-sm sm:px-5 sm:py-2.5 sm:text-sm">
                <BadgeCheck size={15} aria-hidden className="text-accent" />
                <span className="text-accent">100%</span> Free
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft shadow-sm sm:px-5 sm:py-2.5 sm:text-sm">
                <Zap size={15} aria-hidden className="text-orange-600" />
                Instant Copy
              </li>
            </ul>
          </div>
          <div className="mt-5 sm:mt-8">
            <FontGenerator placeholder="Type your text here" autoFocus inputLabel="Type text to convert into fonts" />
          </div>
        </div>
      </section>

      <div className="cv-auto mx-auto max-w-4xl px-4 sm:px-6">
        <div className="prose-content">
          <h2>What are copy and paste fonts?</h2>
          <p>
            Copy and paste fonts are stylish versions of ordinary letters, like <strong>𝐛𝐨𝐥𝐝</strong>, 𝒸𝓊𝓇𝓈𝒾𝓋𝑒,
            𝔤𝔬𝔱𝔥𝔦𝔠 or ⓑⓤⓑⓑⓛⓔ, that you can paste into places where you normally can&apos;t pick a font: Instagram
            bios, TikTok captions, Discord nicknames, game chat and text messages.
          </p>
          <p>
            They aren&apos;t fonts in the usual sense. Each styled letter is a separate character from the{" "}
            <a href="https://home.unicode.org/" rel="noopener" target="_blank">
              Unicode standard
            </a>
            , the system every modern device uses to represent text. That&apos;s why they survive copying and pasting:
            you&apos;re pasting different characters, not formatting.
          </p>

          <h2>How to use this font generator</h2>
          <ol>
            <li>
              <strong>Type or paste</strong> your text into the box at the top of the page.
            </li>
            <li>
              <strong>Browse the styles.</strong> Every style updates as you type. Use the category tabs to jump to a style family,
              and tap the heart to save favorites at the top.
            </li>
            <li>
              <strong>Tap Copy</strong> next to the style you like. The button confirms when it&apos;s copied.
            </li>
            <li>
              <strong>Paste</strong> it into your bio, caption, message or document.
            </li>
          </ol>

          <h2>How copy and paste fonts work</h2>
          <p>
            Unicode assigns a number, called a code point, to every character. Alongside the normal letters A to Z, it
            includes many letter-like characters created for other purposes:
          </p>
          <ul>
            <li>
              <strong>Mathematical Alphanumeric Symbols</strong> (U+1D400–U+1D7FF): bold, italic, script, Fraktur,
              double-struck, sans-serif and monospace letters that mathematicians use as distinct symbols.
            </li>
            <li>
              <strong>Enclosed Alphanumerics</strong>: circled and squared letters and numbers such as Ⓐ, 🄰 and ①.
            </li>
            <li>
              <strong>Halfwidth and Fullwidth Forms</strong>: wide letters designed to line up with East Asian text.
            </li>
            <li>
              <strong>Phonetic and modifier letters</strong>: small capitals (ᴀʙᴄ) and superscripts (ᵃᵇᶜ) used in
              linguistics.
            </li>
            <li>
              <strong>Combining marks</strong>: characters that attach to the previous letter, used here for
              strikethrough, underline and glitch text.
            </li>
          </ul>
          <p>
            The generator swaps each letter you type for its matching character in the chosen set. Characters with no
            styled equivalent, such as most punctuation, emoji and non-Latin scripts, are left exactly as they are.
            Your device then draws those characters using whatever system fonts it has, so the same text can look a
            little different on an iPhone, an Android phone and a Windows PC.
          </p>
        </div>

        <section aria-labelledby="samples-heading" className="mt-12">
          <h2 id="samples-heading" className="text-2xl font-bold tracking-tight">
            Ready-to-copy font samples
          </h2>
          <p className="mt-2 text-ink-soft">Just need something quick? Copy one of these.</p>
          <ExamplesGrid items={homeSamples} />
        </section>

        <div className="prose-content">
          <h2>Where copy and paste fonts work</h2>
          <p>Styled Unicode text generally displays in any field that accepts ordinary text, including:</p>
          <ul>
            <li>
              <strong>Social profiles:</strong> names and bios on Instagram, TikTok, X, Facebook, Threads and LinkedIn.
            </li>
            <li>
              <strong>Posts and comments:</strong> captions, replies and comments on most social networks.
            </li>
            <li>
              <strong>Messaging apps:</strong> WhatsApp, Telegram, Messenger, iMessage and Discord.
            </li>
            <li>
              <strong>Games:</strong> in-game chat and some profile fields, though many games filter unusual characters.
            </li>
          </ul>
          <p>They often <strong>don&apos;t</strong> work in:</p>
          <ul>
            <li>Usernames and handles, which most platforms restrict to letters, numbers and a few symbols.</li>
            <li>Email addresses, domain names, passwords and most form fields that validate input.</li>
            <li>Game display names with strict character filters.</li>
            <li>Hashtags and search: a styled word is not the same word to a search engine.</li>
          </ul>

          <h2>Why some characters appear as boxes or question marks</h2>
          <p>
            If you see ▯, �, or empty squares instead of styled letters, the device viewing the text has no font that
            includes those characters. This is sometimes called “tofu”. It happens most on older operating systems,
            some smart TVs and game consoles, and with rare symbols. The text itself isn&apos;t broken: open it on a newer
            device and it will usually display.
          </p>
          <p>
            For the widest compatibility, stick to bold, italic, sans-serif, small caps and circled styles. Lookalike
            alphabets, enclosing marks and heavy glitch text are the most likely to cause problems.
          </p>

          <h2>Accessibility: use styled text thoughtfully</h2>
          <p>
            Screen readers, used by people who are blind or have low vision, don&apos;t treat styled characters as normal
            letters. Depending on the device, a word like 𝓗𝓮𝓵𝓵𝓸 may be read as a string of names (“mathematical bold
            script capital H…”), skipped completely, or mispronounced. Styled text can also be harder to read for people
            with dyslexia.
          </p>
          <ul>
            <li>Use styled text for short decorative words, names and headings, not whole posts.</li>
            <li>Keep links, dates, prices, instructions and contact details in plain text.</li>
            <li>Where an app has real formatting (bold, italic, headings), prefer it.</li>
          </ul>
          <p>
            On this site, every preview includes a hidden plain-text label so screen reader users hear the style name
            and the original words instead of a list of symbols.
          </p>
        </div>

        <section aria-labelledby="styles-heading" className="mt-12">
          <h2 id="styles-heading" className="text-2xl font-bold tracking-tight">
            Popular font styles
          </h2>
          <p className="mt-2 text-ink-soft">
            Each style page has a focused generator plus details on how that style works and where it displays well.
          </p>
          <PageLinks slugs={stylePages.map((p) => p.slug)} />
        </section>

        <section aria-labelledby="platforms-heading" className="mt-12">
          <h2 id="platforms-heading" className="text-2xl font-bold tracking-tight">
            Fonts for your favorite platforms
          </h2>
          <p className="mt-2 text-ink-soft">
            Every platform has its own limits for names, bios and usernames. These guides collect the styles that suit
            each one, with tips on character limits and hashtags.
          </p>
          <PageLinks slugs={platformPages.map((p) => p.slug)} />
        </section>

        <Faq items={homeFaqs} />

        <div className="prose-content">
          <h2>Start styling your text</h2>
          <p>
            Scroll back up, type a word and try a few styles. For more depth on one look, open a style page such as{" "}
            <Link href="/cursive-fonts">cursive fonts</Link>, <Link href="/gothic-font">gothic text</Link> or{" "}
            <Link href="/bubble-letters">bubble letters</Link>. If something doesn&apos;t display the way you expect,
            our <Link href="/faq">FAQ</Link> explains the most common compatibility questions.
          </p>
        </div>
      </div>
    </>
  );
}
