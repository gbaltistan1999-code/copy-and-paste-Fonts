import Link from "next/link";
import { CaptionList } from "@/components/blog/caption-list";
import { instagramCaptionCount, instagramCaptionGroups } from "@/data/blog";

/** Body of /blog/instagram-captions (everything between the hero image and the FAQ). */
export function InstagramCaptionsPost() {
  return (
    <>
      <p>
        The photo&apos;s ready. The filter&apos;s perfect. And then you hit the caption box and your mind goes
        completely blank.
      </p>
      <p>
        It happens to everyone. A caption is only a few words, but it sets the mood for the whole post, and it&apos;s
        often the difference between someone scrolling past and someone stopping to comment.
      </p>
      <p>
        So we put together {instagramCaptionCount} Instagram captions you can copy and paste right now. They&apos;re
        sorted by type, from short one-liners and aesthetic quotes to selfie, travel, food and birthday captions. Grab
        one as it is, tweak a word to make it yours, or give it a <Link href="/fancy-text-generator">fancy font</Link>{" "}
        so it really stands out.
      </p>

      <nav aria-label="In this post" className="mt-6 rounded-xl border border-line bg-mist/60 px-5 py-4">
        <p className="mt-0 text-sm font-semibold text-ink">In this post</p>
        <ul className="mt-2 grid list-none gap-x-6 pl-0 text-sm sm:grid-cols-2">
          <li className="mt-1">
            <a href="#good-caption">What makes a good caption?</a>
          </li>
          {instagramCaptionGroups.map((g) => (
            <li key={g.id} className="mt-1">
              <a href={`#${g.id}`}>{g.heading}</a>
            </li>
          ))}
          <li className="mt-1">
            <a href="#style-with-fonts">Style captions with fancy fonts</a>
          </li>
          <li className="mt-1">
            <a href="#tips">Tips and mistakes to avoid</a>
          </li>
        </ul>
      </nav>

      <h2 id="good-caption">What makes a good Instagram caption?</h2>
      <p>
        Great captions don&apos;t have to be clever. They just have to fit the photo and sound like you. Most of the
        good ones do at least one of these:
      </p>
      <ul>
        <li>
          <strong>Match the mood.</strong> A sunset photo wants something calm; a night out with friends wants
          something fun.
        </li>
        <li>
          <strong>Lead with the hook.</strong> Instagram cuts long captions off after the first line or two, so put the
          best part first.
        </li>
        <li>
          <strong>Keep it short when the photo speaks for itself.</strong> Three to six words is often plenty.
        </li>
        <li>
          <strong>Invite a reply.</strong> A question like &ldquo;which one&apos;s your favorite?&rdquo; gives people a
          reason to comment.
        </li>
        <li>
          <strong>Sound like a person.</strong> Write the way you&apos;d text a friend, not like an ad.
        </li>
      </ul>

      {instagramCaptionGroups.map((g) => (
        <section key={g.id} aria-labelledby={g.id} className="scroll-mt-20">
          <h2 id={g.id} className="scroll-mt-20">
            {g.heading}
          </h2>
          {g.intro && <p>{g.intro}</p>}
          <CaptionList captions={g.captions} />
        </section>
      ))}

      <h2 id="style-with-fonts" className="scroll-mt-20">
        How to style your Instagram captions with fancy fonts
      </h2>
      <p>
        Instagram&apos;s caption box has no font options, but you can still post captions in bold, cursive or small
        caps. Fancy fonts are made of special Unicode characters, so they paste in like regular text.
      </p>
      <ol>
        <li>
          Type your caption into the box on the <Link href="/">CopyFontStyle generator</Link>.
        </li>
        <li>
          Pick a style. Bold and italic are easy to read; <Link href="/cursive-fonts">cursive fonts</Link> and{" "}
          <Link href="/aesthetic-fonts">aesthetic fonts</Link> set a mood.
        </li>
        <li>Copy it with one tap.</li>
        <li>Paste it into your Instagram caption and share your post.</li>
      </ol>
      <p>
        The best trick is to style just the first line. It&apos;s the part people see before tapping &ldquo;more&rdquo;,
        so a bold or cursive hook grabs attention while the rest stays easy to read. You&apos;ll find more styles that
        suit Instagram on our <Link href="/instagram-fonts">Instagram fonts</Link> page.
      </p>

      <h2 id="tips" className="scroll-mt-20">
        Caption tips and mistakes to avoid
      </h2>
      <p>A great caption can still fall flat if a few small things go wrong.</p>
      <ul>
        <li>
          <strong>Don&apos;t style your hashtags.</strong> A hashtag in fancy letters isn&apos;t the same word to
          Instagram&apos;s search, so it won&apos;t show up where you want it. Keep hashtags in plain text.
        </li>
        <li>
          <strong>Don&apos;t style the whole caption.</strong> A full paragraph of cursive is tiring to read. Style a
          word or the first line, and leave the rest plain.
        </li>
        <li>
          <strong>Watch your length.</strong> Instagram allows up to 2,200 characters, but most people only read the
          first line or two. Shorter usually wins.
        </li>
        <li>
          <strong>Keep key info plain.</strong> Screen readers often can&apos;t read fancy letters, so put links, dates,
          prices and product names in normal text.
        </li>
        <li>
          <strong>Preview before posting.</strong> Rare styles can show up as empty boxes on older phones. Bold, italic,
          small caps and cursive work almost everywhere.
        </li>
        <li>
          <strong>Make it yours.</strong> Change a word or add a detail from your day. A caption that sounds like you
          will always beat one that sounds copied.
        </li>
      </ul>
    </>
  );
}

/** Closing section, shown after the FAQ. */
export function InstagramCaptionsClosing() {
  return (
    <>
      <p>
        The perfect caption is the one that makes you smile when you read it back a year from now. Pick a line from
        this list, change a word to fit your moment, and post it.
      </p>
      <p>
        Want it to stand out in the feed? Paste your caption into the <Link href="/">CopyFontStyle font generator</Link>{" "}
        and try a bold or cursive first line. If you also post on TikTok, our <Link href="/tiktok-fonts">TikTok fonts</Link>{" "}
        page has styles picked for captions there too.
      </p>
    </>
  );
}
