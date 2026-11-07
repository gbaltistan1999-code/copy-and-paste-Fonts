import type { FontPage } from "@/types";

/**
 * Platform pages. Platform rules change often: phrase limits as "at the time
 * of writing" and tell readers to check the app. Never claim a platform
 * supports or endorses these characters.
 */
export const platformPages: FontPage[] = [
  {
    slug: "instagram-fonts",
    kind: "platform",
    navLabel: "Instagram Fonts",
    title: "Instagram Fonts Copy and Paste – Fonts for Bio & Captions",
    description:
      "Instagram fonts to copy and paste into your bio, name and captions. Bold, cursive, small caps and aesthetic styles, plus tips on limits, search and hashtags.",
    h1: "Instagram Fonts for Your Bio and Captions",
    intro:
      "Instagram doesn't let you change fonts in your bio or captions, but you can paste styled Unicode text. Type below and copy a style that suits your profile.",
    styleIds: [
      "bold-sans", "script", "bold-script", "tiny-caps", "small-caps", "italic-sans", "fraktur", "double-struck",
      "monospace", "fullwidth", "sparkles", "hearts", "flowers", "royal", "butterfly", "circled", "heart-between", "cute-flowers", "cute-heart-eyes", "squiggle-hooks",
    ],
    placeholder: "Your Instagram name",
    sections: [
      {
        heading: "Where styled text goes on Instagram",
        list: [
          "Name field: the bold name at the top of your profile accepts most Unicode characters and is a popular place for a styled name.",
          "Bio: styled text is commonly used for headings, a tagline or labels such as 𝗟𝗶𝗻𝗸𝘀 or ᴄᴏɴᴛᴀᴄᴛ.",
          "Captions and comments: good for a bold first line or a highlighted phrase.",
          "Username: restricted to letters, numbers, periods and underscores, so styled characters won't be accepted there.",
        ],
      },
      {
        heading: "Mind the limits",
        paragraphs: [
          "At the time of writing, Instagram bios allow about 150 characters and captions about 2,200. Styled letters from the Mathematical Alphanumeric Symbols block are stored as two UTF-16 code units each, so they may use up the limit faster than plain letters. Decorations and separators also count. Instagram's own counter is the final word, so paste and check before saving. Limits can change, so verify them in the app.",
        ],
      },
      {
        heading: "Hashtags, search and discoverability",
        list: [
          "#𝐟𝐨𝐨𝐝 is not the same hashtag as #food. Styled hashtags won't link to the posts you expect, so always type hashtags in plain text.",
          "Instagram search may not match a styled name. Keep keywords people search for (your real name, business type, city) in plain text, for example in the username or the first line of your bio.",
          "Mentions (@username) should stay plain so they link correctly.",
        ],
      },
      {
        heading: "Accessibility on Instagram",
        paragraphs: [
          "Instagram users who rely on VoiceOver or TalkBack may hear styled letters spelled out by name, or hear nothing at all. A styled name or heading is fine; a whole caption in styled text shuts those followers out. Keep the main message in plain text and use styles as accents. Adding alt text to images also helps.",
        ],
      },
      {
        heading: "Tips for a clean bio",
        list: [
          "Pick one or two styles and use them consistently, for example bold sans for headings and plain text for details.",
          "Small caps and bold sans tend to look tidy at Instagram's small bio font size; thin script can look faint.",
          "Line breaks are preserved when you paste, which helps separate sections.",
        ],
      },
    ],
    examples: [
      { label: "Bio heading", text: "Travel · Coffee · Books", styleId: "tiny-caps" },
      { label: "Name field", text: "Emma Rose", styleId: "bold-script" },
      { label: "Caption hook", text: "Swipe for the recipe", styleId: "bold-sans" },
      { label: "Bio label", text: "Shop the look", styleId: "sparkles" },
      { label: "Soft name", text: "mia", styleId: "flowers" },
      { label: "Business", text: "Open Mon–Sat", styleId: "monospace" },
    ],
    faqs: [
      {
        question: "How do I change the font in my Instagram bio?",
        answer:
          "Instagram doesn't offer font choices. Type your bio text into the generator above, copy a style, then paste it into the Bio or Name field in Edit Profile.",
      },
      {
        question: "Why does my Instagram font show as boxes for some followers?",
        answer:
          "Their device or app version lacks a font that includes those characters. Bold, italic and small caps styles are widely supported; rarer symbols are more likely to appear as boxes on older devices.",
      },
      {
        question: "Can I use fancy fonts in my Instagram username?",
        answer:
          "No. Usernames are limited to letters, numbers, periods and underscores. Use styled text in the Name field instead.",
      },
      {
        question: "Will fancy fonts hurt my reach?",
        answer:
          "We can't speak for Instagram's ranking systems. What is certain is that styled text isn't matched by normal search and styled hashtags don't link, so keep keywords and hashtags in plain text.",
      },
    ],
    related: ["tiktok-fonts", "cursive-fonts", "aesthetic-fonts", "small-caps-font"],
  },

  {
    slug: "discord-fonts",
    kind: "platform",
    navLabel: "Discord Fonts",
    title: "Discord Fonts Copy and Paste – Fonts for Names & Servers",
    description:
      "Discord fonts to copy and paste into display names, nicknames, channel names and messages. Plus Discord's built-in markdown and when to use it instead.",
    h1: "Discord Fonts Copy and Paste",
    intro:
      "Stand out in member lists and server channels. Type below to style a display name, nickname or channel title, then paste it into Discord.",
    styleIds: [
      "bold-sans", "bold-serif", "monospace", "fraktur", "bold-fraktur", "script", "small-caps", "double-struck",
      "negative-squared", "zalgo", "upside-down", "strikethrough", "sniper", "crown", "currency", "attitude-badge", "freaky-mix", "tribal",
    ],
    placeholder: "Server Name",
    sections: [
      {
        heading: "Use Discord's built-in formatting for messages",
        paragraphs: [
          "For normal chat messages, Discord's own markdown is usually better than Unicode fonts. It's readable by screen readers, searchable, and looks consistent for everyone:",
        ],
        list: [
          "**bold**, *italic* and ***bold italic***",
          "__underline__ and ~~strikethrough~~",
          "`inline code` and ```code blocks```",
          "||spoiler|| to hide text until clicked",
          "# Heading, ## Smaller heading and > quote at the start of a line",
        ],
      },
      {
        heading: "Where Unicode fonts are useful on Discord",
        list: [
          "Display names and server nicknames, which don't support markdown.",
          "Channel, category and role names, which many servers decorate with styled letters and symbols.",
          "Server and bot descriptions, status messages and profile “About me” sections.",
          "Styles markdown can't produce, such as gothic, script, small caps, monospace letters or glitch text.",
        ],
      },
      {
        heading: "Usernames vs display names",
        paragraphs: [
          "Since Discord's move to unique usernames in 2023, usernames have been limited to a small character set (lowercase letters, numbers, underscores and periods). Styled characters therefore go in your display name or a server-specific nickname instead. Discord can change these rules, so check the app if something is rejected.",
        ],
      },
      {
        heading: "Server etiquette and moderation",
        list: [
          "Many servers ask members to use names that can be typed, so people can mention them with @. A fully styled nickname can be hard to find in the member list or mention.",
          "Moderation bots in some servers automatically rename members whose names use Zalgo or “hoist” to the top of the list with symbols.",
          "Heavy glitch text in messages covers other people's messages and is often against server rules.",
        ],
      },
      {
        heading: "Accessibility",
        paragraphs: [
          "Discord users with screen readers hear the names of channels and members read aloud. Styled channel names like 「𝗴𝗲𝗻𝗲𝗿𝗮𝗹」 may be read as symbol names or skipped. Server owners can keep channels navigable by pairing a symbol or emoji with a plain word.",
        ],
      },
    ],
    examples: [
      { label: "Channel name", text: "general", styleId: "small-caps" },
      { label: "Role", text: "Moderator", styleId: "bold-fraktur" },
      { label: "Nickname", text: "Shadow", styleId: "fraktur" },
      { label: "Gamer tag", text: "HEADSHOT", styleId: "sniper" },
      { label: "Server title", text: "The Lounge", styleId: "double-struck" },
      { label: "Bot status", text: "online", styleId: "monospace" },
    ],
    faqs: [
      {
        question: "How do I change my font on Discord?",
        answer:
          "Discord doesn't let you pick a font, but you can paste styled Unicode text. For messages, use Discord markdown such as **bold** or *italic*. For names and channel titles, copy a style from this page.",
      },
      {
        question: "Can I use fancy fonts in my Discord username?",
        answer:
          "Unique usernames only allow a limited set of characters, so styled letters won't work there. Use them in your display name or a server nickname instead.",
      },
      {
        question: "Why can't people @mention me with my fancy name?",
        answer:
          "To mention you, people need to type characters that match your name. Styled characters are hard to type, so others may not find you in the mention list. Many servers ask for a typeable nickname for this reason.",
      },
      {
        question: "Is glitch text allowed on Discord?",
        answer:
          "It depends on the server. Glitch text isn't technically blocked in messages, but many servers prohibit it or use bots to remove it because it can cover other messages.",
      },
    ],
    related: ["glitch-text", "bold-font", "strikethrough-text", "gothic-font"],
  },

  {
    slug: "tiktok-fonts",
    kind: "platform",
    navLabel: "TikTok Fonts",
    title: "TikTok Fonts Copy and Paste – Fonts for Bio & Captions",
    description:
      "TikTok fonts to copy and paste into your bio, display name, captions and comments. Cute, bold and aesthetic styles with tips on TikTok limits and hashtags.",
    h1: "TikTok Fonts Copy and Paste",
    intro:
      "TikTok's bio and captions use one font, but you can paste styled text into them. Type below and copy a look for your profile.",
    styleIds: [
      "bold-sans", "script", "bold-script", "tiny-caps", "fullwidth", "circled", "negative-circled", "sparkles",
      "stars", "hearts", "royal", "double-struck", "upside-down", "zalgo", "faux-cyrillic", "cute-paws", "alternating-caps", "squiggle-armenian",
    ],
    placeholder: "Your TikTok name",
    sections: [
      {
        heading: "Where you can paste styled text on TikTok",
        list: [
          "Name (display name): the name shown above your username accepts many styled characters.",
          "Bio: short, so a styled line or two goes a long way.",
          "Video captions and comments: useful for a bold hook or a quick emphasis.",
          "Username (@handle): limited to letters, numbers, underscores and periods, so styled characters won't work.",
        ],
      },
      {
        heading: "TikTok's short bio limit",
        paragraphs: [
          "At the time of writing, TikTok bios are limited to 80 characters, much shorter than many platforms. Decorations like ★彡 and ꧁༺ use several characters each, and styled letters may count as two. Pick compact styles such as bold sans or small caps for the bio and save heavier decorations for your display name. Check TikTok's counter when you paste, since limits can change.",
        ],
      },
      {
        heading: "Text on videos vs text in captions",
        paragraphs: [
          "TikTok's on-video text tool draws text with TikTok's own font choices. You can paste Unicode styles into it, but whether every character displays depends on the font TikTok uses for that text style; unusual symbols may appear as boxes. Preview your video before posting. Captions and comments use the phone's system fonts, which usually support more characters.",
        ],
      },
      {
        heading: "Hashtags and search",
        list: [
          "Type hashtags in plain text. A styled hashtag isn't the same tag and won't link to related videos.",
          "Keep your niche keywords (for example “baker” or “fitness coach”) in plain text in your bio so they can be found by search.",
          "Upside-down and glitch styles are fun in comments but unreadable in search and by screen readers.",
        ],
      },
      {
        heading: "Accessibility",
        paragraphs: [
          "TikTok has many viewers who use screen readers or auto-captions. Keep important information like links, dates and instructions in plain text, and use styled fonts for names, short hooks and decoration.",
        ],
      },
    ],
    examples: [
      { label: "Display name", text: "Ava", styleId: "royal" },
      { label: "Bio", text: "daily vlogs", styleId: "tiny-caps" },
      { label: "Caption hook", text: "Wait for it", styleId: "bold-sans" },
      { label: "Comment", text: "obsessed", styleId: "sparkles" },
      { label: "Vibe", text: "chill zone", styleId: "fullwidth" },
      { label: "Funny comment", text: "my brain rn", styleId: "upside-down" },
    ],
    faqs: [
      {
        question: "How do I get different fonts on TikTok?",
        answer:
          "Type your text above, copy a styled version, and paste it into your TikTok name, bio, caption or comment. TikTok displays the characters using your device's fonts.",
      },
      {
        question: "Why won't TikTok accept my fancy username?",
        answer:
          "TikTok usernames only allow letters, numbers, underscores and periods. Put styled text in your display name instead.",
      },
      {
        question: "Why does my bio say it's too long?",
        answer:
          "TikTok bios are short, and decorations and styled letters may count as more than one character each. Try fewer decorations or a compact style like bold sans.",
      },
      {
        question: "Do TikTok fonts work for everyone who views my profile?",
        answer:
          "Most modern phones display popular styles like bold, cursive and small caps. Rare symbols can appear as boxes on older devices.",
      },
    ],
    related: ["instagram-fonts", "bubble-letters", "aesthetic-fonts", "upside-down-text"],
  },
];
