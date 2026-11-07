import type { ExampleItem, FaqItem } from "@/types";

export const homeSamples: ExampleItem[] = [
  { label: "Good vibes", text: "Good vibes only", styleId: "script" },
  { label: "Bold headline", text: "BIG NEWS", styleId: "bold-sans" },
  { label: "Aesthetic", text: "aesthetic", styleId: "fullwidth" },
  { label: "Name frame", text: "Princess", styleId: "royal" },
  { label: "Gothic", text: "Dark Mode", styleId: "fraktur" },
  { label: "Minimal", text: "less is more", styleId: "tiny-caps" },
  { label: "Bubble", text: "hello", styleId: "circled" },
  { label: "Gamer", text: "GG EZ", styleId: "negative-squared" },
  { label: "Cute", text: "stay cute", styleId: "hearts" },
  { label: "Outline", text: "Legend", styleId: "double-struck" },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "Are copy and paste fonts real fonts?",
    answer:
      "No. They are Unicode characters that look like letters in a different font, such as 𝐛𝐨𝐥𝐝 or 𝓈𝒸𝓇𝒾𝓅𝓉. Because they are characters rather than formatting, they keep their look when you paste them into apps that don't let you choose a font.",
  },
  {
    question: "Is CopyFontStyle free?",
    answer: "Yes. The generator and every style page are free to use, with no sign-up.",
  },
  {
    question: "Do you see or store what I type?",
    answer:
      "No. The conversion runs entirely in your browser with JavaScript. Your text is never sent to our server, and the generator does not save your input.",
  },
  {
    question: "Why do some styled letters show up as boxes or question marks?",
    answer:
      "The device or app viewing the text doesn't have a font that contains those characters. It's most common on older phones and computers, and with rarer symbols. Bold, italic and small caps styles are the most widely supported.",
  },
  {
    question: "Do copy and paste fonts work on Instagram, TikTok and Discord?",
    answer:
      "They usually work in names, bios, captions, comments and messages because those fields accept Unicode text. Usernames on these platforms are restricted to basic characters, so styled letters won't be accepted there.",
  },
  {
    question: "Can screen readers read copy and paste fonts?",
    answer:
      "Often not well. Screen readers may read each character's Unicode name, read nothing, or mispronounce the word. Use styled text for decoration and keep important information in plain text.",
  },
  {
    question: "Why does my styled text use more of the character limit?",
    answer:
      "Many styled letters sit outside Unicode's Basic Multilingual Plane and take two UTF-16 code units. Some apps count those as two characters. Line styles like strikethrough also add a mark after every character.",
  },
  {
    question: "Can I use these fonts in Word or Google Docs?",
    answer:
      "You can paste them, but in documents it's better to use the editor's real fonts and formatting. Real formatting is searchable, accessible, and prints cleanly.",
  },
];
