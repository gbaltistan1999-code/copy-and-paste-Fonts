export interface Author {
  slug: string;
  name: string;
  bio: string;
  image: { src: string; width: number; height: number };
  /** Public profile URLs (used for links and schema.org sameAs). Only add real profiles. */
  links: { label: string; url: string }[];
}

export const authors: Author[] = [
  {
    slug: "david",
    name: "David",
    bio: "Creating helpful guides on stylish fonts, creative text, and social media captions to make online expression simple, unique, and fun.",
    image: { src: "/authors/david.png", width: 480, height: 480 },
    links: [],
  },
];

const bySlug = new Map(authors.map((a) => [a.slug, a]));

export function getAuthor(slug: string): Author | undefined {
  return bySlug.get(slug);
}

export function authorPath(author: Author): string {
  return `/author/${author.slug}`;
}
