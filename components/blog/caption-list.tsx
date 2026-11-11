import { CopyButton } from "@/components/copy-button";

/** A grid of copyable captions. Each row shows the text and a one-tap copy button. */
export function CaptionList({ captions }: { captions: string[] }) {
  return (
    <ul className="mt-4 grid list-none gap-2 pl-0 sm:grid-cols-2">
      {captions.map((caption) => (
        <li
          key={caption}
          className="mt-0 flex items-center justify-between gap-3 rounded-xl border border-line bg-white py-2 pl-4 pr-2 shadow-sm"
        >
          <span className="preview-text text-[15px] leading-snug text-ink">{caption}</span>
          <CopyButton text={caption} label={`Copy caption: ${caption}`} size="sm" variant="soft" />
        </li>
      ))}
    </ul>
  );
}
