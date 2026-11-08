"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyText } from "@/lib/clipboard";

interface CopyButtonProps {
  text: string;
  /** Accessible name, e.g. "Copy Bold text". */
  label: string;
  /** Called after each attempt so a parent can announce the result. */
  onResult?: (ok: boolean) => void;
  size?: "md" | "sm";
  /** "solid" = filled accent button; "soft" = light tinted button used on result cards. */
  variant?: "solid" | "soft";
}

export function CopyButton({ text, label, onResult, size = "md", variant = "solid" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function handleClick() {
    const ok = await copyText(text);
    onResult?.(ok);
    if (!ok) return;
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  }

  const sizing = size === "sm" ? "h-9 px-3 text-sm" : "h-11 min-w-[5.5rem] px-4 text-sm";
  const idle =
    variant === "soft"
      ? "border border-coral-line bg-coral-soft text-coral-ink hover:border-coral hover:bg-coral-line/50"
      : "bg-accent text-white hover:bg-accent-hover";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={copied ? `${label} – copied` : label}
      className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg font-semibold transition-colors ${sizing} ${
        copied ? "border border-accent bg-accent text-white" : idle
      }`}
    >
      {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
      <span aria-hidden>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
