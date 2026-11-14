import Link from "next/link";
import type { ReactNode } from "react";

const tipClass = "rounded-xl border border-line bg-mist/60 px-4 py-3";

function Tip({ label = "Tip", children }: { label?: string; children: ReactNode }) {
  return (
    <p className={tipClass}>
      <strong>{label}:</strong> {children}
    </p>
  );
}

const whereItWorks: { place: string; works: string; notes: ReactNode }[] = [
  {
    place: "Instagram bio, captions, comments",
    works: "Yes",
    notes: (
      <>
        Name field works too. See our{" "}
        <Link href="/blog/instagram-captions">150 Instagram Captions to Copy and Paste</Link> for ideas
      </>
    ),
  },
  { place: "TikTok bio and captions", works: "Yes", notes: "Username only allows letters, numbers, _ and ." },
  { place: "WhatsApp, Telegram, Messenger", works: "Yes", notes: "Works in chats, status and about" },
  { place: "Facebook posts and comments", works: "Yes", notes: "Your profile name won't accept them" },
  { place: "X (Twitter)", works: "Yes", notes: "Fancy letters may count as 2 characters each" },
  { place: "Discord", works: "Yes", notes: "Works in messages, nicknames and bios" },
  { place: "Usernames in most games", works: "Sometimes", notes: "Many games block special symbols" },
  { place: "Email and passwords", works: "No", notes: "Never use fancy letters in logins" },
];

/** Body of /blog/copy-and-paste-fonts-iphone-android-pc (everything between the hero image and the FAQ). */
export function CopyAndPasteFontsGuidePost() {
  return (
    <>
      <p>
        Want 𝓯𝓪𝓷𝓬𝔂 text in your Instagram bio, a 𝗯𝗼𝗹𝗱 line in a WhatsApp message, or a cool name in your games? You
        don&apos;t need to install any font. You just generate the text, copy it and paste it. The steps are a little
        different on iPhone, Android and PC, so this guide covers each one.
      </p>
      <p>
        First, a quick note on how it works. <Link href="/">Copy and paste fonts</Link> are not real font files. They
        are special Unicode letters that look like different styles. That is why you can paste them almost anywhere,
        without changing any settings on your phone or computer.
      </p>

      <nav aria-label="In this post" className="mt-6 rounded-xl border border-line bg-mist/60 px-5 py-4">
        <p className="mt-0 text-sm font-semibold text-ink">In this post</p>
        <ul className="mt-2 grid list-none gap-x-6 pl-0 text-sm sm:grid-cols-2">
          <li className="mt-1">
            <a href="#quick-answer">The quick answer</a>
          </li>
          <li className="mt-1">
            <a href="#iphone">On iPhone and iPad</a>
          </li>
          <li className="mt-1">
            <a href="#android">On Android</a>
          </li>
          <li className="mt-1">
            <a href="#windows">On a Windows PC</a>
          </li>
          <li className="mt-1">
            <a href="#mac">On a Mac</a>
          </li>
          <li className="mt-1">
            <a href="#boxes">Fonts showing as boxes?</a>
          </li>
          <li className="mt-1">
            <a href="#where">Where do they work?</a>
          </li>
        </ul>
      </nav>

      <h2 id="quick-answer" className="scroll-mt-20">
        The quick answer
      </h2>
      <ol>
        <li>Open the CopyFontStyle generator and type your text.</li>
        <li>
          Pick a style you like and tap <strong>Copy</strong> (or long-press the text and choose Copy).
        </li>
        <li>
          Open the app you want, long-press the text box and tap <strong>Paste</strong>.
        </li>
      </ol>
      <p>That&apos;s it. Below are the exact steps for each device, plus what to do when the text shows up as boxes.</p>

      <h2 id="iphone" className="scroll-mt-20">
        How to copy and paste fonts on iPhone and iPad
      </h2>
      <p>On an iPhone, copying fancy text works the same way in Safari, Chrome or any other browser.</p>
      <ol>
        <li>Open CopyFontStyle in Safari and type your text in the box.</li>
        <li>
          Scroll through the styles and tap the <strong>Copy</strong> button next to the one you like. If a site has no
          copy button, double-tap a word, drag the blue handles to select the whole line, and tap Copy.
        </li>
        <li>Open the app where you want the text, like Instagram, WhatsApp or Notes.</li>
        <li>Tap the text box once, then tap it again (or long-press) until the menu appears.</li>
        <li>
          Tap <strong>Paste</strong>. If iOS asks &ldquo;Allow Paste?&rdquo;, tap <strong>Allow Paste</strong>.
        </li>
      </ol>
      <Tip>
        To save time, go to <strong>Settings &gt; Apps &gt; Safari</strong> (or your browser) and set{" "}
        <strong>Paste from Other Apps</strong> to <strong>Allow</strong>. Then iOS won&apos;t ask every time.
      </Tip>
      <Tip>
        Save the styles you use most in a note. Then you can copy them again later without opening the generator.
      </Tip>
      <p>
        Want styles that look best on iOS? Try our <Link href="/iphone-fonts">iPhone fonts</Link> generator, with
        cursive, bold and bubble text picked for iPhone.
      </p>

      <h2 id="android" className="scroll-mt-20">
        How to copy and paste fonts on Android
      </h2>
      <p>The steps are the same on Samsung, Xiaomi, Pixel, Oppo, Vivo and other Android phones.</p>
      <ol>
        <li>Open CopyFontStyle in Chrome (or any browser) and type your text.</li>
        <li>
          Tap <strong>Copy</strong> next to the style you want. Android shows a small &ldquo;Copied&rdquo; message or
          a clipboard preview at the bottom.
        </li>
        <li>Open the app where you want the text.</li>
        <li>
          Long-press inside the text box and tap <strong>Paste</strong>.
        </li>
      </ol>
      <p>
        <strong>Use the keyboard clipboard.</strong> Gboard and Samsung Keyboard save the things you copy. Tap the
        clipboard icon on the keyboard toolbar to paste any style you copied recently. This is handy when you switch
        between a few styles.
      </p>
      <Tip>In the clipboard, you can pin your favorite styles so they don&apos;t disappear after an hour.</Tip>

      <h2 id="windows" className="scroll-mt-20">
        How to copy and paste fonts on a Windows PC
      </h2>
      <ol>
        <li>Open CopyFontStyle in Chrome, Edge or Firefox and type your text.</li>
        <li>
          Click <strong>Copy</strong> next to a style, or select the text with your mouse and press{" "}
          <strong>Ctrl + C</strong>.
        </li>
        <li>
          Click where you want the text (Instagram on the web, Discord, Facebook, a document) and press{" "}
          <strong>Ctrl + V</strong>.
        </li>
      </ol>
      <Tip>
        Press <strong>Windows key + V</strong> to open clipboard history. It shows everything you copied recently, so
        you can paste several styles without going back to the generator. If it&apos;s off, Windows will ask you to
        turn it on the first time.
      </Tip>

      <h2 id="mac" className="scroll-mt-20">
        How to copy and paste fonts on a Mac
      </h2>
      <ol>
        <li>Open CopyFontStyle in Safari or Chrome and type your text.</li>
        <li>
          Click <strong>Copy</strong> next to a style, or select the text and press <strong>Command + C</strong>.
        </li>
        <li>
          Click where you want the text and press <strong>Command + V</strong>.
        </li>
      </ol>
      <Tip>
        If you paste into Pages, Word or Google Docs and the style looks wrong, press{" "}
        <strong>Command + Shift + V</strong> (<strong>Ctrl + Shift + V</strong> on Windows). This pastes plain text
        without extra formatting.
      </Tip>
      <Tip label="Important">
        These fancy letters only work where plain text works. In Word or Photoshop, it&apos;s better to install a real
        font file, because the Unicode letters can&apos;t be resized or changed like a normal font.
      </Tip>

      <h2 id="boxes" className="scroll-mt-20">
        Fonts showing as boxes or question marks? Here&apos;s the fix
      </h2>
      <p>
        If your text turns into □□□ or ???, the font didn&apos;t break. The phone or app just doesn&apos;t have those
        Unicode symbols. Try these fixes:
      </p>
      <ul>
        <li>
          <strong>Update your phone.</strong> Older Android and iOS versions are missing many symbols. Updating usually
          fixes it.
        </li>
        <li>
          <strong>Pick a simpler style.</strong> Bold, italic, script and bubble letters work almost everywhere. Rare
          styles (upside-down, special symbols) fail more often.
        </li>
        <li>
          <strong>Check on another device.</strong> Your text may look fine to others even if your old phone shows
          boxes. Ask a friend to check.
        </li>
        <li>
          <strong>The app may block it.</strong> Some apps and games remove special characters from usernames. Use
          plain letters in that field.
        </li>
        <li>
          <strong>Copy again.</strong> Sometimes only part of the text gets selected. Use the Copy button instead of
          selecting by hand.
        </li>
      </ul>

      <h2 id="where" className="scroll-mt-20">
        Where do copy and paste fonts work?
      </h2>
      <div className="mt-4 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          <thead className="bg-mist/60 text-ink">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                Place
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Works?
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line text-ink-soft">
            {whereItWorks.map((row) => (
              <tr key={row.place}>
                <th scope="row" className="px-4 py-3 font-medium text-ink">
                  {row.place}
                </th>
                <td className="px-4 py-3">{row.works}</td>
                <td className="px-4 py-3">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <strong>Use them in moderation.</strong> Screen readers can&apos;t read most fancy letters out loud, and search
        engines treat them as symbols, not words. Keep important words, like your name or business keyword, in normal
        text.
      </p>
    </>
  );
}

/** Closing section ("Final thoughts"), shown after the FAQ. */
export function CopyAndPasteFontsGuideClosing() {
  return (
    <>
      <p>
        Copying and pasting fonts takes about five seconds on any device: generate, copy, paste. On iPhone, allow
        pasting once. On Android, use the keyboard clipboard. On PC, Windows + V saves you time. If you see boxes,
        update your phone or pick a simpler style.
      </p>
      <p>
        Ready to try it? Open the <Link href="/">CopyFontStyle generator</Link>, type your text and copy your favorite
        style.
      </p>
    </>
  );
}
