import type { FaqItem } from "@/types";

export interface BlogImage {
  /** Path under /public. */
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface BlogPost {
  slug: string;
  /** Title tag without the brand suffix (the layout template adds it). */
  title: string;
  description: string;
  h1: string;
  /** ISO dates (YYYY-MM-DD). */
  datePublished: string;
  dateModified: string;
  /** Author slug from data/authors.ts. */
  author: string;
  image: BlogImage;
  /** Short summary shown on the blog index. */
  excerpt: string;
  faqs: FaqItem[];
}

export interface CaptionGroup {
  id: string;
  heading: string;
  intro?: string;
  captions: string[];
}

/**
 * Caption lists for /blog/instagram-captions. Kept as data so tests can check the
 * headline count ("150") against the real number of captions.
 */
export const instagramCaptionGroups: CaptionGroup[] = [
  {
    id: "short",
    heading: "Short Instagram captions",
    intro: "For when the photo does the talking.",
    captions: [
      "Just vibing.",
      "Mood: unbothered.",
      "Plot twist: I'm happy.",
      "Today was a good day.",
      "Main character energy.",
      "No caption needed.",
      "Soft launch of my weekend.",
      "Here for a good time.",
      "Sunday reset.",
      "Living, not just existing.",
      "Off the grid.",
      "Small moments, big feelings.",
      "Pov: you're happy.",
      "Out of office.",
      "This is the sign.",
    ],
  },
  {
    id: "aesthetic",
    heading: "Aesthetic Instagram captions",
    intro: "Calm, dreamy lines that pair well with cursive or small caps fonts.",
    captions: [
      "𝓰𝓸𝓵𝓭𝓮𝓷 𝓱𝓸𝓾𝓻 𝓽𝓱𝓸𝓾𝓰𝓱𝓽𝓼",
      "collecting moments, not things",
      "☾ soft light, slow days ☽",
      "a little bit of magic in the ordinary",
      "ʟᴇꜱꜱ ɴᴏɪꜱᴇ, ᴍᴏʀᴇ ᴘᴇᴀᴄᴇ",
      "painting my days in pastel",
      "where the sky meets my daydreams",
      "𝘴𝘭𝘰𝘸 𝘮𝘰𝘳𝘯𝘪𝘯𝘨𝘴 𝘢𝘳𝘦 𝘮𝘺 𝘧𝘢𝘷𝘰𝘳𝘪𝘵𝘦",
      "the sun always knows how to find me",
      "soft heart, clear mind",
      "quiet places, loud thoughts",
      "✧ chasing light ✧",
      "clouds in my coffee, stars in my eyes",
      "blooming in my own season",
      "some days feel like a film",
    ],
  },
  {
    id: "selfies",
    heading: "Instagram captions for selfies",
    captions: [
      "Felt cute, might not delete.",
      "Me, myself and good lighting.",
      "Just me being me.",
      "Confidence level: selfie with no filter.",
      "Serving looks and good vibes.",
      "Caught myself smiling again.",
      "Self-love looks good on me.",
      "Hi, it's me again.",
      "Smile, it's free.",
      "Main character, side angle.",
      "Glow on, worries off.",
      "Not a phase, just my face.",
      "Wearing my favorite accessory: a smile.",
      "Proof I left the house.",
      "Rare sighting: me, ready on time.",
    ],
  },
  {
    id: "cute",
    heading: "Cute Instagram captions",
    captions: [
      "♡ sweet like strawberry milk ♡",
      "Sprinkling kindness everywhere I go.",
      "Happiness looks good on everyone.",
      "Cuteness overload, sorry not sorry.",
      "Teddy bear hugs only.",
      "My heart is full and so is my camera roll.",
      "Life's better with sprinkles on top.",
      "Little things, big smiles.",
      "Sunshine in human form.",
      "Warm hugs and happy thoughts.",
      "Cotton candy skies and good days.",
      "Pinky promise this is a good one.",
      "Bubbly by nature.",
      "ⓢⓣⓐⓨ ⓢⓦⓔⓔⓣ",
      "Soft, sweet and a little bit extra.",
    ],
  },
  {
    id: "funny",
    heading: "Funny Instagram captions",
    captions: [
      "I'm not lazy, I'm on energy-saving mode.",
      "My bed and I are in a committed relationship.",
      "I came, I saw, I forgot why I came.",
      "Running on caffeine and chaos.",
      "If you're reading this, it's too late. You've seen my photo.",
      "Professional overthinker, amateur everything else.",
      "I'd agree with you, but then we'd both be wrong.",
      "Adulting is just Googling things all day.",
      "I put the \"pro\" in procrastinate.",
      "My hobbies include eating and napping. Sometimes both.",
      "Mentally I'm already on vacation.",
      "I followed my heart and it led me to the fridge.",
      "Weekend loading... please wait.",
      "Doing my best, which is honestly not much.",
      "Me pretending to have my life together.",
    ],
  },
  {
    id: "friends",
    heading: "Instagram captions for friends",
    captions: [
      "Friends who slay together, stay together.",
      "My favorite people in one frame.",
      "Real ones only.",
      "We don't need a reason, just a camera.",
      "Partners in crime, minus the crime.",
      "Same chaos, different day.",
      "Good times and crazy friends make the best memories.",
      "The group chat, but make it real life.",
      "Thanks for being my unpaid therapists.",
      "Laughing until it hurts, as usual.",
      "Life's better with these weirdos.",
      "Proof we actually made plans and kept them.",
      "Squad goals, achieved.",
      "Old friends, new memories.",
      "Tag the friend who'd join me for this.",
    ],
  },
  {
    id: "travel",
    heading: "Travel captions for Instagram",
    captions: [
      "✈︎ Out of office, into the world.",
      "Collecting passport stamps and sunsets.",
      "Wander often, wonder always.",
      "New city, same me, better views.",
      "Lost in the right direction.",
      "Salt in the air, sand in my hair.",
      "Mountains are calling and I picked up.",
      "Take only memories, leave only footprints.",
      "Jet lag is worth it.",
      "Adventure looks good on me.",
      "This view never gets old.",
      "𝘏𝘰𝘮𝘦 𝘪𝘴 𝘸𝘩𝘦𝘳𝘦𝘷𝘦𝘳 𝘐'𝘮 𝘩𝘢𝘱𝘱𝘺",
      "Running away for the weekend.",
      "Road trip playlist: loading.",
      "Postcards from somewhere beautiful.",
    ],
  },
  {
    id: "food",
    heading: "Food captions for Instagram",
    captions: [
      "First we eat, then we do everything else.",
      "Calories don't count on weekends.",
      "Brunch is my love language.",
      "This plate deserved a photoshoot.",
      "Good food, good mood.",
      "Life happens, coffee helps.",
      "Pizza is always the answer.",
      "Eat well, travel often.",
      "Dessert first, questions later.",
      "I'm into fitness: fitness whole pizza in my mouth.",
      "Foodie by heart, chef by accident.",
      "Taste the moment.",
      "Fueled by tacos and good intentions.",
      "Sharing is caring, but not this one.",
      "Phone eats first.",
    ],
  },
  {
    id: "confident",
    heading: "Confident and bold Instagram captions",
    captions: [
      "𝗕𝗲𝘁 𝗼𝗻 𝘆𝗼𝘂𝗿𝘀𝗲𝗹𝗳.",
      "Built different.",
      "Doing it for me.",
      "Not perfect, just unstoppable.",
      "Watch me glow up.",
      "Quiet grind, loud results.",
      "My vibe speaks for itself.",
      "Proving myself right.",
      "Less talk, more action.",
      "I am my own competition.",
      "Confidence is my best outfit.",
      "Started from scratch, still building.",
      "Know your worth, then add tax.",
      "Not lucky, just prepared.",
      "Making moves in silence.",
    ],
  },
  {
    id: "birthday",
    heading: "Birthday captions for Instagram",
    captions: [
      "Another trip around the sun ☀︎",
      "Level up: unlocked.",
      "Birthday mood: grateful and full of cake.",
      "Officially a year wiser. Allegedly.",
      "Born to celebrate.",
      "Make a wish and eat the cake.",
      "🎂 My day, my rules, my cake.",
      "New age, same energy.",
      "Cheers to me and another great year.",
      "Older, wiser and still the life of the party.",
      "Growing up is optional. Cake is not.",
      "Thank you for all the birthday love.",
      "Starting this year with a smile.",
      "Birthday girl, behaving accordingly.",
      "Birthday boy, cake supervisor.",
    ],
  },
];

export const instagramCaptionCount = instagramCaptionGroups.reduce((n, g) => n + g.captions.length, 0);

export const blogPosts: BlogPost[] = [
  {
    slug: "instagram-captions",
    title: "150 Instagram Captions to Copy and Paste (Short, Cute & Aesthetic)",
    description:
      "Short, aesthetic, funny and cute Instagram captions for selfies, friends, travel and more. Copy one, style it with a fancy font, and post.",
    h1: "150 Instagram Captions to Copy and Paste",
    datePublished: "2026-11-12",
    dateModified: "2026-11-12",
    author: "david",
    image: {
      src: "/blog/instagram-captions.png",
      width: 1734,
      height: 907,
      alt: "Instagram captions: short, cute and aesthetic, copy and paste. A phone showing an Instagram post surrounded by caption bubbles reading Good Vibes, Just Me, Aesthetic and Mood.",
    },
    excerpt:
      "Short one-liners, aesthetic quotes and captions for selfies, friends, travel, food and birthdays. Copy any of them with one tap.",
    faqs: [
      {
        question: "What is a good caption for Instagram?",
        answer:
          "A good caption fits the mood of your photo and sounds like you. Short lines like \"Small moments, big feelings\" work for most posts, and a question at the end can get people commenting.",
      },
      {
        question: "How long should an Instagram caption be?",
        answer:
          "Instagram allows up to 2,200 characters, but short captions of one line or a few words are often the most effective. Put the most important part first, since longer captions get cut off.",
      },
      {
        question: "Can I change the font of my Instagram caption?",
        answer:
          "Instagram has no font setting for captions. You can type your caption into a font generator like CopyFontStyle, copy a styled version, and paste it into Instagram.",
      },
      {
        question: "Are these captions free to use?",
        answer: "Yes. Every caption on this page is free to copy and use on your posts.",
      },
      {
        question: "Should I use fancy fonts in hashtags?",
        answer:
          "No. Styled letters are different characters from normal ones, so a fancy hashtag won't match the regular tag in search. Keep hashtags plain.",
      },
      {
        question: "What's a good caption for a selfie?",
        answer:
          "Try something light and confident, like \"Felt cute, might not delete\" or \"Glow on, worries off.\" You'll find more ideas in the selfie section above.",
      },
    ],
  },
];

const bySlug = new Map(blogPosts.map((p) => [p.slug, p]));

export function getPost(slug: string): BlogPost | undefined {
  return bySlug.get(slug);
}

/** "2026-11-12" -> "November 12, 2026" (fixed to UTC so it never shifts by a day). */
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { timeZone: "UTC", dateStyle: "long" });
}
