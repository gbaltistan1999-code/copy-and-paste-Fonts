import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";
import type { FaqItem } from "@/types";

const description =
  "Answers to common questions about copy and paste fonts: how they work, why letters show as boxes, character limits, platform support, privacy and accessibility.";

export const metadata = pageMetadata({ title: "Copy and Paste Fonts FAQ", description, path: "/faq" });

const groups: { id: string; heading: string; items: FaqItem[] }[] = [
  {
    id: "basics",
    heading: "The basics",
    items: [
      {
        question: "What is the difference between a font and a Unicode character?",
        answer:
          "A font is a set of designs that tells a device how to draw characters. A Unicode character is the underlying letter or symbol itself. Copy and paste fonts swap your letters for different characters (for example 𝐀 instead of A), so the style travels with the text even though no font changes.",
      },
      {
        question: "Why does Unicode contain bold and italic letters?",
        answer:
          "Mathematicians use differently styled letters as distinct symbols, where a bold x and an italic x can mean different things. Unicode added these letters in the Mathematical Alphanumeric Symbols block for that purpose. Social media users later adopted them as decorative text.",
      },
      {
        question: "Why are some letters missing from certain styles?",
        answer:
          "Unicode only includes characters that had a real use when they were added. There is no small capital X, no superscript q in common fonts, no cursive or gothic digits, and subscript forms exist for only some letters. The generator leaves those characters unchanged rather than outputting something broken.",
      },
      {
        question: "Can I convert styled text back to normal text?",
        answer:
          "Not with this tool at the moment. The simplest way is to retype the text. Some text editors can normalize compatibility characters, which turns many styled letters back into plain ones.",
      },
    ],
  },
  {
    id: "compatibility",
    heading: "Display and compatibility",
    items: [
      {
        question: "Why do I see boxes, question marks or blank spaces?",
        answer:
          "The device or app has no font that includes those characters, so it shows a placeholder. Updating your operating system or app usually helps. Bold, italic and small caps are the most widely supported styles.",
      },
      {
        question: "Why does the text look different on my friend's phone?",
        answer:
          "Each device draws the characters with its own system fonts. iPhone, Android and Windows fonts have different designs, so the same characters can vary in shape, weight and size.",
      },
      {
        question: "Why does styled text use up character limits faster?",
        answer:
          "Many styled letters are outside the Basic Multilingual Plane and take two UTF-16 code units, which some apps count as two characters. Strikethrough, underline and glitch styles also add extra marks to every letter.",
      },
      {
        question: "Why didn't my strikethrough or underline line up?",
        answer:
          "Those styles add a combining mark after each character. The app's font decides where the mark goes, so lines can look dashed, offset, or missing over some characters.",
      },
    ],
  },
  {
    id: "platforms",
    heading: "Using fonts on platforms",
    items: [
      {
        question: "Why won't a platform accept my styled username?",
        answer:
          "Most platforms restrict usernames to letters, numbers and a few symbols so they can be typed, searched and kept unique. Use styled text in display names, bios and posts instead.",
      },
      {
        question: "Do styled hashtags work?",
        answer:
          "No. A hashtag written with styled characters is a different string of characters from the normal hashtag, so it won't link to the same posts. Type hashtags in plain text.",
      },
      {
        question: "Can using fancy fonts get my account banned?",
        answer:
          "Using styled characters is common, but each platform sets its own rules. Using them to impersonate others, evade filters or spam can break those rules. Heavy glitch text is often treated as spam in shared chats.",
      },
    ],
  },
  {
    id: "privacy",
    heading: "Privacy and accessibility",
    items: [
      {
        question: "Is my text sent anywhere?",
        answer:
          "No. All conversion happens in your browser, and your text is never sent to our server or stored. The generator also works if your connection drops after the page has loaded.",
      },
      {
        question: "What does the site store on my device?",
        answer:
          "Only your consent choice, and, if you allow preference storage, the list of styles you saved as favorites. No cookies are set. Details are in the Cookie Policy.",
      },
      {
        question: "How can I make styled text more accessible?",
        answer:
          "Use it sparingly for names and short headings, keep important details in plain text, and prefer an app's real formatting where it exists. Avoid glitch and lookalike styles for anything people need to read.",
      },
    ],
  },
];

export default function FaqPage() {
  const all = groups.flatMap((g) => g.items);
  return (
    <article className="mx-auto max-w-3xl px-4 pb-8 pt-5 sm:px-6">
      <JsonLd data={webPageJsonLd({ title: "Copy and Paste Fonts FAQ", description, path: "/faq" })} />
      <JsonLd data={faqJsonLd(all)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Copy and Paste Fonts FAQ</h1>
      <p className="mt-2 text-ink-soft sm:text-lg">
        Answers to the questions people ask most about styled Unicode text. Each{" "}
        <Link href="/cursive-fonts" className="text-accent underline underline-offset-2">
          style page
        </Link>{" "}
        also has its own questions about that style.
      </p>
      <nav aria-label="FAQ sections" className="mt-6 flex flex-wrap gap-2">
        {groups.map((g) => (
          <a
            key={g.id}
            href={`#${g.id}-heading`}
            className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft hover:border-accent hover:text-accent"
          >
            {g.heading}
          </a>
        ))}
      </nav>
      {groups.map((g) => (
        <Faq key={g.id} id={g.id} heading={g.heading} items={g.items} withSchema={false} />
      ))}
      <p className="mt-10 text-ink-soft">
        Still stuck?{" "}
        <Link href="/contact" className="text-accent underline underline-offset-2">
          Contact us
        </Link>{" "}
        or go back to the{" "}
        <Link href="/" className="text-accent underline underline-offset-2">
          font generator
        </Link>
        .
      </p>
    </article>
  );
}
