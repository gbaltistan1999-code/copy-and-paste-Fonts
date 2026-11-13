import type { FontPage } from "@/types";
import { FONT_STYLES, convertWith } from "@/lib/styles";

/** Inline examples are produced by the real converters, so they always match the generator output. */
const c = convertWith;
const SAMPLE = "Fancy Text";

/**
 * Content for the individual font style pages.
 * Each page answers a different set of questions; avoid copying sections
 * between pages and only changing the style name.
 */
export const stylePages: FontPage[] = [
  {
    slug: "fancy-text-generator",
    kind: "style",
    navLabel: "Fancy Text Generator",
    title: "Fancy Text Generator – Copy and Paste Cool Fonts (Free)",
    description:
      "Type once, get 80+ fancy text styles. Bold, cursive, bubble, gothic and more. Copy and paste them into Instagram, TikTok, Discord or anywhere. Free, no sign-up.",
    h1: "Fancy Text Generator",
    intro: "Type your text and copy any style you like. Works anywhere you can paste text.",
    styleIds: FONT_STYLES.map((s) => s.id),
    placeholder: "Type your text here",
    sections: [
      {
        heading: "Turn plain words into text that gets noticed",
        paragraphs: [
          "Plain text blends in. Whether it's an Instagram bio, a TikTok caption or your gaming name, the same default font everyone uses is easy to scroll past.",
          `Our fancy text generator fixes that in seconds. Type anything in the box above and you'll instantly see your words in dozens of styles: ${c("bold-serif", "bold")}, ${c("bold-script", "cursive")}, ${c("fraktur", "gothic")}, ${c("circled", "bubble")}, ${c("double-struck", "outline")}, ${c("tiny-caps", "small caps")} and plenty more. Find one you like, tap copy, and paste it wherever you want.`,
          "No app to download, no account to make, and nothing to pay. It works on your phone, tablet or computer.",
        ],
      },
      {
        heading: "How to use the fancy text generator",
        paragraphs: ["It takes about five seconds."],
        list: [
          "1. Type your text. Enter a name, a word or a whole sentence in the box at the top.",
          "2. Scroll the styles. Every style updates as you type, so you can compare them side by side.",
          "3. Copy and paste. Tap the copy button next to the style you like, then paste it into your bio, caption, message or username.",
          "Tip: if you're making a username or a short bio line, try a few styles before you settle. Some look bolder on a dark background, others read better in light mode.",
        ],
      },
      {
        heading: "Popular fancy text styles",
        paragraphs: ["There's a style for every mood. Here are some popular choices and where they work best."],
        list: [
          `Bold (${c("bold-serif", SAMPLE)}): headlines in bios, LinkedIn posts, making one word stand out.`,
          `Cursive script (${c("bold-script", SAMPLE)}): aesthetic bios, quotes, wedding and love captions.`,
          `Italic (${c("italic-sans", SAMPLE)}): soft emphasis, quotes, song titles.`,
          `Gothic, or Old English (${c("fraktur", SAMPLE)}): dark, edgy or vintage vibes and gaming names.`,
          `Double struck (${c("double-struck", SAMPLE)}): clean, modern usernames.`,
          `Bubble (${c("circled", SAMPLE)}): cute, playful captions.`,
          `Small caps (${c("tiny-caps", SAMPLE)}): minimal, aesthetic bios.`,
          `Monospace (${c("monospace", SAMPLE)}): a tech or typewriter look.`,
          `Wide, or vaporwave (${c("fullwidth", SAMPLE)}): retro and vaporwave posts.`,
          `Strikethrough (${c("strikethrough", SAMPLE)}): jokes and "changed my mind" moments.`,
          `Upside down (${c("upside-down", SAMPLE)}): pranks and attention-grabbing comments.`,
          `Decorated frames (${c("stars", SAMPLE)} or ${c("royal", SAMPLE)}): gaming names and profile headers.`,
        ],
      },
      {
        heading: "Where can you use fancy text?",
        paragraphs: [
          "If a box accepts text, it almost always accepts fancy text. Some games and apps limit which characters you can use in a username, though. If a style doesn't save, try a simpler one like bold or small caps.",
        ],
        list: [
          "Instagram: bios, display names, captions and comments. A bold or cursive name line makes a profile look finished.",
          "TikTok: bios and captions. Small caps and bubble text are popular for an aesthetic look.",
          "Discord: display names, server names, channel names and messages.",
          "X (Twitter), Threads and Facebook: bold a key phrase in a post so it doesn't get lost in the feed.",
          "Gaming: names and chat in games such as Free Fire, PUBG and Fortnite, and on Steam. Rules differ by game, and some (Roblox, for example) restrict usernames, so check that your name saves.",
          "WhatsApp and texting: status updates, group names and messages to friends.",
          "YouTube: comments and channel descriptions.",
        ],
      },
      {
        heading: "How does a fancy text generator work?",
        paragraphs: [
          "Here's the interesting part: these aren't really fonts.",
          "A normal font changes how letters look on your own screen, which is why you can't paste one into Instagram and have it stick. Fancy text uses Unicode instead. Unicode is the global standard that gives every character, in every language, its own code. It includes thousands of extra symbols, such as mathematical letters (𝐀, 𝒜, 𝔄), circled letters (Ⓐ) and small capitals (ᴀ).",
          "When you type into our generator, it swaps each normal letter for its matching Unicode lookalike. Because those characters are real text, not a font setting, they stay styled wherever you paste them. That's why the same fancy text works in your Instagram bio, a Discord chat and a text message.",
        ],
      },
      {
        heading: "A few honest tips before you paste",
        list: [
          "Use it for accents, not everything. One styled name or headline looks great. A whole paragraph of cursive is hard to read.",
          "Think about screen readers. Tools that read text aloud for blind and low-vision users often skip or mispronounce fancy characters. Keep important information, like contact details, in plain text.",
          "Searchability drops. People searching Instagram or TikTok for your name usually type normal letters. Keep your real name in plain text somewhere on your profile so you can still be found.",
          "Seeing boxes (□) instead of letters? That device or app doesn't support those characters yet. Pick a more common style, such as bold or italic, which work almost everywhere.",
          "Test before you commit. Paste into the app first and preview it, especially for usernames you can't change often.",
        ],
      },
    ],
    examples: [
      { label: "Bio name", text: "Aesthetic Soul", styleId: "bold-script" },
      { label: "Gaming name", text: "Shadow", styleId: "stars" },
      { label: "Profile header", text: "Queen", styleId: "royal" },
      { label: "Bold headline", text: "Big news", styleId: "bold-sans" },
      { label: "Minimal bio", text: "dreamer · artist", styleId: "tiny-caps" },
      { label: "Retro post", text: "Vaporwave", styleId: "fullwidth" },
    ],
    faqs: [
      {
        question: "What is a fancy text generator?",
        answer:
          "It's a free online tool that turns normal text into stylish versions, like bold, cursive or bubble letters, using Unicode characters. You copy the result and paste it anywhere.",
      },
      {
        question: "Is this fancy text generator free?",
        answer: "Yes. Every style is free to use, with no sign-up and no limit on how much you convert.",
      },
      {
        question: "Does fancy text work on Instagram and TikTok?",
        answer:
          "Yes. You can paste it into your bio, name, captions and comments on both apps. Most styles display correctly on iPhone and Android. Usernames (handles) are more restricted and usually accept only plain letters, numbers and a few symbols.",
      },
      {
        question: "Why do some letters show as boxes or question marks?",
        answer:
          "The app or device you're using doesn't have those characters yet. Switch to a widely supported style like bold, italic or small caps.",
      },
      {
        question: "Can I use fancy text in my game username?",
        answer:
          "Sometimes. It depends on the game: some accept many symbols, while others, like Roblox, restrict them. Paste the name in and check whether it saves.",
      },
      {
        question: "Is it safe to copy and paste fancy text?",
        answer:
          "Yes. It's just text made of standard Unicode characters. It contains no code or links and can't harm your device or account.",
      },
      {
        question: "Do you store what I type?",
        answer: "No. The conversion happens right in your browser, so your text never leaves your device.",
      },
    ],
    related: ["cursive-fonts", "bold-font", "bubble-letters", "instagram-fonts"],
  },

  {
    slug: "cursive-fonts",
    kind: "style",
    navLabel: "Cursive Fonts",
    title: "Cursive Fonts Copy and Paste – Script & Handwriting Text",
    description:
      "Turn any text into cursive fonts you can copy and paste. Elegant script and bold cursive letters for Instagram bios, names and captions, made from Unicode.",
    h1: "Cursive Fonts Copy and Paste",
    intro:
      "Type below to turn your words into flowing script letters. Every result is plain Unicode text, so you can paste it anywhere that accepts text: bios, captions, usernames, chat and documents.",
    styleIds: ["script", "bold-script", "royal", "butterfly", "stars", "italic-serif", "bold-italic-serif", "italic-sans"],
    placeholder: "Your name in cursive",
    sections: [
      {
        heading: "What makes these letters look cursive?",
        paragraphs: [
          "The cursive letters here come from the Mathematical Script and Mathematical Bold Script ranges of the Unicode Mathematical Alphanumeric Symbols block (U+1D49C to U+1D503). Mathematicians use these letters as variables, which is why they exist as separate characters rather than as a font setting.",
          "Eleven script letters (ℬ, ℰ, ℱ, ℋ, ℐ, ℒ, ℳ, ℛ, ℯ, ℊ and ℴ) were encoded years earlier in the Letterlike Symbols block. The generator uses those characters automatically, so you never get an empty box where a letter should be. On some devices those eleven letters look slightly thinner or larger than their neighbors because a different system font draws them.",
        ],
      },
      {
        heading: "Regular script or bold script?",
        list: [
          "Script (𝒽𝑒𝓁𝓁𝑜) is thin and delicate. It looks best at large sizes, such as a display name or a short bio line.",
          "Bold script (𝓱𝓮𝓵𝓵𝓸) has a heavier stroke and stays readable at small sizes, in comments and on low-resolution screens.",
          "Italic serif and italic sans styles are a quieter alternative when full script is too decorative.",
        ],
      },
      {
        heading: "Limitations to know before you paste",
        list: [
          "There are no cursive numbers in Unicode. Digits stay as normal digits.",
          "Letters are not joined like real handwriting. Each letter is a separate character, so spacing depends on the system font.",
          "Accented letters keep their accent as a separate combining mark, which some apps position imperfectly.",
          "Search engines and in-app search usually treat 𝓂𝒶𝓇𝒾𝒶 and maria as different words. Keep a plain-text version of your name somewhere people can find it.",
        ],
      },
      {
        heading: "Accessibility",
        paragraphs: [
          "Screen readers handle script letters inconsistently. Some read each one by its Unicode name (for example “mathematical script small m”), and some skip them entirely. Use cursive for a decorative word or name, not for instructions, links or anything a reader must understand.",
        ],
      },
    ],
    examples: [
      { label: "Bio line", text: "Good vibes only", styleId: "script" },
      { label: "Couple caption", text: "Forever & Always", styleId: "bold-script" },
      { label: "Display name", text: "Sophia", styleId: "royal" },
      { label: "Soft caption", text: "sweet dreams", styleId: "butterfly" },
      { label: "Signature", text: "With love", styleId: "bold-script" },
      { label: "Quote", text: "Stay wild", styleId: "stars" },
    ],
    faqs: [
      {
        question: "Can I use cursive fonts in my Instagram username?",
        answer:
          "Usually not. Instagram usernames are limited to letters, numbers, periods and underscores. You can typically use cursive letters in the Name field and in your bio, which are separate from the username.",
      },
      {
        question: "Why do some cursive letters look different from the rest?",
        answer:
          "Eleven script letters come from the older Letterlike Symbols block instead of the Mathematical Alphanumeric Symbols block. Your device may draw them with a different font, so they can look slightly thinner, larger or more upright.",
      },
      {
        question: "Is there a cursive version of numbers?",
        answer:
          "No. Unicode does not include script digits, so numbers stay as they are. You can mix in bold or double-struck numbers from the main generator if you want them to stand out.",
      },
      {
        question: "Are these real handwriting fonts?",
        answer:
          "No. They are Unicode characters that look like script letters. That is what lets them work in places where you cannot pick a font, but it also means letters are not connected like real handwriting.",
      },
    ],
    related: ["italic-font", "bold-font", "aesthetic-fonts", "instagram-fonts"],
  },

  {
    slug: "bold-font",
    kind: "style",
    navLabel: "Bold Font",
    title: "Bold Font Copy and Paste – Bold Text Generator",
    description:
      "Make bold text you can copy and paste into Instagram, X, LinkedIn, TikTok and more. Serif bold, sans bold and bold italic, converted instantly in your browser.",
    h1: "Bold Font Copy and Paste",
    intro:
      "Need bold text in an app that has no bold button? Type below and copy a bold version that keeps its weight wherever you paste it.",
    styleIds: ["bold-sans", "bold-serif", "bold-italic-sans", "bold-italic-serif", "bold-script", "bold-fraktur", "double-struck", "sparkles", "sniper"],
    placeholder: "Make this stand out",
    sections: [
      {
        heading: "Where is bold Unicode text useful?",
        paragraphs: [
          "Many places strip formatting or never offered it: Instagram captions and bios, X posts, LinkedIn headlines, TikTok bios, YouTube comments and game chat. Bold Unicode letters are separate characters, so the weight travels with the text instead of depending on a formatting option.",
          "Typical uses are a bold first line that acts as a headline, a few emphasized words in a long caption, or section labels such as 𝗦𝗲𝗿𝘃𝗶𝗰𝗲𝘀 and 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 in a bio.",
        ],
      },
      {
        heading: "Sans bold vs serif bold",
        list: [
          "Bold sans (𝗕𝗼𝗹𝗱) is closest to the bold you see in most app interfaces, so it blends in naturally.",
          "Bold serif (𝐁𝐨𝐥𝐝) has small feet on the letters and feels more formal or editorial.",
          "Bold italic variants (𝘽𝙤𝙡𝙙, 𝑩𝒐𝒍𝒅) add movement for slogans and quotes.",
          "Both bold sans and bold serif include digits (𝟭𝟮𝟯 and 𝟏𝟐𝟑), which is handy for prices, dates and lists.",
        ],
      },
      {
        heading: "When should you use real bold instead?",
        paragraphs: [
          "If the app supports formatting, use it. In Discord, Slack, WhatsApp and Telegram you can type markdown-style formatting such as *text* or **text** (the exact syntax varies by app), and Microsoft Word and Google Docs have a bold button. Real formatting is readable by screen readers and searchable, while Unicode bold is not.",
        ],
      },
      {
        heading: "Accessibility and search",
        list: [
          "Screen readers may read bold Unicode letters one by one, by name, or not at all. Avoid bolding entire posts.",
          "Text in bold Unicode is not found by searches for the normal word. Keep keywords and hashtags in plain text.",
          "Bold letters take two UTF-16 code units each, so some apps count them as two characters toward a limit.",
        ],
      },
    ],
    examples: [
      { label: "Caption headline", text: "NEW DROP", styleId: "bold-sans" },
      { label: "Bio label", text: "Contact", styleId: "bold-serif" },
      { label: "Price", text: "Now $19", styleId: "bold-sans" },
      { label: "Slogan", text: "Just do it better", styleId: "bold-italic-sans" },
      { label: "Gamer tag", text: "SNIPER", styleId: "sniper" },
      { label: "Announcement", text: "Giveaway", styleId: "sparkles" },
    ],
    faqs: [
      {
        question: "How do I make text bold on Instagram?",
        answer:
          "Instagram does not have a bold option for captions or bios. Type your text above, copy the bold version and paste it into Instagram. It will appear bold on most phones because the letters themselves are bold characters.",
      },
      {
        question: "Does bold text work on LinkedIn and X?",
        answer:
          "Bold Unicode letters generally display on LinkedIn and X because they are standard characters. Keep important keywords in plain text, since search on those platforms may not match styled letters.",
      },
      {
        question: "Why does my bold text count as more characters?",
        answer:
          "Bold letters are stored outside the Basic Multilingual Plane, so each one uses two UTF-16 code units. Apps that count code units instead of characters will count each bold letter as two.",
      },
      {
        question: "Can I make numbers bold?",
        answer:
          "Yes. Bold serif, bold sans and double-struck styles include bold digits. Bold italic styles do not, so numbers stay normal in those.",
      },
    ],
    related: ["italic-font", "cursive-fonts", "gothic-font", "discord-fonts"],
  },

  {
    slug: "italic-font",
    kind: "style",
    navLabel: "Italic Font",
    title: "Italic Font Copy and Paste – Italic Text Generator",
    description:
      "Create italic text to copy and paste where italics aren't available. Serif italic, sans italic and bold italic letters for captions, quotes and bios.",
    h1: "Italic Font Copy and Paste",
    intro:
      "Italics are perfect for quotes, titles and a gentle emphasis. Type below and copy slanted text that stays italic in apps without formatting options.",
    styleIds: ["italic-serif", "italic-sans", "bold-italic-serif", "bold-italic-sans", "script", "hearts", "music"],
    placeholder: "A little emphasis",
    sections: [
      {
        heading: "Common uses for italic text",
        list: [
          "Quotes and lyrics in a caption: 𝘐𝘧 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘥𝘳𝘦𝘢𝘮 𝘪𝘵…",
          "Titles of books, films and songs in a bio or comment.",
          "A softer kind of emphasis than bold, for one or two words.",
          "Inner thoughts or narration in role-play and game chat.",
        ],
      },
      {
        heading: "The missing italic h",
        paragraphs: [
          "The Mathematical Italic range has a hole where the lowercase h should be. Unicode already had ℎ (U+210E, the Planck constant symbol), so it was not encoded twice. The generator substitutes ℎ automatically. On most devices it matches the other letters; on a few it looks a bit different.",
          "The sans italic style has no such gap, which makes it a good choice if the h looks out of place on your device.",
        ],
      },
      {
        heading: "Serif italic vs sans italic",
        paragraphs: [
          "Serif italic (𝐼𝑡𝑎𝑙𝑖𝑐) imitates traditional book typography and has curved, calligraphic letters. Sans italic (𝘐𝘵𝘢𝘭𝘪𝘤) is a slanted version of a clean interface font and looks more modern. Neither range includes digits, so numbers remain upright.",
        ],
      },
      {
        heading: "Accessibility",
        paragraphs: [
          "Like other styled text, italic Unicode letters may be skipped or spelled out by screen readers. A short quote is fine; a whole italic paragraph can be hard to follow. Where an app supports real italics (for example *text* in many chat apps), prefer that.",
        ],
      },
    ],
    examples: [
      { label: "Quote", text: "Less is more", styleId: "italic-serif" },
      { label: "Song title", text: "Now playing", styleId: "music" },
      { label: "Soft emphasis", text: "really", styleId: "italic-sans" },
      { label: "Slogan", text: "Made with love", styleId: "hearts" },
      { label: "Book title", text: "The Great Gatsby", styleId: "italic-serif" },
      { label: "Strong emphasis", text: "Never give up", styleId: "bold-italic-sans" },
    ],
    faqs: [
      {
        question: "Why does the letter h look different in italic text?",
        answer:
          "The italic h comes from the Letterlike Symbols block (ℎ, the Planck constant) because the Mathematical Italic range has a reserved gap at that position. Some fonts draw it with a slightly different design.",
      },
      {
        question: "Can I italicize numbers?",
        answer:
          "Unicode has no italic digits in the Mathematical Alphanumeric Symbols block, so numbers stay upright. Bold sans or monospace digits are options if you want numbers to look different.",
      },
      {
        question: "Is italic text the same as cursive?",
        answer:
          "No. Italic letters are slanted versions of regular letters, while cursive (script) letters imitate handwriting with loops and flourishes. Try the cursive fonts page for the handwritten look.",
      },
      {
        question: "Will italic text show on all phones?",
        answer:
          "Most current phones and computers display these characters. Older devices or unusual apps may show boxes if their fonts lack the Mathematical Alphanumeric Symbols block.",
      },
    ],
    related: ["bold-font", "cursive-fonts", "small-caps-font", "underline-text"],
  },

  {
    slug: "bubble-letters",
    kind: "style",
    navLabel: "Bubble Letters",
    title: "Bubble Letters Copy and Paste – Circled Bubble Text Generator",
    description:
      "Copy and paste bubble letters: circled Ⓐ, black bubble 🅐 and squared 🄰 text for bios, nicknames and posts. Converted instantly in your browser.",
    h1: "Bubble Letters Copy and Paste",
    intro:
      "Wrap your letters in circles or boxes. Type below to get white bubbles, black bubbles, squares and more, all ready to copy.",
    styleIds: ["circled", "negative-circled", "squared", "negative-squared", "circle-overlay", "parenthesized", "boxed-brackets"],
    placeholder: "Bubble text",
    sections: [
      {
        heading: "Which Unicode characters make bubble letters?",
        list: [
          "White circled letters Ⓐ–ⓩ and numbers ①–⑨ come from the Enclosed Alphanumerics block (U+2460–U+24FF). Both uppercase and lowercase exist.",
          "Black (negative) circled letters 🅐–🅩, squared letters 🄰–🅉 and black squared letters 🅰–🆉 come from the Enclosed Alphanumeric Supplement (U+1F100–U+1F1FF). These exist only as capitals, so lowercase input becomes uppercase.",
          "The circle overlay style adds U+20DD COMBINING ENCLOSING CIRCLE after each character. It can circle any character, but many fonts position it poorly.",
        ],
      },
      {
        heading: "Why do some bubble letters turn into emoji?",
        paragraphs: [
          "🅰, 🅱, 🅾 and 🅿 are also emoji (the blood type and parking symbols). Phones that prefer emoji presentation draw them as colorful red or blue icons while the other letters stay black, which can make a word look uneven. If that bothers you, use the white circled or squared style instead.",
        ],
      },
      {
        heading: "Hand-drawn bubble letters vs Unicode bubble letters",
        paragraphs: [
          "“Bubble letters” also describes the puffy, rounded lettering people draw for posters and graffiti. That style can't be expressed as text characters. What you get here is the closest typed equivalent: letters enclosed in circles or squares that you can paste as text.",
        ],
      },
      {
        heading: "Readability and accessibility tips",
        list: [
          "Bubble letters work best for one or two short words. Long sentences become tiring to read.",
          "Screen readers usually read them as “circled latin capital letter A” or similar, which is slow for listeners.",
          "Circled numbers ① to ⑨ are handy for numbered steps in a caption; there is also ⓪ for zero.",
        ],
      },
    ],
    examples: [
      { label: "Nickname", text: "Bubbles", styleId: "circled" },
      { label: "Bold tag", text: "LIVE", styleId: "negative-circled" },
      { label: "Badge", text: "NEW", styleId: "negative-squared" },
      { label: "Steps", text: "Step 1 2 3", styleId: "circled" },
      { label: "Retro sign", text: "OPEN", styleId: "squared" },
      { label: "Box style", text: "cute", styleId: "boxed-brackets" },
    ],
    faqs: [
      {
        question: "Why are my black bubble letters all uppercase?",
        answer:
          "Unicode only defines capital letters for negative circled and squared characters. The generator converts lowercase input to the matching capital so nothing is lost.",
      },
      {
        question: "Why do some letters show as colored emoji?",
        answer:
          "A, B, O and P in black squares are also emoji. Devices that prefer emoji display them as colored icons. Choose another bubble style if you want a uniform look.",
      },
      {
        question: "Do bubble letters work in Roblox or Fortnite names?",
        answer:
          "Most games restrict display names to a limited character set and will reject or filter enclosed characters. In-game chat is more permissive but varies by game and region, so test before relying on it.",
      },
      {
        question: "Are there bubble numbers?",
        answer:
          "Yes. White circled numbers ⓪ to ⑨ and black circled numbers ⓿ to ❾ are included. Squared styles do not have numbers, so digits stay normal there.",
      },
    ],
    related: ["square-text", "aesthetic-fonts", "cute-fonts", "tiktok-fonts"],
  },

  {
    slug: "small-caps-font",
    kind: "style",
    navLabel: "Small Caps",
    title: "Small Caps Font Copy and Paste – Small Capital Letters",
    description:
      "Generate small caps font text (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ) you can copy and paste. Learn which small capital letters exist in Unicode and where they display well.",
    h1: "Small Caps Font Copy and Paste",
    intro:
      "Small capital letters look neat and understated. Type below for small caps, all small caps, superscript and subscript text.",
    styleIds: ["small-caps", "tiny-caps", "superscript", "subscript", "flowers"],
    placeholder: "Small but mighty",
    sections: [
      {
        heading: "Where do small caps characters come from?",
        paragraphs: [
          "Unicode has no dedicated small caps alphabet. These letters are borrowed from phonetic notation: most come from the IPA Extensions (ʀ, ɢ, ʜ) and Phonetic Extensions (ᴀ, ᴅ, ᴇ) blocks, with ꜰ and ꜱ from Latin Extended-D. Because they were designed for linguists, a few letters are missing.",
        ],
        list: [
          "There is no small capital X, so x stays the same.",
          "Q uses ǫ (q with ogonek), the closest widely available lookalike.",
          "“Small Caps” keeps your capital letters as full capitals, like traditional typography. “All Small Caps” turns every letter into a small capital.",
        ],
      },
      {
        heading: "Superscript and subscript",
        paragraphs: [
          "Superscript letters (ᵗⁱⁿʸ) are modifier letters used in phonetics. Nearly the whole alphabet exists, except a widely supported superscript q. Subscript is much more limited: Unicode only provides subscript forms for a, e, h, i, j, k, l, m, n, o, p, r, s, t, u, v and x, plus digits and a few math signs. Letters without a subscript form are left unchanged.",
          "Superscript and subscript numbers (x², H₂O) are well supported almost everywhere and are useful beyond decoration, for units, footnotes and simple formulas.",
        ],
      },
      {
        heading: "Display and accessibility",
        list: [
          "Small caps characters are in many common fonts, so they display on more devices than most decorative styles.",
          "Superscript letters can sit at slightly different heights because they come from several Unicode blocks.",
          "Screen readers may announce each letter by its phonetic name, such as “latin letter small capital A”.",
        ],
      },
    ],
    examples: [
      { label: "Minimal bio", text: "Photographer · NYC", styleId: "tiny-caps" },
      { label: "Name", text: "Olivia Grace", styleId: "small-caps" },
      { label: "Footnote", text: "1st edition", styleId: "superscript" },
      { label: "Formula", text: "H2O", styleId: "subscript" },
      { label: "Soft caption", text: "little things", styleId: "flowers" },
      { label: "Whisper", text: "psst", styleId: "superscript" },
    ],
    faqs: [
      {
        question: "Why doesn't the letter x change in small caps?",
        answer:
          "Unicode does not include a small capital X, so the generator leaves it as a regular lowercase x, which looks close at most sizes.",
      },
      {
        question: "What is the difference between small caps and superscript?",
        answer:
          "Small caps are capital-shaped letters at roughly lowercase height and sit on the baseline. Superscript letters are smaller still and raised above the baseline, like an exponent.",
      },
      {
        question: "Why are some letters missing from subscript?",
        answer:
          "Unicode only encodes subscript versions of certain letters that are used in phonetics and science. Letters such as b, c, d, f, g, q, w, y and z have no subscript form, so they stay normal.",
      },
      {
        question: "Is small caps text easier to read than other styles?",
        answer:
          "It is generally more legible than script or gothic styles because the letter shapes are simple. It still may not be read correctly by screen readers, so avoid it for essential information.",
      },
    ],
    related: ["tiny-text", "aesthetic-fonts", "italic-font", "instagram-fonts"],
  },

  {
    slug: "glitch-text",
    kind: "style",
    navLabel: "Glitch Text",
    title: "Glitch Text Copy and Paste – Corrupted Text Generator",
    description:
      "Create creepy glitch text with adjustable intensity and copy and paste it anywhere. Learn how combining marks work and where glitch text gets cut off.",
    h1: "Glitch Text Copy and Paste",
    intro:
      "Make your text look corrupted and creepy. Pick an intensity, type below and copy the glitched result.",
    styleIds: ["zalgo", "cross-above", "wavy-strike", "slash-through", "dots-below"],
    placeholder: "Something is wrong",
    sections: [
      {
        heading: "How does glitch text work?",
        paragraphs: [
          "Glitch text, often called Zalgo text after an internet horror meme, is ordinary text with many combining marks stacked on each letter. Combining marks (U+0300 to U+036F) are accents designed to attach to the previous character, such as the accent in é. Unicode doesn't limit how many can be stacked, so piling dozens onto each letter makes them spill above and below the line.",
          "The generator chooses marks from three groups (above, through and below the letter) and adds more as you raise the intensity. Results are repeatable: the same text and intensity always produce the same glitch, so the preview doesn't flicker while you type.",
        ],
      },
      {
        heading: "Choosing an intensity",
        list: [
          "Low adds a light scatter of marks. It stays readable and rarely overlaps other lines.",
          "Medium is the classic glitch look, good for usernames and short titles.",
          "High stacks many marks per letter. It looks dramatic but can cover nearby text and may be trimmed or blocked by some apps.",
        ],
      },
      {
        heading: "Where does glitch text cause problems?",
        list: [
          "Character limits: each glitched letter can contain 5 to 20 or more code points, so a short word can exceed a bio or name limit.",
          "Some apps strip excess combining marks or limit how tall text can render, which cuts the effect.",
          "Many communities treat heavy Zalgo as spam because it covers other messages. Check the rules before posting it in shared chats.",
          "Copying glitch text into search boxes or forms rarely matches the plain word.",
        ],
      },
      {
        heading: "Accessibility",
        paragraphs: [
          "Glitch text is the least accessible style on this site. Screen readers may read every accent or skip the word entirely, and the visual noise can be difficult for people with dyslexia or low vision. Use it for a single decorative word, never for information people need.",
        ],
      },
    ],
    examples: [
      { label: "Horror title", text: "Run", styleId: "zalgo" },
      { label: "Username", text: "ERROR 404", styleId: "zalgo" },
      { label: "Static", text: "signal lost", styleId: "wavy-strike" },
      { label: "Corrupted", text: "access denied", styleId: "cross-above" },
    ],
    faqs: [
      {
        question: "Is Zalgo text safe to use?",
        answer:
          "Yes, it is just text with extra accent marks and cannot harm a device. Very heavy glitch text can slow down or visually break some apps, which is why some platforms trim it.",
      },
      {
        question: "Why does my glitch text look different after pasting?",
        answer:
          "Apps decide how many stacked marks to draw and how much vertical space a line gets. Some clip the marks, some remove extras, and fonts place marks differently.",
      },
      {
        question: "Can I use glitch text in Discord?",
        answer:
          "Glitch text pastes into Discord messages and nicknames, but many servers have rules or moderation bots against Zalgo because it can cover other messages. Use low intensity and follow the server's rules.",
      },
      {
        question: "Why is my glitch text over the character limit?",
        answer:
          "Each mark is a separate character. A five-letter word at high intensity can contain over a hundred code points, so platforms with character limits fill up fast.",
      },
    ],
    related: ["zalgo-text", "upside-down-text", "strikethrough-text", "discord-fonts"],
  },

  {
    slug: "upside-down-text",
    kind: "style",
    navLabel: "Upside Down Text",
    title: "Upside Down Text Copy and Paste – Flip Text Generator",
    description:
      "Flip text upside down and copy and paste it anywhere. See which characters can be turned over and why some capitals and digits look imperfect.",
    h1: "Upside Down Text Copy and Paste",
    intro: "Type below to flip your text upside down, mirror it, or simply reverse it.",
    styleIds: ["upside-down", "mirrored", "reversed"],
    placeholder: "Flip me over",
    sections: [
      {
        heading: "How is upside-down text made?",
        paragraphs: [
          "Unicode can't rotate characters. Instead, each letter is swapped for a different character that happens to look like it upside down, and the order of the text is reversed so it reads correctly when the screen is turned 180°.",
          "Most replacements come from the International Phonetic Alphabet, for example ɐ (turned a), ǝ (turned e), ɥ (turned h), ɯ (turned m) and ʎ (turned y). Several capitals come from the Lisu script (ꓭ, ꓷ, ꓘ) and other blocks.",
        ],
      },
      {
        heading: "Upside down vs mirrored vs reversed",
        list: [
          "Upside down: rotated 180°. Letters are flipped vertically and horizontally, and the order is reversed.",
          "Mirrored: flipped left to right, like text seen in a mirror. Letters such as b and d swap places.",
          "Reversed: the same letters written backwards, with no character substitution.",
        ],
      },
      {
        heading: "Known imperfections",
        list: [
          "Not every capital has a convincing upside-down twin. Q, for example, uses an approximation.",
          "Letters that look the same upside down (o, s, x, z, H, I, N, O, S, X, Z) are left as they are.",
          "Upside-down digits use lookalikes such as Ɛ for 3 and ㄣ for 4, which can look uneven in some fonts.",
          "Emoji and characters with no flipped lookalike stay upright, but their order is reversed with the rest of the text.",
        ],
      },
      {
        heading: "Fun uses and a caution",
        paragraphs: [
          "Flipped text is a playful way to write “Australia mode” jokes, puzzle answers and hidden spoilers. Because it uses characters from phonetic and other scripts, screen readers will read it as a string of unrelated sounds or symbols, so don't flip anything important.",
        ],
      },
    ],
    examples: [
      { label: "Joke", text: "Greetings from Australia", styleId: "upside-down" },
      { label: "Spoiler", text: "The butler did it", styleId: "upside-down" },
      { label: "Mirror", text: "mirror mirror", styleId: "mirrored" },
      { label: "Backwards", text: "stressed", styleId: "reversed" },
    ],
    faqs: [
      {
        question: "Why is upside-down text reversed?",
        answer:
          "Turning text 180° flips both the letters and their order. Reversing the sequence makes it read correctly when you rotate your phone.",
      },
      {
        question: "Can every letter be turned upside down?",
        answer:
          "Most lowercase letters have good lookalikes. A few capitals and digits only have approximations because Unicode has no exact rotated version of them.",
      },
      {
        question: "Does upside-down text work in usernames?",
        answer:
          "Platforms that restrict usernames to basic Latin letters and numbers will reject it. Display names and bios are more likely to accept it.",
      },
      {
        question: "What does mirrored text mean?",
        answer:
          "Mirrored text is flipped horizontally, as it would appear in a mirror. It reads right to left and swaps letters like b and d.",
      },
    ],
    related: ["mirror-text", "glitch-text", "strikethrough-text", "tiktok-fonts"],
  },

  {
    slug: "strikethrough-text",
    kind: "style",
    navLabel: "Strikethrough Text",
    title: "Strikethrough Text Copy and Paste – Cross Out Text Generator",
    description:
      "Cross out text with a line through it and copy and paste it anywhere. Strikethrough, slashed and wavy strike styles made with Unicode combining marks.",
    h1: "Strikethrough Text Copy and Paste",
    intro: "Type below to cross out your text. Copy a solid line, a slash or a wavy strike.",
    styleIds: ["strikethrough", "slash-through", "wavy-strike", "cross-above"],
    placeholder: "cross this out",
    sections: [
      {
        heading: "How does strikethrough text work?",
        paragraphs: [
          "Each character is followed by U+0336 COMBINING LONG STROKE OVERLAY, a mark that draws a horizontal line through the character before it. The slashed style uses U+0338 COMBINING LONG SOLIDUS OVERLAY and the wavy style uses U+0334 COMBINING TILDE OVERLAY.",
          "The generator adds the mark after every character, including spaces, so the line continues between words. Line breaks are left untouched so multi-line text stays tidy.",
        ],
      },
      {
        heading: "Popular ways to use it",
        list: [
          "Playful self-correction: “I am ~~not~~ obsessed with coffee.”",
          "Showing an old price next to a sale price.",
          "Ticking off a list in a bio or a note.",
          "Joke edits and “what I meant to say” captions.",
        ],
      },
      {
        heading: "Display issues",
        list: [
          "In some fonts the line is drawn in short segments, leaving small gaps between characters.",
          "The line may sit slightly too high or low, especially over capitals and digits.",
          "Each character doubles in length, so struck-through text uses twice as much of a character limit.",
        ],
      },
      {
        heading: "Use native strikethrough where you can",
        paragraphs: [
          "Discord, WhatsApp, Telegram, Slack and most document editors support real strikethrough formatting (for example ~~text~~ in Discord or ~text~ in WhatsApp). Real formatting is clearer to screen readers and stays searchable. Unicode strikethrough is best for places with no formatting at all, such as Instagram, TikTok and many game chats. Screen readers often ignore the combining mark entirely, so a listener may hear the crossed-out word as if it weren't crossed out.",
        ],
      },
    ],
    examples: [
      { label: "Self-correction", text: "diet starts tomorrow", styleId: "strikethrough" },
      { label: "Old price", text: "$49", styleId: "strikethrough" },
      { label: "Rejected", text: "nope", styleId: "slash-through" },
      { label: "Wobbly", text: "maybe", styleId: "wavy-strike" },
    ],
    faqs: [
      {
        question: "How do I strikethrough text on Instagram?",
        answer:
          "Instagram has no strikethrough button. Type your text above, copy the strikethrough version and paste it into your caption, comment or bio.",
      },
      {
        question: "Why is there a gap in the line?",
        answer:
          "The line is drawn separately for each character. Some fonts draw a line that is narrower than the character, which leaves small gaps.",
      },
      {
        question: "Will people with screen readers know the text is crossed out?",
        answer:
          "Often not. Many screen readers ignore the combining stroke and read the word normally, so don't rely on strikethrough alone to communicate meaning.",
      },
      {
        question: "Can I cross out only part of a sentence?",
        answer:
          "Yes. Convert just the words you want crossed out, copy them, and paste them into the rest of your normal text.",
      },
    ],
    related: ["underline-text", "glitch-text", "discord-fonts", "upside-down-text"],
  },

  {
    slug: "underline-text",
    kind: "style",
    navLabel: "Underline Text",
    title: "Underline Text Copy and Paste – Underline Generator",
    description:
      "Underline text anywhere with Unicode: single, double, overline and dotted underline styles you can copy and paste into bios, captions and messages.",
    h1: "Underline Text Copy and Paste",
    intro: "Type below to add a line under (or over) your text, then copy it into any app.",
    styleIds: ["underline", "double-underline", "overline", "dots-below"],
    placeholder: "underline me",
    sections: [
      {
        heading: "Which characters draw the line?",
        list: [
          "Underline: U+0332 COMBINING LOW LINE after each character.",
          "Double underline: U+0333 COMBINING DOUBLE LOW LINE.",
          "Overline: U+0305 COMBINING OVERLINE draws the line above the letters.",
          "Dotted underline: U+0324 COMBINING DIAERESIS BELOW places two dots under each character.",
        ],
      },
      {
        heading: "How does it look on different devices?",
        paragraphs: [
          "Because every character gets its own short line, the underline can look continuous in one app and dashed in another. Letters with descenders (g, j, p, q, y) may collide with the line. Apps with tighter line spacing can clip the line on the bottom row of text.",
        ],
      },
      {
        heading: "A usability note: underlines look like links",
        paragraphs: [
          "On the web, underlined text usually means “this is a link”. Underlining in a caption or bio can make people tap expecting something to happen. Consider bold or italic for emphasis, and keep underlines for headings or short labels.",
        ],
      },
      {
        heading: "Native underline options",
        paragraphs: [
          "Discord supports __text__ for underline, and document editors have an underline button. Use those where available: the formatting is cleaner and screen readers can treat the text as normal words. Unicode underline is useful for places with no formatting, such as Instagram, TikTok and many game chats.",
        ],
      },
    ],
    examples: [
      { label: "Heading", text: "About me", styleId: "underline" },
      { label: "Important", text: "Read this", styleId: "double-underline" },
      { label: "Label", text: "Links below", styleId: "overline" },
      { label: "Soft accent", text: "hello there", styleId: "dots-below" },
    ],
    faqs: [
      {
        question: "Why does the underline look dashed?",
        answer:
          "Each character draws its own line segment. Depending on the font and letter spacing, those segments may not meet, which looks like a dashed line.",
      },
      {
        question: "Can I underline text on TikTok or Instagram?",
        answer:
          "Neither app has an underline option for bios or captions. Copy the underlined text from this page and paste it in; it usually displays on modern phones.",
      },
      {
        question: "Does underline work with emoji?",
        answer:
          "The generator adds the line after each complete emoji so emoji aren't broken, but most emoji fonts ignore the line, so emoji appear without it.",
      },
      {
        question: "Is underlined text bad for accessibility?",
        answer:
          "Screen readers usually ignore the underline mark, so the meaning it adds is lost. Underlines can also be mistaken for links. Use it sparingly.",
      },
    ],
    related: ["strikethrough-text", "bold-font", "italic-font", "discord-fonts"],
  },

  {
    slug: "gothic-font",
    kind: "style",
    navLabel: "Gothic Font",
    title: "Gothic Font Copy and Paste – Fraktur & Blackletter Text",
    description:
      "Copy and paste gothic text in Fraktur and bold blackletter styles. Learn which letters come from Letterlike Symbols and how to keep it readable.",
    h1: "Gothic Font Copy and Paste",
    intro:
      "Give your text a dramatic blackletter look. Type below for Fraktur, bold gothic and related styles.",
    styleIds: ["fraktur", "bold-fraktur", "crown", "double-struck"],
    placeholder: "Dark Kingdom",
    sections: [
      {
        heading: "Fraktur, blackletter and “Old English”",
        paragraphs: [
          "Blackletter is the family of dense, angular scripts used across Europe in medieval manuscripts and early printing. Fraktur is the blackletter style that remained in use in German-speaking countries for centuries. Many people call any blackletter font “Old English”, the name of a well-known digital typeface.",
          "The gothic letters here come from the Mathematical Fraktur (U+1D504–U+1D537) and Mathematical Bold Fraktur (U+1D56C–U+1D59F) ranges. Mathematicians use them for special sets and algebraic structures.",
        ],
      },
      {
        heading: "The five borrowed capitals",
        paragraphs: [
          "Regular Fraktur ℭ, ℌ, ℑ, ℜ and ℨ were already in the Letterlike Symbols block, so the Mathematical Fraktur range leaves gaps where they would be. The generator fills those gaps automatically. Bold Fraktur has no gaps, so it is the most consistent option if those five letters look different on your device.",
        ],
      },
      {
        heading: "Keeping gothic text readable",
        list: [
          "Blackletter capitals are hard to tell apart (𝔄, 𝔘 and 𝔑, or ℑ and 𝔍). Write names in Title Case rather than ALL CAPS.",
          "Gothic text works best for short titles, clan names and headers, not paragraphs.",
          "There are no Fraktur digits; numbers stay normal.",
          "Bold Fraktur holds up better at small sizes than the thin regular version.",
        ],
      },
      {
        heading: "Accessibility",
        paragraphs: [
          "Screen readers may announce Fraktur letters by name (“mathematical fraktur capital D”) or skip them. Combined with lower visual legibility, gothic text is best kept to decorative words.",
        ],
      },
    ],
    examples: [
      { label: "Clan name", text: "Dark Knights", styleId: "fraktur" },
      { label: "Title", text: "Midnight Club", styleId: "bold-fraktur" },
      { label: "Royal", text: "King", styleId: "crown" },
      { label: "Tattoo idea", text: "Forever Loyal", styleId: "bold-fraktur" },
      { label: "Metal band", text: "Iron Hearts", styleId: "fraktur" },
      { label: "Outline", text: "Legend", styleId: "double-struck" },
    ],
    faqs: [
      {
        question: "Is gothic text the same as the Old English font?",
        answer:
          "They share the same blackletter look. “Old English” is the popular name taken from typefaces; the characters here are Unicode Fraktur letters, which is what lets them be copied and pasted. See our Old English font page for that style.",
      },
      {
        question: "Why do C, H, I, R and Z look different?",
        answer:
          "Those regular Fraktur capitals come from the Letterlike Symbols block, which your device may draw with a different font. Bold Fraktur avoids the issue.",
      },
      {
        question: "Can I use gothic text for a tattoo design?",
        answer:
          "You can use it to preview wording, but the appearance depends on your device's fonts. A tattoo artist will work from a proper blackletter typeface or hand lettering.",
      },
      {
        question: "Does gothic text work in game names?",
        answer:
          "It depends on the game. Many limit names to basic characters. Chat, clan descriptions and social profiles are more likely to accept Fraktur letters.",
      },
    ],
    related: ["old-english-font", "bold-font", "tattoo-fonts", "glitch-text"],
  },

  {
    slug: "aesthetic-fonts",
    kind: "style",
    navLabel: "Aesthetic Fonts",
    title: "Aesthetic Fonts Copy and Paste – Soft & Decorated Text",
    description:
      "Aesthetic fonts to copy and paste: decorated frames, soft separators, wide letters and lookalike alphabets for bios, captions and usernames.",
    h1: "Aesthetic Fonts Copy and Paste",
    intro:
      "Soft, cute and vaporwave styles for bios and captions. Type below and pick the mood that fits.",
    styleIds: [
      "fullwidth", "lenticular", "sparkles", "hearts", "flowers", "butterfly", "royal", "stars",
      "corner-brackets", "music", "wave-between", "heart-between", "dot-between", "spaced", "tiny-caps",
      "asian-style", "currency", "faux-cyrillic", "cute-clouds", "cute-bow", "attitude-vintage", "squiggle-thai",
    ],
    placeholder: "aesthetic vibes",
    sections: [
      {
        heading: "The vaporwave look: fullwidth text",
        paragraphs: [
          "Wide, evenly spaced text like ａｅｓｔｈｅｔｉｃ uses the Halfwidth and Fullwidth Forms block (U+FF01–U+FF5E). These characters were created so Latin letters line up with Chinese, Japanese and Korean characters in a grid, and they became the signature of vaporwave art and music. Fullwidth also has punctuation and digits, and the generator converts spaces to the matching ideographic space.",
        ],
      },
      {
        heading: "Decorations and what they are",
        list: [
          "꧁ and ꧂ are punctuation marks from the Javanese script, and ༺ ༻ are Tibetan ornaments. They are popular decorative frames for names.",
          "✿, ♡, ★, ✩ and ♪ are dingbats and symbols that are widely supported.",
          "『』 and 【】 are East Asian brackets that add a neat frame without changing your letters.",
          "Separators such as ♥, ≋ and · are inserted between letters of each word, leaving the spaces between words intact.",
        ],
      },
      {
        heading: "Lookalike alphabets",
        paragraphs: [
          "Styles like Asian Style (卂乃匚), Currency (₳฿₵) and Faux Cyrillic (ДБҀ) replace Latin letters with characters from other writing systems or symbol sets that resemble them. They look fun, but to anyone who reads those scripts, or to a screen reader, they are unrelated words or symbols. Faux Cyrillic in particular can read as nonsense to Russian speakers. Use them for decoration, not for messages that need to be understood.",
        ],
      },
      {
        heading: "Tips for an aesthetic bio",
        list: [
          "Combine one decorative style with plain text, for example a framed name and a normal description underneath.",
          "Use line breaks to separate ideas; most apps keep them when you paste.",
          "Keep your username plain so people can find and tag you.",
        ],
      },
    ],
    examples: [
      { label: "Vaporwave", text: "aesthetic", styleId: "fullwidth" },
      { label: "Retro title", text: "night drive", styleId: "lenticular" },
      { label: "Cute name", text: "Lily", styleId: "flowers" },
      { label: "Soft vibes", text: "stay soft", styleId: "hearts" },
      { label: "Sparkly", text: "main character", styleId: "sparkles" },
      { label: "Spaced", text: "dream", styleId: "spaced" },
    ],
    faqs: [
      {
        question: "Which aesthetic font is the most readable?",
        answer:
          "Styles that keep normal letters and only add a frame or separators, such as Corner Brackets, Hearts Between or Dotted, are the easiest to read. Lookalike alphabets are the hardest. For wide vaporwave text, see our vaporwave text page.",
      },
      {
        question: "Are the decorations emoji?",
        answer:
          "Most are not. Symbols like ✿, ♡ and ꧁ are ordinary text characters, so they take the color of your text. A few may display as emoji on some devices.",
      },
      {
        question: "Is it okay to use letters from other languages as decoration?",
        answer:
          "It is common, but keep in mind that people who read those scripts will see real characters rather than English letters. Avoid lookalike alphabets for anything that needs to be read clearly.",
      },
      {
        question: "Why does fullwidth text look normal on my computer?",
        answer:
          "Some fonts draw fullwidth Latin letters only slightly wider than normal. The effect is usually more obvious on phones.",
      },
    ],
    related: ["vaporwave-text", "cute-fonts", "cursive-fonts", "instagram-fonts"],
  },
];
