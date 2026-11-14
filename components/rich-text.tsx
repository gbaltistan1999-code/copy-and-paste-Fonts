import Link from "next/link";
import type { ReactNode } from "react";

/** Internal links only: [anchor text](/path). */
const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** Renders a content string, turning [text](/path) into Next.js links. */
export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={m.index} href={m[2]}>
        {m[1]}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** Every internal path linked from a content string. */
export function linkedPaths(text: string): string[] {
  return [...text.matchAll(LINK)].map((m) => m[2]);
}
