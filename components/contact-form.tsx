"use client";

import { useState } from "react";

/**
 * Opens the visitor's email app with a prepared message (mailto:).
 * Nothing is submitted to the website, so we never show a "sent" message.
 */
export function ContactForm({ email }: { email: string }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ subject: subject || "Message from CopyFontStyle", body: message });
    // URLSearchParams encodes spaces as "+", which some mail apps show literally.
    window.location.href = `mailto:${email}?${params.toString().replace(/\+/g, "%20")}`;
    setOpened(true);
  }

  const field =
    "mt-1 block w-full rounded-lg border border-line bg-white px-3 py-2.5 text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4 rounded-xl border border-line bg-mist p-4 sm:p-5">
      <div>
        <label htmlFor="contact-subject" className="text-sm font-medium text-ink">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          maxLength={150}
          className={field}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={3000}
          className={field}
        />
      </div>
      <button type="submit" className="h-11 rounded-lg bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-hover">
        Open in my email app
      </button>
      <p className="text-sm text-ink-soft" role="status" aria-live="polite">
        {opened
          ? "We tried to open your email app. Your message has not been sent yet: please review it and press Send in your email app."
          : ""}
      </p>
    </form>
  );
}
