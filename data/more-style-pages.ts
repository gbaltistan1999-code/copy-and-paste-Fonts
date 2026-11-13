import type { FontPage } from "@/types";
import { convertWith } from "@/lib/styles";

/** Inline examples are produced by the real converters, so they always match the generator output. */
const c = convertWith;

/**
 * Second batch of style pages. Each one owns a keyword that used to be a secondary
 * keyword on an older page (see docs/keyword-map.md), so keep the angle distinct:
 * do not repeat the older page's explanations here.
 */
export const moreStylePages: FontPage[] = [
  {
    slug: "cute-fonts",
    kind: "style",
    navLabel: "Cute Fonts",
    title: "Cute Fonts Copy and Paste – Kawaii Text with Hearts & Bows",
    description:
      "Cute fonts to copy and paste: kawaii text with hearts, bows, clouds, paws and flowers. Make soft, sweet names and captions for Instagram, TikTok and chats.",
    h1: "Cute Fonts Copy and Paste",
    intro: "Sweet, soft and a little bit kawaii. Type your text below and copy a cute style with hearts, bows, flowers or paws.",
    styleIds: [
      "cute-bow", "hearts", "cute-heart-eyes", "cute-clouds", "cute-flowers", "flowers", "butterfly",
      "cute-paws", "cute-pets", "cute-sparkle-strike", "heart-between", "sparkles", "circled", "tiny-caps",
    ],
    placeholder: "hello cutie",
    sections: [
      {
        heading: "What makes a font look cute?",
        paragraphs: [
          "Cute text is mostly about softness. Rounded letters, small sizes and gentle decorations read as friendly, while sharp, heavy letters read as serious. The styles on this page lean on three tricks:",
        ],
        list: [
          `Small, rounded letters, like tiny caps (${c("tiny-caps", "so sweet")}) or bubble letters (${c("circled", "cute")}).`,
          `Soft frames around your words, such as hearts (${c("hearts", "love you")}) or a bow (${c("cute-bow", "princess")}).`,
          `A little scatter between the letters (${c("heart-between", "xoxo")}) so a short word feels playful.`,
        ],
      },
      {
        heading: "Cute text ideas you can use today",
        list: [
          "A pet account name with paws: perfect for dog and cat profiles.",
          "A soft bio line with a bow or clouds above your normal description.",
          "Birthday and best-friend captions with hearts or flowers.",
          "Group chat names that make everyone smile when they open the chat.",
          "Story text: paste a cute word over a photo using the text tool in Instagram or TikTok.",
        ],
      },
      {
        heading: "Emoji vs symbols: why some decorations change color",
        paragraphs: [
          "Some decorations here are emoji (🎀, 🐾, 🌸) and some are plain symbols (♡, ✿, ☁︎). Emoji always show in full color and look slightly different on iPhone, Android and Windows, because each company draws its own emoji. Plain symbols take the color of the surrounding text, so they look the same in light and dark mode. If you want a style that looks identical everywhere, pick one built from symbols, like Soft Hearts or Flowers.",
        ],
      },
      {
        heading: "Keep it cute, keep it readable",
        list: [
          "Use one cute style per line. Mixing three decorations in one name usually looks cluttered.",
          "Short words work best. A cute frame around one or two words looks cleaner than around a full sentence.",
          "Emoji count as two or more characters in many apps, so a decorated name fills a character limit faster than you expect.",
          "Screen readers read emoji aloud by name (“ribbon”, “paw prints”), so a heavily decorated name can sound long. Keep important info plain.",
        ],
      },
    ],
    examples: [
      { label: "Soft bio", text: "just a soft girl", styleId: "cute-bow" },
      { label: "Pet account", text: "Biscuit the pup", styleId: "cute-paws" },
      { label: "BFF caption", text: "my favorite human", styleId: "hearts" },
      { label: "Dreamy", text: "daydreamer", styleId: "cute-clouds" },
      { label: "Garden", text: "bloom", styleId: "cute-flowers" },
      { label: "Tiny & sweet", text: "stay sweet", styleId: "tiny-caps" },
    ],
    faqs: [
      {
        question: "What is the cutest font to copy and paste?",
        answer:
          "It depends on the mood. For a soft look, try Soft Hearts or Pink Bow. For something playful, try Paws & Rainbows or bubble letters. Type your word above and compare them side by side.",
      },
      {
        question: "Why do the emoji look different on my friend's phone?",
        answer:
          "Apple, Google, Samsung and Microsoft each draw their own emoji. The character is the same, but the picture changes by device. Plain symbols like ♡ and ✿ look more consistent.",
      },
      {
        question: "Can I use cute fonts in my Instagram name?",
        answer:
          "Yes, your display name accepts cute text and emoji. Your @username does not; it only allows letters, numbers, periods and underscores.",
      },
      {
        question: "What does kawaii mean?",
        answer:
          "Kawaii is the Japanese word for cute. Online, it describes a soft, sweet style with pastel colors, hearts, bows and small rounded letters.",
      },
    ],
    related: ["aesthetic-fonts", "bubble-letters", "instagram-fonts", "tiny-text"],
  },

  {
    slug: "tiny-text",
    kind: "style",
    navLabel: "Tiny Text",
    title: "Tiny Text Generator – Superscript Copy and Paste (ᵗⁱⁿʸ)",
    description:
      "Make tiny text you can copy and paste. Turn words into superscript ᵗⁱⁿʸ letters, subscript and mini caps for bios, captions, comments and usernames.",
    h1: "Tiny Text Generator",
    intro: "Shrink your words to ᵗⁱⁿʸ letters. Type below and copy superscript, subscript or mini caps text.",
    styleIds: ["superscript", "subscript", "tiny-caps", "small-caps", "flowers"],
    placeholder: "tiny text",
    sections: [
      {
        heading: "How small can text get?",
        paragraphs: [
          "Unicode has no “font size”, so tiny text is made from characters that are drawn small by design. There are three sizes to choose from, smallest first:",
        ],
        list: [
          `Subscript (${c("subscript", "tiny")}): sits below the line, like the 2 in H₂O. It's the smallest, but only some letters exist.`,
          `Superscript (${c("superscript", "tiny text")}): raised above the line, like an exponent. Almost the whole alphabet is available, which makes it the go-to tiny text.`,
          `Mini caps (${c("tiny-caps", "tiny text")}): capital-shaped letters at lowercase height. Bigger than superscript, but the most readable.`,
        ],
      },
      {
        heading: "Which letters are missing?",
        paragraphs: [
          "Superscript letters were added to Unicode for phonetics, not for decoration, so the set has a gap: there is no widely supported superscript q, and it stays normal in the output. A few superscript capitals exist too, but not a full set, so the generator uses lowercase superscript for everything.",
          "Subscript is far more limited. Only a, e, h, i, j, k, l, m, n, o, p, r, s, t, u, v and x have subscript forms. Other letters stay normal size, so subscript works best for short words that only use those letters, or for numbers and chemical formulas.",
        ],
      },
      {
        heading: "Fun ways to use tiny text",
        list: [
          `Whisper jokes: “I love Mondays ${c("superscript", "not really")}”.`,
          "A tiny tagline under your name in a bio.",
          "Quiet captions, where the photo should do the talking.",
          "Footnotes and ordinals that look right: 1ˢᵗ, 2ⁿᵈ, 3ʳᵈ.",
          "Math and science: x², m³, CO₂ and H₂O display correctly almost everywhere.",
        ],
      },
      {
        heading: "Before you go tiny",
        list: [
          "Tiny text is hard to read on small screens, especially for people with low vision. Use it for asides, not your main message.",
          "Superscript letters come from different Unicode blocks, so some may sit a little higher or lower than others in certain fonts.",
          "Screen readers often read each tiny letter separately or call it “modifier letter small t”, so a tiny sentence can sound confusing.",
        ],
      },
    ],
    examples: [
      { label: "Whisper", text: "just kidding", styleId: "superscript" },
      { label: "Tiny tagline", text: "living my best life", styleId: "superscript" },
      { label: "Ordinal", text: "1st place", styleId: "superscript" },
      { label: "Chemistry", text: "H2O and CO2", styleId: "subscript" },
      { label: "Mini caps", text: "quiet hours", styleId: "tiny-caps" },
      { label: "Soft note", text: "small joys", styleId: "flowers" },
    ],
    faqs: [
      {
        question: "How do I make my text tiny?",
        answer:
          "Type your text in the box above and copy the Superscript (Tiny Text) result. Paste it anywhere: bios, comments, captions or messages.",
      },
      {
        question: "Why doesn't the letter q get smaller?",
        answer:
          "Unicode has no widely supported superscript q, so the generator leaves it as a normal q rather than showing a broken character.",
      },
      {
        question: "Is tiny text the same as small caps?",
        answer:
          "No. Small caps are capital letters at lowercase height and sit on the line. Tiny text (superscript) is smaller still and floats above the line. For small caps on their own, see our small caps font page.",
      },
      {
        question: "Does tiny text work on TikTok and Instagram?",
        answer:
          "Yes. Superscript letters paste into bios, captions and comments on both apps and display on most modern phones.",
      },
    ],
    related: ["small-caps-font", "aesthetic-fonts", "cute-fonts", "instagram-fonts"],
  },

  {
    slug: "old-english-font",
    kind: "style",
    navLabel: "Old English Font",
    title: "Old English Font Copy and Paste – Old English Text Generator",
    description:
      "Copy and paste Old English font text 𝕷𝖎𝖐𝖊 𝕿𝖍𝖎𝖘 for names, signs, certificates and headers. Classic blackletter lettering you can paste anywhere.",
    h1: "Old English Font Copy and Paste",
    intro: "Get the classic Old English lettering seen on newspaper mastheads, diplomas and jerseys. Type below and copy.",
    styleIds: ["bold-fraktur", "fraktur", "crown", "royal"],
    placeholder: "Old English",
    sections: [
      {
        heading: "Why is it called “Old English”?",
        paragraphs: [
          "The name comes from typefaces, not from history. Digital fonts such as Old English Text MT, which has shipped with Microsoft Office for decades, made “Old English” the everyday name for dense, pointed blackletter lettering.",
          "Funnily enough, the Old English language (the English of Beowulf, roughly 450–1150 AD) wasn't written in this style. Scribes used a rounder Insular script. Blackletter spread across Europe later, in the 12th century and after, and became the look of early printed books.",
        ],
      },
      {
        heading: "Where you've seen Old English lettering",
        list: [
          "Newspaper mastheads: many classic papers still use blackletter names.",
          "Diplomas and certificates, where it signals tradition and formality.",
          "Sports jerseys, caps and streetwear logos.",
          "Tattoos, especially names, dates and script across the chest or arms.",
          "Pub signs, beer labels, metal bands and wedding stationery.",
        ],
      },
      {
        heading: "Using Old English text online",
        paragraphs: [
          `The generator uses bold blackletter (${c("bold-fraktur", "Old English")}) first because it is closest to the heavy look of the Old English typeface and holds up at small sizes. The lighter version (${c("fraktur", "Old English")}) feels more delicate and works for larger headers.`,
          "Because these are Unicode characters rather than a font file, you can paste them straight into a profile name, a caption or a document title, and they keep their shape.",
        ],
      },
      {
        heading: "Tips for a clean result",
        list: [
          "Write in Title Case. All-caps blackletter is very hard to read.",
          "Keep it to a few words, such as a name, a team or a title.",
          "Numbers have no blackletter version and stay normal, so dates mix two styles. That's fine on screen, but keep it in mind for designs.",
          "For a printed certificate or sign, a real Old English typeface in your design app will look sharper than pasted characters.",
        ],
      },
    ],
    examples: [
      { label: "Masthead", text: "The Daily Herald", styleId: "bold-fraktur" },
      { label: "Certificate", text: "Certificate of Achievement", styleId: "fraktur" },
      { label: "Jersey name", text: "Martinez", styleId: "bold-fraktur" },
      { label: "Family name", text: "The Johnsons", styleId: "fraktur" },
      { label: "Royal title", text: "Kingdom", styleId: "crown" },
      { label: "Fancy name", text: "Lady Grace", styleId: "royal" },
    ],
    faqs: [
      {
        question: "Is this the real Old English font?",
        answer:
          "It's the same blackletter look built from Unicode characters instead of a font file. That's what lets you copy and paste it into apps that don't let you change fonts.",
      },
      {
        question: "What is the difference between Old English and gothic fonts?",
        answer:
          "They are the same family of lettering. “Old English” is the popular name taken from typefaces; “gothic” and “blackletter” are the broader terms. Our gothic font page covers the Unicode details.",
      },
      {
        question: "Can I use Old English text for a tattoo?",
        answer:
          "It's handy for previewing wording and spacing. Your tattoo artist will redraw it from a proper typeface or by hand, so bring the text, not a screenshot, as the final design.",
      },
      {
        question: "Why don't numbers change to Old English?",
        answer:
          "Unicode has no blackletter digits, so numbers stay in your normal font.",
      },
    ],
    related: ["gothic-font", "tattoo-fonts", "calligraphy-font", "bold-font"],
  },

  {
    slug: "calligraphy-font",
    kind: "style",
    navLabel: "Calligraphy Font",
    title: "Calligraphy Font Copy and Paste – Elegant Script Text",
    description:
      "Elegant calligraphy fonts to copy and paste for invitations, quotes, signatures and bios. Flowing script letters that keep their style anywhere you paste.",
    h1: "Calligraphy Font Copy and Paste",
    intro: "Write like a calligrapher without a pen. Type below and copy elegant, flowing script text.",
    styleIds: ["bold-script", "script", "royal", "butterfly", "attitude-vintage", "bold-italic-serif", "italic-serif"],
    placeholder: "With Love",
    sections: [
      {
        heading: "Calligraphy vs cursive",
        paragraphs: [
          "Cursive is everyday joined-up handwriting. Calligraphy is the art of beautiful lettering: thick and thin strokes, generous loops and capitals with flourishes. Online, both are made from the same Unicode script letters, but calligraphy is about how you use them: fewer words, more space and a formal tone.",
          `For a calligraphy feel, start with bold script (${c("bold-script", "Calligraphy")}). Its thicker strokes look closer to ink from a broad-nib pen. Regular script (${c("script", "Calligraphy")}) is lighter, like a fine pointed pen.`,
        ],
      },
      {
        heading: "Where calligraphy text looks best",
        list: [
          "Wedding hashtags, save-the-date posts and invitation previews.",
          "Quotes and verses in captions or on story backgrounds.",
          "A signature-style name at the top of a bio.",
          "Shop names for bakeries, florists, boutiques and handmade sellers.",
          "Greeting messages: Happy Birthday, Congratulations, Thank You.",
        ],
      },
      {
        heading: "Make it look hand-lettered",
        list: [
          "Capitalize the first letter of each word. Script capitals carry the flourishes; that's where the elegance is.",
          "Keep it short. Two to five words looks like lettering; a paragraph looks like a wall of loops.",
          `Frame it: a decorated style such as ${c("royal", "Forever")} turns a name into a header.`,
          "Pair it with plain text underneath, the way a wedding invitation pairs a script name with simple details.",
        ],
      },
      {
        heading: "A note on the regular script letters",
        paragraphs: [
          "Regular script borrows several letters (ℬ, ℰ, ℱ, ℋ, ℐ, ℒ, ℳ, ℛ, ℯ, ℊ, ℴ) from an older Unicode block, so on some devices they look slightly different from their neighbors. Bold script has no borrowed letters, which is another reason it's first on this page.",
        ],
      },
    ],
    examples: [
      { label: "Wedding", text: "Emma & James", styleId: "bold-script" },
      { label: "Quote", text: "Be kind always", styleId: "script" },
      { label: "Signature", text: "Sophia Rose", styleId: "bold-script" },
      { label: "Shop name", text: "Sweet Crumbs Bakery", styleId: "script" },
      { label: "Greeting", text: "Happy Birthday", styleId: "royal" },
      { label: "Vintage", text: "Thank You", styleId: "attitude-vintage" },
    ],
    faqs: [
      {
        question: "Can I copy and paste calligraphy into Word or Google Docs?",
        answer:
          "Yes, it pastes as text. For printed invitations, though, a real calligraphy font installed in your editor will look sharper and give you more letter shapes.",
      },
      {
        question: "Is calligraphy text the same as cursive text?",
        answer:
          "Online they use the same script characters. Calligraphy is about style: short, formal phrases with flourished capitals. For more joined-up script styles, see our cursive fonts page.",
      },
      {
        question: "Why do some capital letters look different?",
        answer:
          "Regular script borrows a few letters from the Letterlike Symbols block, which some devices draw in another font. Bold script avoids this.",
      },
      {
        question: "Will calligraphy text work in my Instagram bio?",
        answer:
          "Yes, it works in your display name, bio and captions. Keep your @username in plain letters, since Instagram doesn't allow special characters there.",
      },
    ],
    related: ["cursive-fonts", "old-english-font", "tattoo-fonts", "italic-font"],
  },

  {
    slug: "tattoo-fonts",
    kind: "style",
    navLabel: "Tattoo Fonts",
    title: "Tattoo Fonts Copy and Paste – Preview Tattoo Lettering",
    description:
      "Preview tattoo fonts by copying and pasting your words in script, Old English, typewriter and minimalist styles. Compare lettering before you book an artist.",
    h1: "Tattoo Fonts Copy and Paste",
    intro:
      "Planning a name, date or quote tattoo? Type it below to preview it in popular tattoo lettering styles, then copy your favorites.",
    styleIds: ["bold-script", "script", "bold-fraktur", "fraktur", "monospace", "tiny-caps", "double-struck", "italic-serif", "royal"],
    placeholder: "Forever",
    sections: [
      {
        heading: "Popular tattoo lettering styles",
        list: [
          `Script (${c("bold-script", "Forever")}): the classic for names, love quotes and memorial pieces.`,
          `Old English / blackletter (${c("bold-fraktur", "Forever")}): bold and traditional, common for surnames, chest pieces and neighborhood tattoos.`,
          `Typewriter (${c("monospace", "Forever")}): minimal and literary, popular for short quotes, coordinates and dates.`,
          `Fine-line minimal (${c("tiny-caps", "Forever")}): small, clean capitals for delicate placements like wrists and fingers.`,
          `Serif italic (${c("italic-serif", "Forever")}): soft and elegant without the loops of a script.`,
        ],
      },
      {
        heading: "How to use this page to plan a tattoo",
        list: [
          "1. Type the exact wording, including capitals and punctuation.",
          "2. Compare the styles side by side. Notice how the length and shape of the word change.",
          "3. Copy two or three favorites into your notes and look at them over a few days. A design you still love next week is a good sign.",
          "4. Bring the wording and your style choice to your artist. They will redraw it at the right size for the spot you want.",
        ],
      },
      {
        heading: "Things to check before you get inked",
        list: [
          "Spelling, twice. Have someone else read it too, especially for names and words in another language.",
          "Size: thin script and tiny letters blur together over the years as ink spreads. Your artist can tell you the smallest size that will stay readable.",
          "Letter shapes: in blackletter, some capitals are hard to tell apart. Make sure a stranger can read your word.",
          "Dates and numbers: Unicode script and blackletter have no matching digits, so numbers here stay plain. Your artist can draw matching numerals.",
        ],
      },
      {
        heading: "Why the preview isn't the final design",
        paragraphs: [
          "The letters on this page are Unicode characters, and each phone or computer draws them with its own font. The same word can look slightly different on your screen and your artist's. Treat this as a way to choose a style and wording. The final lettering should be drawn or set by your tattoo artist from a proper typeface.",
        ],
      },
    ],
    examples: [
      { label: "Name", text: "Isabella", styleId: "bold-script" },
      { label: "Surname", text: "Rodriguez", styleId: "bold-fraktur" },
      { label: "Quote", text: "This too shall pass", styleId: "monospace" },
      { label: "Minimal", text: "breathe", styleId: "tiny-caps" },
      { label: "Memorial", text: "Always with me", styleId: "script" },
      { label: "One word", text: "Strength", styleId: "fraktur" },
    ],
    faqs: [
      {
        question: "What is the most popular tattoo font?",
        answer:
          "Script and Old English (blackletter) are the classics, followed by typewriter and fine-line minimal lettering. The best choice depends on the size and placement of your tattoo.",
      },
      {
        question: "Can I show these letters to my tattoo artist?",
        answer:
          "Yes, use them to show the style and wording you like. Your artist will redraw the lettering so it fits your body and ages well.",
      },
      {
        question: "Why don't the numbers match the style?",
        answer:
          "Unicode has no script or blackletter digits, so numbers stay normal here. A tattoo artist can draw numbers that match the letters.",
      },
      {
        question: "Which tattoo font stays readable the longest?",
        answer:
          "Bolder, simpler lettering with space between letters ages best. Very thin scripts and tiny letters can blur over time, so ask your artist about minimum sizes.",
      },
    ],
    related: ["old-english-font", "calligraphy-font", "cursive-fonts", "monospace-font"],
  },

  {
    slug: "graffiti-font",
    kind: "style",
    navLabel: "Graffiti Font",
    title: "Graffiti Font Copy and Paste – Street Style Text",
    description:
      "Graffiti-style text you can copy and paste: bold blocks, black bubbles, pixel fades and wild squiggles for gamer tags, crew names and street-style bios.",
    h1: "Graffiti Font Copy and Paste",
    intro: "Give your name some street style. Type below and copy bold, blocky and wild text inspired by graffiti.",
    styleIds: [
      "negative-squared", "negative-circled", "bold-fraktur", "attitude-pixel", "squiggle-hooks", "fantasy-arrows",
      "attitude-badge", "bold-sans", "fullwidth", "sniper",
    ],
    placeholder: "Street King",
    sections: [
      {
        heading: "Can you copy and paste real graffiti letters?",
        paragraphs: [
          "Not quite, and it's worth knowing why. Real graffiti lettering, such as wildstyle, throw-ups and bubble pieces, is drawn by hand with overlaps, arrows, 3D shadows and color. Unicode has no characters like that, so no website can give you true graffiti letters as copyable text.",
          "What you can get is the attitude. The styles on this page borrow the bold blocks, heavy outlines and chaotic shapes that graffiti is known for, built from real Unicode characters that paste anywhere.",
        ],
      },
      {
        heading: "Pick a style for your vibe",
        list: [
          `Block letters (${c("negative-squared", "TAG")}): like stencils or stickers slapped on a wall. Capitals only.`,
          `Throw-up bubbles (${c("negative-circled", "TAG")}): filled circles that echo quick bubble-letter throw-ups.`,
          `Heavy letters (${c("bold-fraktur", "Crew")}): the blackletter look used in many tags and streetwear logos.`,
          `Pixel fade (${c("attitude-pixel", "Crew")}): a spray-paint fade on each side of your name.`,
          `Wild squiggles (${c("squiggle-hooks", "Crew")}): hooked, twisted letters closest to the chaos of wildstyle.`,
        ],
      },
      {
        heading: "Where graffiti text fits",
        list: [
          "Gamer tags, clan names and crew names in Discord.",
          "Streetwear, skate and music profile bios.",
          "Hype captions for dance, rap or sneaker posts.",
          "Thumbnails and channel banners, as text you paste into a design app.",
        ],
      },
      {
        heading: "Watch out for emoji letters",
        paragraphs: [
          "Black squared letters come from the Enclosed Alphanumeric Supplement. A few of them (🅰, 🅱, 🅾 and 🅿) are also emoji, so some phones show them in color while the rest of the word stays black. If that bothers you, the Black Bubble style avoids the problem for most words.",
        ],
      },
    ],
    examples: [
      { label: "Crew name", text: "NIGHT CREW", styleId: "negative-squared" },
      { label: "Tag", text: "Rebel", styleId: "bold-fraktur" },
      { label: "Throw-up", text: "WILD", styleId: "negative-circled" },
      { label: "Gamer tag", text: "Spray King", styleId: "attitude-pixel" },
      { label: "Wildstyle", text: "chaos", styleId: "squiggle-hooks" },
      { label: "Hype", text: "Street Life", styleId: "sniper" },
    ],
    faqs: [
      {
        question: "Is there a real graffiti font I can copy and paste?",
        answer:
          "No. Real graffiti letters are drawn by hand and don't exist as Unicode characters. These styles capture the bold, blocky look with characters that paste anywhere.",
      },
      {
        question: "Why are some letters colored?",
        answer:
          "A few black squared letters (A, B, O and P) are also emoji, so some devices draw them in color. Try Black Bubble or Heavy letters instead.",
      },
      {
        question: "Can I use graffiti text in Discord and games?",
        answer:
          "Discord nicknames and messages accept these styles. Games vary: many only allow basic letters in usernames, so test before you commit.",
      },
      {
        question: "Why do the block letters turn my text into capitals?",
        answer:
          "Unicode only has squared and circled versions of capital letters, so lowercase letters are converted to capitals in those styles.",
      },
    ],
    related: ["bubble-letters", "square-text", "discord-fonts", "gothic-font"],
  },

  {
    slug: "double-struck-font",
    kind: "style",
    navLabel: "Double-Struck Font",
    title: "Double-Struck Font Copy and Paste – Outline Text (𝔸𝔹ℂ)",
    description:
      "Copy and paste double-struck outline text like 𝔻𝕠𝕦𝕓𝕝𝕖, also called blackboard bold. Full alphabet and digits for clean, modern names and headers.",
    h1: "Double-Struck Font Copy and Paste",
    intro: "Hollow, outlined letters with a clean modern look. Type below to turn your text into double-struck 𝕥𝕖𝕩𝕥.",
    styleIds: ["double-struck", "circle-overlay", "bold-serif", "squared", "circled"],
    placeholder: "Outline Text",
    sections: [
      {
        heading: "What is double-struck text?",
        paragraphs: [
          "Double-struck letters have a second line inside each stroke, which makes them look hollow or outlined. Mathematicians call them blackboard bold: on a chalkboard, it was easier to draw a double line than to make letters thick. That's why ℝ means the real numbers and ℕ means the natural numbers in math.",
          `Unicode includes a full double-struck alphabet in the Mathematical Alphanumeric Symbols block (U+1D538–U+1D56B), plus double-struck digits (${c("double-struck", "0123456789")}). Few fancy styles have matching numbers, which makes this one great for dates, scores and gamer tags with numbers.`,
        ],
      },
      {
        heading: "The seven borrowed capitals",
        paragraphs: [
          "Seven capitals (ℂ, ℍ, ℕ, ℙ, ℚ, ℝ and ℤ) were added to Unicode years earlier because math uses them so often. They live in the Letterlike Symbols block, so the main double-struck range leaves gaps for them. The generator fills the gaps automatically. On some devices those seven may look a touch thinner or thicker than their neighbors.",
        ],
      },
      {
        heading: "Where outline text works well",
        list: [
          "Clean usernames and display names that look modern rather than fancy.",
          "Headers in bios: a double-struck word above plain text looks like a logo.",
          "Gaming names that include numbers, since the digits match.",
          "Tech, design and minimalist brand profiles.",
        ],
      },
      {
        heading: "Readability",
        paragraphs: [
          "Double-struck is one of the easier fancy styles to read, because the letter shapes are plain and only the strokes change. It still isn't plain text: screen readers may announce each letter as “mathematical double-struck capital A”, and people searching for your name won't find it typed this way.",
        ],
      },
    ],
    examples: [
      { label: "Username", text: "Nova", styleId: "double-struck" },
      { label: "Gamer tag", text: "Player 99", styleId: "double-struck" },
      { label: "Header", text: "ABOUT ME", styleId: "double-struck" },
      { label: "Date", text: "Est 2024", styleId: "double-struck" },
      { label: "Circle outline", text: "LOOP", styleId: "circle-overlay" },
      { label: "Squared outline", text: "BOX", styleId: "squared" },
    ],
    faqs: [
      {
        question: "What is double-struck font called?",
        answer:
          "It's also called blackboard bold, outline text or hollow letters. In Unicode the characters are named “mathematical double-struck”.",
      },
      {
        question: "Why do C, H, N, P, Q, R and Z look slightly different?",
        answer:
          "Those seven come from the Letterlike Symbols block, which some devices draw with a different font than the rest of the alphabet.",
      },
      {
        question: "Does double-struck text include numbers?",
        answer: "Yes. Digits 0 to 9 all have double-struck versions, so numbers match your letters.",
      },
      {
        question: "Can I use double-struck text in a game name?",
        answer:
          "Some games accept it and many don't, because they restrict names to basic letters and numbers. Paste it in and check whether the name saves.",
      },
    ],
    related: ["monospace-font", "bold-font", "gothic-font", "bubble-letters"],
  },

  {
    slug: "monospace-font",
    kind: "style",
    navLabel: "Monospace Font",
    title: "Monospace Font Copy and Paste – Typewriter Text Generator",
    description:
      "Copy and paste monospace typewriter text like 𝚝𝚑𝚒𝚜. A retro, code-style font with matching digits for bios, quotes, captions and usernames.",
    h1: "Monospace Font Copy and Paste",
    intro: "Get the clean, even look of a typewriter or code editor. Type below and copy monospace 𝚝𝚎𝚡𝚝.",
    styleIds: ["monospace", "fullwidth", "tiny-caps", "spaced"],
    placeholder: "typewriter text",
    sections: [
      {
        heading: "What is a monospace font?",
        paragraphs: [
          "In a monospace font every character takes up the same width. An i is as wide as an m. Typewriters worked this way because the carriage moved the same distance for every key, and code editors still do so columns line up.",
          `The letters here come from the Mathematical Monospace range of Unicode (U+1D670–U+1D6A3), which also has matching digits (${c("monospace", "0123456789")}). That gives you the full alphabet, upper and lower case, plus numbers.`,
        ],
      },
      {
        heading: "Why people love the typewriter look",
        list: [
          "It feels literary and honest, perfect for poems, quotes and short thoughts.",
          "It reads as techy: developers, gamers and designers use it in bios.",
          "It looks timeless in captions, like a note typed on paper.",
          "Dates, times and coordinates line up neatly.",
        ],
      },
      {
        heading: "Monospace vs code formatting",
        paragraphs: [
          "Discord, Slack, Reddit and GitHub let you wrap text in backticks (`like this`) to show it in a real code font. Use that when you can: the text stays normal and searchable. Monospace Unicode is for places with no formatting, such as Instagram, TikTok, YouTube comments and many game chats, where backticks would just show up as backticks.",
        ],
      },
      {
        heading: "Limits to know",
        list: [
          "Punctuation and spaces stay normal, because Unicode only has monospace letters and digits. In most fonts that still looks consistent.",
          "On a few older devices monospace letters may show as boxes. Bold and italic styles are a safer fallback.",
          "Screen readers may read each letter as “mathematical monospace small t”, so keep important info plain.",
        ],
      },
    ],
    examples: [
      { label: "Quote", text: "write drunk, edit sober", styleId: "monospace" },
      { label: "Dev bio", text: "Hello, World", styleId: "monospace" },
      { label: "Timestamp", text: "02:14 AM", styleId: "monospace" },
      { label: "Coordinates", text: "40.7128 N, 74.0060 W", styleId: "monospace" },
      { label: "Retro wide", text: "SYSTEM READY", styleId: "fullwidth" },
      { label: "Spaced out", text: "loading", styleId: "spaced" },
    ],
    faqs: [
      {
        question: "Is monospace the same as a typewriter font?",
        answer:
          "Typewriter fonts are one kind of monospace font. Both give every character the same width, which creates that even, mechanical look.",
      },
      {
        question: "How is this different from Discord code blocks?",
        answer:
          "Discord's backticks change how the text is displayed but keep it as normal letters. Monospace Unicode changes the characters themselves, so it works in apps with no formatting.",
      },
      {
        question: "Does monospace text include numbers?",
        answer: "Yes. Unicode has monospace digits 0 to 9, so numbers match your letters.",
      },
      {
        question: "Why are punctuation marks not monospace?",
        answer:
          "Unicode only includes monospace versions of letters and digits. Punctuation stays in your normal font, which usually blends in well.",
      },
    ],
    related: ["double-struck-font", "vaporwave-text", "tattoo-fonts", "discord-fonts"],
  },

  {
    slug: "square-text",
    kind: "style",
    navLabel: "Square Text",
    title: "Square Text Copy and Paste – Boxed Letters Generator 🄰🅱",
    description:
      "Put your letters in boxes. Copy and paste square text: outlined 🄱🄾🅇, filled 🅱🅾🆇 and bracketed letters for names, headers and gaming tags.",
    h1: "Square Text Copy and Paste",
    intro: "Box up your letters. Type below to get outlined squares, filled squares and bracketed letters, ready to copy.",
    styleIds: ["squared", "negative-squared", "boxed-brackets", "attitude-badge", "fullwidth"],
    placeholder: "BOX TEXT",
    sections: [
      {
        heading: "Where do boxed letters come from?",
        paragraphs: [
          "Square letters come from the Enclosed Alphanumeric Supplement block. Outlined squares (🄰 to 🅉, U+1F130–U+1F149) and filled black squares (🅰 to 🆉, U+1F170–U+1F189) were added largely for compatibility with symbols used in Japanese broadcasting and on phones.",
          "Both sets cover capital letters only, so the generator turns your text into capitals in those styles. There are no squared digits, so numbers stay normal.",
        ],
      },
      {
        heading: "Outlined, filled or bracketed?",
        list: [
          `Outlined (${c("squared", "BOX")}): light and clean, good for headers and labels.`,
          `Filled (${c("negative-squared", "BOX")}): bold and loud, like stickers or keyboard keys.`,
          `Bracketed (${c("boxed-brackets", "box")}): every letter in [brackets]. It keeps lowercase and digits, and works on almost every device because it's built from ordinary brackets and line marks.`,
        ],
      },
      {
        heading: "The emoji problem with filled squares",
        paragraphs: [
          "Four filled letters are also emoji: 🅰 and 🅱 (blood types), 🅾 and 🅿 (parking). Many phones draw those four in red or blue while the rest of the word stays black, which can look patchy. If it matters, use outlined squares or the bracketed style. Or lean into it: some people like the pop of color.",
        ],
      },
      {
        heading: "Good uses for square text",
        list: [
          "Section headers in a bio, like 🄰🄱🄾🅄🅃 or 🄻🄸🄽🄺🅂.",
          "Short gaming tags and clan tags.",
          "Buttons and labels in a story or post graphic.",
          "Retro arcade or keyboard-key looks.",
        ],
      },
    ],
    examples: [
      { label: "Bio header", text: "ABOUT", styleId: "squared" },
      { label: "Clan tag", text: "WOLF", styleId: "negative-squared" },
      { label: "Keyboard", text: "ctrl alt del", styleId: "boxed-brackets" },
      { label: "Label", text: "NEW", styleId: "squared" },
      { label: "Bold badge", text: "VIP", styleId: "attitude-badge" },
      { label: "Links", text: "LINKS", styleId: "squared" },
    ],
    faqs: [
      {
        question: "Why are my square letters all capitals?",
        answer:
          "Unicode only has boxed versions of capital letters. For lowercase in boxes, use the Boxed Brackets style.",
      },
      {
        question: "Why do A, B, O and P look red?",
        answer:
          "Those four filled squares are also emoji, so many devices draw them in color. Use outlined squares to avoid it.",
      },
      {
        question: "Can I put numbers in squares?",
        answer:
          "Unicode has no squared digits, so numbers stay normal. The bracketed style puts numbers in brackets like the letters.",
      },
      {
        question: "What's the difference between square text and bubble letters?",
        answer:
          "Square text puts letters in boxes; bubble letters put them in circles. Our bubble letters page has the circled styles.",
      },
    ],
    related: ["bubble-letters", "graffiti-font", "double-struck-font", "discord-fonts"],
  },

  {
    slug: "mirror-text",
    kind: "style",
    navLabel: "Mirror Text",
    title: "Mirror Text Generator – Backwards Text Copy and Paste",
    description:
      "Write mirror text and backwards text you can copy and paste. Flip letters left to right like a reflection, or simply reverse their order.",
    h1: "Mirror Text Generator",
    intro: "See your words the way a mirror does. Type below to flip text left to right, or write it backwards.",
    styleIds: ["mirrored", "reversed", "upside-down"],
    placeholder: "mirror mirror",
    sections: [
      {
        heading: "Mirror text vs backwards text",
        paragraphs: ["They sound alike, but they do different things:"],
        list: [
          `Mirror text (${c("mirrored", "mirror")}): each letter is flipped left to right and the order is reversed, exactly like holding a note up to a mirror. Letters like b and d swap, and R becomes Я.`,
          `Backwards text (${c("reversed", "backwards")}): the same letters in reverse order. Nothing is flipped, so it's easy to read once you notice the trick.`,
        ],
      },
      {
        heading: "Mirror writing has a long history",
        paragraphs: [
          "Leonardo da Vinci famously filled his notebooks with mirror writing, from right to left with every letter reversed. Historians still debate whether it was for privacy or simply because he was left-handed and it kept the ink from smudging.",
          "You also see mirror text every day: AMBULANCE is printed reversed on the front of many emergency vehicles so drivers read it correctly in their rear-view mirror.",
        ],
      },
      {
        heading: "Fun things to do with it",
        list: [
          "Hide a spoiler or answer that people have to work out.",
          "Make a puzzle or escape-room clue.",
          "Write a caption for a mirror selfie that reads properly in the reflection.",
          "Try palindromes: words like “level” or “racecar” look the same backwards.",
        ],
      },
      {
        heading: "How the mirrored letters are made",
        paragraphs: [
          "Unicode can't flip a character, so each letter is swapped for a different character that looks like its reflection: Я from Cyrillic for R, Ɔ for C, ɘ for e, and so on. Some letters, like A, H, I, M, O, T, U, V, W, X and Y, are already symmetrical and stay the same. A few, such as g and k, only have rough lookalikes, so mirrored text is never perfect, but it's close enough to fool a quick glance.",
        ],
      },
    ],
    examples: [
      { label: "Mirror selfie", text: "mirror selfie", styleId: "mirrored" },
      { label: "Secret", text: "meet me at noon", styleId: "mirrored" },
      { label: "Backwards", text: "can you read this", styleId: "reversed" },
      { label: "Palindrome", text: "never odd or even", styleId: "reversed" },
      { label: "Da Vinci", text: "Leonardo", styleId: "mirrored" },
      { label: "Flipped", text: "plot twist", styleId: "upside-down" },
    ],
    faqs: [
      {
        question: "How do I write in mirror text?",
        answer:
          "Type your text in the box above and copy the Mirrored result. It's flipped and reversed so it reads correctly in a mirror.",
      },
      {
        question: "What is the difference between mirror text and upside-down text?",
        answer:
          "Mirror text is flipped left to right. Upside-down text is rotated 180°, so it's flipped top to bottom as well. Our upside down text page covers the rotated version.",
      },
      {
        question: "Why do some mirrored letters look odd?",
        answer:
          "Unicode has no true mirrored alphabet, so each letter uses the closest lookalike. A few letters only have approximations.",
      },
      {
        question: "Can screen readers read mirror text?",
        answer:
          "Not properly. Mirrored letters come from several scripts, so they're read as unrelated sounds. Backwards text uses normal letters, but it's read in reverse order.",
      },
    ],
    related: ["upside-down-text", "zalgo-text", "russian-font", "tiktok-fonts"],
  },

  {
    slug: "zalgo-text",
    kind: "style",
    navLabel: "Zalgo Text",
    title: "Zalgo Text Generator – Cursed Text Copy and Paste",
    description:
      "Generate Zalgo cursed text with low, medium or high intensity and copy and paste it. Learn where Zalgo came from and how to keep cursed text readable.",
    h1: "Zalgo Text Generator",
    intro: "H̷e̶ ̸c̵o̷m̶e̴s̵. Type below, pick how cursed you want it, and copy your Zalgo text.",
    styleIds: ["zalgo"],
    placeholder: "he comes",
    sections: [
      {
        heading: "Who (or what) is Zalgo?",
        paragraphs: [
          "Zalgo started as an internet horror meme in the mid-2000s: ordinary comic strips were edited so the characters' eyes bled and their faces melted, often with the line “He comes”. Zalgo was the unseen thing causing the corruption.",
          "Text that looked like it was being eaten by the same force soon took his name. Today “Zalgo text” and “cursed text” mean the same thing: letters buried under stacks of marks that spill above and below the line.",
        ],
      },
      {
        heading: "Choosing how cursed it gets",
        list: [
          `Low: a light haunting. Readable, and safe for names and short captions.`,
          `Medium: the classic Zalgo look, as in ${c("zalgo", "cursed")}.`,
          "High: the full nightmare. Marks tower over the word and can cover nearby lines. Best for a single word.",
        ],
      },
      {
        heading: "Good (and bad) places for cursed text",
        list: [
          "Good: horror game names, Halloween posts, creepypasta titles, ARG clues and memes.",
          "Good: a single cursed word inside a normal sentence, for comic timing.",
          "Bad: shared chats where it covers other people's messages. Many Discord servers ban heavy Zalgo for that reason.",
          "Bad: anything people need to read, search for or hear with a screen reader.",
        ],
      },
      {
        heading: "Cursed text and character limits",
        paragraphs: [
          "Each mark is its own character. At high intensity, one letter can carry well over a dozen marks, so a single word can be longer than a whole tweet behind the scenes. If an app cuts your text off or refuses it, lower the intensity or shorten the word. Some platforms also strip extra marks automatically, so your Zalgo may look calmer after posting than it does here.",
        ],
      },
    ],
    examples: [
      { label: "Classic", text: "He comes", styleId: "zalgo" },
      { label: "Horror title", text: "Do not look", styleId: "zalgo" },
      { label: "Cursed name", text: "Void", styleId: "zalgo" },
      { label: "Meme", text: "it's fine", styleId: "zalgo" },
    ],
    faqs: [
      {
        question: "Is Zalgo text the same as glitch text?",
        answer:
          "Zalgo is the most famous kind of glitch text. Our glitch text page also has subtler corrupted styles, like wavy strikes and crossed letters.",
      },
      {
        question: "Can Zalgo text harm my phone?",
        answer:
          "No. It's ordinary text with extra accent marks. Extremely heavy Zalgo can make an app scroll slowly, which is why some platforms trim it.",
      },
      {
        question: "How do I remove Zalgo from text?",
        answer:
          "Retype the plain words, or paste the text into a tool that strips combining marks. Deleting it letter by letter is slow because each letter has many hidden marks.",
      },
      {
        question: "Why does my cursed text look different after I post it?",
        answer:
          "Apps decide how many stacked marks to show and how tall a line can be. Some clip the marks or remove extras.",
      },
    ],
    related: ["glitch-text", "mirror-text", "gothic-font", "discord-fonts"],
  },

  {
    slug: "vaporwave-text",
    kind: "style",
    navLabel: "Vaporwave Text",
    title: "Vaporwave Text Generator – Wide Text Copy and Paste (ａｅｓｔｈｅｔｉｃ)",
    description:
      "Make wide vaporwave text like ａｅｓｔｈｅｔｉｃ and copy and paste it. Fullwidth letters, retro brackets and spaced-out styles for posts, bios and art.",
    h1: "Vaporwave Text Generator",
    intro: "Ｓｌｏｗ ｉｔ ｄｏｗｎ. Type below and copy wide, retro vaporwave text.",
    styleIds: ["fullwidth", "lenticular", "spaced", "corner-brackets", "asian-style", "attitude-pixel"],
    placeholder: "aesthetic",
    sections: [
      {
        heading: "Where the wide look comes from",
        paragraphs: [
          "Vaporwave is an internet music and art movement from the early 2010s, built on slowed-down 80s and 90s samples, pastel gradients, Roman statues and old computer graphics. Its signature text was wide and evenly spaced, like ａｅｓｔｈｅｔｉｃｓ.",
          "That text uses fullwidth characters, a real Unicode set (U+FF01–U+FF5E) made so Latin letters take up the same square space as Chinese, Japanese and Korean characters. On Japanese computers in the 80s and 90s, this was simply how English looked, which is exactly why it feels so retro.",
        ],
      },
      {
        heading: "Wide text vs spaced text",
        list: [
          `Fullwidth (${c("fullwidth", "vaporwave")}): each letter is a wider character. Digits and punctuation convert too.`,
          `Spaced (${c("spaced", "vaporwave")}): normal letters with a space between each. It works on every device, but search and spell-check see separate letters.`,
          `Bracketed (${c("lenticular", "vaporwave")}): fullwidth letters inside 【lenticular brackets】, a classic track-title look.`,
        ],
      },
      {
        heading: "Build the full vaporwave look",
        list: [
          "Mix English with a short Japanese word, the way vaporwave album covers did.",
          "Add retro symbols: ☆, ♡, ⌁, or a ░▒▓ fade.",
          "Write track-title style: 【 ＮＩＧＨＴ　ＤＲＩＶＥ 】",
          "Use it for one line, such as a caption or header, and keep the rest of your post plain.",
        ],
      },
      {
        heading: "Things to know",
        list: [
          "Fullwidth text takes up about twice the space on screen, so long phrases wrap quickly on phones.",
          "Some desktop fonts draw fullwidth letters only slightly wider, so the effect is stronger on mobile.",
          "Screen readers usually read fullwidth letters normally, which makes this one of the more accessible styles. Spaced text, by contrast, may be spelled out letter by letter.",
        ],
      },
    ],
    examples: [
      { label: "Classic", text: "aesthetic", styleId: "fullwidth" },
      { label: "Track title", text: "night drive", styleId: "lenticular" },
      { label: "Mood", text: "slow it down", styleId: "fullwidth" },
      { label: "Spaced", text: "vibes", styleId: "spaced" },
      { label: "Retro fade", text: "1995", styleId: "attitude-pixel" },
      { label: "Framed", text: "memories", styleId: "corner-brackets" },
    ],
    faqs: [
      {
        question: "What is vaporwave text called?",
        answer:
          "It's fullwidth text, from the Halfwidth and Fullwidth Forms block of Unicode. People also call it wide text or aesthetic text.",
      },
      {
        question: "How do I type ａｅｓｔｈｅｔｉｃ?",
        answer:
          "Type “aesthetic” in the box above and copy the Fullwidth (Vaporwave) result. Your spaces are converted too, so phrases stay evenly spaced.",
      },
      {
        question: "Is wide text the same as spaced-out text?",
        answer:
          "No. Wide text uses special wider characters. Spaced text is normal letters with spaces between them. Both are on this page.",
      },
      {
        question: "Does vaporwave text work on Instagram and TikTok?",
        answer:
          "Yes. Fullwidth characters are widely supported and paste into bios, captions and comments on both apps.",
      },
    ],
    related: ["aesthetic-fonts", "monospace-font", "cute-fonts", "tiktok-fonts"],
  },

  {
    slug: "russian-font",
    kind: "style",
    navLabel: "Russian Font",
    title: "Russian Font Copy and Paste – Fake Cyrillic Text Generator",
    description:
      "Turn English into fake Russian-style text like ЯЦSSIД with Cyrillic lookalike letters. Copy and paste faux Cyrillic for posts, games and designs.",
    h1: "Russian Font Copy and Paste",
    intro: "Make English look Russian. Type below to swap your letters for Cyrillic lookalikes like Я, И and Д.",
    styleIds: ["russian-caps", "russian-smooth", "faux-cyrillic", "greek-cyrillic", "attitude-russian-arrows"],
    placeholder: "Russian style",
    sections: [
      {
        heading: "What is a “Russian font”?",
        paragraphs: [
          "When people search for a Russian font to copy and paste, they usually want English that looks Russian, not actual Russian. This look is called faux Cyrillic: Latin letters are swapped for Cyrillic (and sometimes Greek) letters that resemble them, such as Я for R, И for N, Д for A and Ш for W.",
          "You've seen it on movie posters, video games and band merch whenever a design wants to say “Soviet” or “Eastern Europe” at a glance.",
        ],
      },
      {
        heading: "What Russian speakers actually see",
        paragraphs: [
          "Here's the catch: those are real letters with their own sounds. To someone who reads Russian, “ЯЦSSIД” isn't “Russia” at all. Я is pronounced “ya”, И is “ee” and Д is “d”, so faux Cyrillic reads as nonsense or a joke. It's fine for fun and design, but don't use it for anything you want Russian speakers to understand.",
        ],
        list: [
          "Я looks like a backwards R, but sounds like “ya”.",
          "И looks like a backwards N, but sounds like “ee”.",
          "Д looks like an A, but sounds like “d”.",
          "Ш looks like a W, but sounds like “sh”.",
        ],
      },
      {
        heading: "Which style should you use?",
        list: [
          `Russian Caps (${c("russian-caps", "Russian")}): bold capital lookalikes, the classic poster style.`,
          `Russian Smooth (${c("russian-smooth", "Russian")}): softer lowercase-friendly letters for longer phrases.`,
          `Faux Cyrillic (${c("faux-cyrillic", "Russian")}): the most “foreign-looking” mix of Cyrillic letters.`,
          `Greek Cyrillic (${c("greek-cyrillic", "Russian")}): blends Greek letters in for an even more exotic look.`,
        ],
      },
      {
        heading: "Want to write real Russian instead?",
        paragraphs: [
          "Add a Russian keyboard in your phone or computer settings and type the words directly, or use a translation tool and have a native speaker check it. That's the only way to write something Russian readers will understand. The styles on this page are purely decorative.",
        ],
      },
    ],
    examples: [
      { label: "Poster", text: "BACK IN THE USSR", styleId: "russian-caps" },
      { label: "Gamer tag", text: "Red Bear", styleId: "russian-caps" },
      { label: "Smooth", text: "from Moscow with love", styleId: "russian-smooth" },
      { label: "Band name", text: "Winter Wolves", styleId: "faux-cyrillic" },
      { label: "Exotic", text: "Mystery", styleId: "greek-cyrillic" },
      { label: "Decorated", text: "Comrade", styleId: "attitude-russian-arrows" },
    ],
    faqs: [
      {
        question: "Is this real Russian?",
        answer:
          "No. It's English with Cyrillic letters that look similar. Russian speakers will see different sounds and words, so treat it as decoration.",
      },
      {
        question: "What is fake Cyrillic called?",
        answer:
          "It's usually called faux Cyrillic. Designers use it to make English text look Russian or Eastern European.",
      },
      {
        question: "Can I use Russian-style text in games?",
        answer:
          "Chat and profile descriptions usually accept Cyrillic letters. Many games restrict usernames to basic Latin letters, so test whether your name saves.",
      },
      {
        question: "Why is it rude to use faux Cyrillic sometimes?",
        answer:
          "It isn't rude by itself, but it turns real letters into props. In messages to Russian speakers it can come across as nonsense or mocking, so keep it for designs and jokes.",
      },
    ],
    related: ["mirror-text", "aesthetic-fonts", "gothic-font", "graffiti-font"],
  },

  {
    slug: "bold-italic-font",
    kind: "style",
    navLabel: "Bold Italic Font",
    title: "Bold Italic Font Copy and Paste – Bold Italic Text Generator",
    description:
      "Copy and paste bold italic text in serif 𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄 or sans 𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘 styles. Strong, slanted emphasis for posts, bios and headlines.",
    h1: "Bold Italic Font Copy and Paste",
    intro: "Bold for strength, italic for energy. Type below and copy text that's both.",
    styleIds: ["bold-italic-serif", "bold-italic-sans", "bold-script", "bold-serif", "italic-serif"],
    placeholder: "Bold Italic",
    sections: [
      {
        heading: "Serif or sans?",
        paragraphs: ["There are two bold italic alphabets in Unicode, and they set different moods:"],
        list: [
          `Serif bold italic (${c("bold-italic-serif", "Big Announcement")}): classic and bookish, like a magazine pull quote. Range U+1D468–U+1D49B.`,
          `Sans bold italic (${c("bold-italic-sans", "Big Announcement")}): sporty and modern, like a sneaker ad or a sports headline. Range U+1D63C–U+1D66F.`,
        ],
      },
      {
        heading: "When bold italic is the right call",
        list: [
          "Big news: launches, sales, results and announcements.",
          "Motivational and gym posts, where the slant adds a sense of speed.",
          "Sports teams, scores and match-day captions.",
          "A single shouted word inside a normal sentence.",
          "LinkedIn post hooks, where the first line needs to stop the scroll.",
        ],
      },
      {
        heading: "Don't overdo it",
        paragraphs: [
          "Bold italic is the loudest of the plain styles. One line of it grabs attention; a whole paragraph tires the eye and feels like shouting. Pair it with plain text, or with regular bold for subheadings, so the bold italic line stays special.",
        ],
      },
      {
        heading: "Numbers and accessibility",
        list: [
          "Unicode has no italic digits, so numbers stay upright in bold italic text. In the serif style they look natural; in the sans style a plain number can stand out.",
          "Screen readers may read each letter as “mathematical bold italic capital B” or skip it. Keep important words, like product names and links, in plain text too.",
          "Bold italic letters are in widely used Unicode ranges and display on almost every modern phone and computer.",
        ],
      },
    ],
    examples: [
      { label: "Announcement", text: "We're live!", styleId: "bold-italic-serif" },
      { label: "Gym post", text: "No days off", styleId: "bold-italic-sans" },
      { label: "Sale", text: "Final hours", styleId: "bold-italic-sans" },
      { label: "Pull quote", text: "Change starts today", styleId: "bold-italic-serif" },
      { label: "Match day", text: "Game time", styleId: "bold-italic-sans" },
      { label: "Bold script", text: "Unstoppable", styleId: "bold-script" },
    ],
    faqs: [
      {
        question: "How do I write bold italic text on Instagram or LinkedIn?",
        answer:
          "Neither app has a bold italic button. Type your text above, copy the bold italic version and paste it into your post, caption or bio.",
      },
      {
        question: "Why do numbers stay upright?",
        answer: "Unicode doesn't include italic or bold italic digits, so numbers keep their normal shape.",
      },
      {
        question: "What's the difference between serif and sans bold italic?",
        answer:
          "Serif letters have small strokes at the ends, which feels classic. Sans letters are plain, which feels modern and sporty.",
      },
      {
        question: "Should I use bold italic or just bold?",
        answer:
          "Use bold for clear emphasis and bold italic when you want extra energy. For a deeper look at each, see our bold font and italic font pages.",
      },
    ],
    related: ["bold-font", "italic-font", "calligraphy-font", "instagram-fonts"],
  },
];
