import Image from "next/image";
import Link from "next/link";
import { authorPath, type Author } from "@/data/authors";

/** Small avatar + name line shown under a post title. */
export function AuthorByline({ author, children }: { author: Author; children?: React.ReactNode }) {
  return (
    <div className="mt-3 flex items-center gap-3 text-sm text-ink-soft">
      <Image
        src={author.image.src}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full border border-line object-cover"
      />
      <p>
        By{" "}
        <Link href={authorPath(author)} rel="author" className="font-semibold text-ink hover:text-accent hover:underline">
          {author.name}
        </Link>
        {children}
      </p>
    </div>
  );
}

/** "About the author" box shown at the end of a post. */
export function AuthorBox({ author }: { author: Author }) {
  return (
    <aside
      aria-labelledby="about-author-heading"
      className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-line bg-mist/60 p-5 sm:flex-row sm:p-6"
    >
      <Image
        src={author.image.src}
        width={80}
        height={80}
        alt={`Photo of ${author.name}`}
        className="h-20 w-20 shrink-0 rounded-full border border-line object-cover"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">About the author</p>
        <h2 id="about-author-heading" className="mt-1 text-lg font-bold text-ink">
          <Link href={authorPath(author)} rel="author" className="hover:text-accent hover:underline">
            {author.name}
          </Link>
        </h2>
        <p className="mt-1 text-ink-soft">{author.bio}</p>
        <Link
          href={authorPath(author)}
          className="mt-2 inline-block text-sm font-medium text-accent underline underline-offset-2"
        >
          More posts by {author.name}
        </Link>
      </div>
    </aside>
  );
}
