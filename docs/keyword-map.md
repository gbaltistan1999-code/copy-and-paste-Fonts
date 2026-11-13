# Keyword Map and Information Architecture

No search volumes, difficulty scores or competitor data are included. None were measured, so none are claimed.
Validate priorities with a real keyword tool (Google Search Console after launch, or a paid tool) before expanding.

## Primary search intent

People searching "copy and paste fonts" want stylish text **right now**. They want to either:

1. type their own text and convert it into many styles at once (tool intent), or
2. grab a ready-made styled word or phrase (quick-copy intent).

Both are served above the fold on the homepage: input first, results below, ready-made samples further down.

## Keyword → page assignments (one primary intent per URL)

| Page | Primary keyword | Secondary / variations |
|---|---|---|
| `/` | Copy and Paste Fonts | copy and paste font, font generator copy and paste, fancy fonts copy and paste, cool fonts copy and paste, stylish fonts, font changer, fancy letters |
| `/fancy-text-generator` | fancy text generator | fancy text, fancy font generator, fancy text copy and paste, cool text generator, stylish text generator |
| `/cursive-fonts` | cursive fonts copy and paste | script font, handwriting text, cursive text generator |
| `/bold-font` | bold font copy and paste | bold text generator, bold text for Instagram / LinkedIn |
| `/italic-font` | italic font copy and paste | italic text generator, slanted text |
| `/bubble-letters` | bubble letters copy and paste | circled letters, bubble text, black bubble letters |
| `/small-caps-font` | small caps font | small capital letters, small caps generator |
| `/glitch-text` | glitch text copy and paste | corrupted text, creepy text, glitch font |
| `/upside-down-text` | upside down text | flip text, rotated text, upside down letters |
| `/strikethrough-text` | strikethrough text | cross out text, line through text |
| `/underline-text` | underline text | underline generator, double underline |
| `/gothic-font` | gothic font copy and paste | fraktur, blackletter text, gothic letters |
| `/aesthetic-fonts` | aesthetic fonts copy and paste | aesthetic text, decorated fonts, soft fonts |
| `/cute-fonts` | cute fonts copy and paste | kawaii text, cute text generator, cute fonts for instagram |
| `/tiny-text` | tiny text generator | superscript generator, small text copy and paste, subscript text |
| `/old-english-font` | old english font copy and paste | old english text generator, old english letters |
| `/calligraphy-font` | calligraphy font copy and paste | calligraphy text generator, elegant fonts |
| `/tattoo-fonts` | tattoo fonts copy and paste | tattoo lettering, tattoo font generator |
| `/graffiti-font` | graffiti font copy and paste | graffiti text generator, street style text |
| `/double-struck-font` | double-struck font copy and paste | outline font, blackboard bold, hollow letters |
| `/monospace-font` | monospace font copy and paste | typewriter font, typewriter text generator |
| `/square-text` | square text copy and paste | boxed letters, squared letters, letters in boxes |
| `/mirror-text` | mirror text generator | backwards text, reverse text, mirror writing |
| `/zalgo-text` | zalgo text generator | cursed text, zalgo copy and paste |
| `/vaporwave-text` | vaporwave text generator | wide text, fullwidth text, aesthetic wide text |
| `/russian-font` | russian font copy and paste | fake cyrillic text, faux cyrillic, russian style text |
| `/bold-italic-font` | bold italic font copy and paste | bold italic text generator |
| `/instagram-fonts` | instagram fonts | fonts for instagram bio, instagram font generator |
| `/discord-fonts` | discord fonts | discord font generator, discord name fonts |
| `/tiktok-fonts` | tiktok fonts | tiktok bio fonts, tiktok font generator |
| `/blog/instagram-captions` | instagram captions | short / aesthetic / cute / funny instagram captions, instagram captions for selfies, captions for instagram |
| `/faq` | copy and paste fonts FAQ | why fonts show boxes, are fancy fonts real fonts |

## Cannibalization rules

- "Fancy text generator" and its close variants (fancy text, cool/stylish text generator) belong to
  `/fancy-text-generator`. Other generic "font generator / cool fonts" phrasings belong to `/`.
  The homepage must not use "fancy text generator" in its title, H1 or subheading. Do **not** create
  `/cool-fonts` or similar pages; they would compete with the homepage. Watch Search Console: if `/` and
  `/fancy-text-generator` swap rankings for the same queries, merge the page into the homepage.
- Style pages target a **style** (visual result); platform pages target a **destination** (where it's pasted).
  Platform pages focus on platform rules, limits and tips, not on re-explaining each style.
- Homepage FAQs and `/faq` questions are deliberately different. Style-page FAQs are specific to that style.
- Pages that share styles (gothic / Old English, cursive / calligraphy, glitch / Zalgo, upside down / mirror,
  small caps / tiny text, aesthetic / vaporwave and cute) must keep the moved keyword out of the older page's
  title, H1 and description, and link to each other through `related`. Watch Search Console for pairs that
  swap rankings; if one page never ranks, merge it into its partner.

## Entities and related topics covered

Unicode, code points, Mathematical Alphanumeric Symbols block, Letterlike Symbols, Enclosed Alphanumerics,
Halfwidth and Fullwidth Forms, IPA / Phonetic Extensions, combining diacritical marks, font fallback ("tofu"),
UTF-16 surrogate pairs and character counting, screen readers and accessibility.

## Page hierarchy

```
/                         (homepage + full generator)
├── style pages           (/fancy-text-generator, /cursive-fonts, /bold-font, ... 26 pages)
├── platform pages        (/instagram-fonts, /discord-fonts, /tiktok-fonts)
├── /blog                 (index + posts, e.g. /blog/instagram-captions)
├── /faq
├── /about, /contact
└── /privacy-policy, /terms-and-conditions, /cookie-policy, /disclaimer
```

Breadcrumbs: `Copy and Paste Fonts > {Style}` on style/platform pages; `Home > {Page}` on trust pages.

## Ideas for later (only with real, distinct intent)

- Font pages for specific games (e.g. Roblox, Fortnite), but only once their name rules are researched and the content is genuinely different.
- A "styled text to normal text" converter (distinct reverse intent).
