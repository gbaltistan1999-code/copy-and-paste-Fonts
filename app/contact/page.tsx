import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { ContactForm } from "@/components/contact-form";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const description =
  "Contact CopyFontStyle by email with questions, bug reports or font style suggestions. No account or form submission required.";

export const metadata = pageMetadata({ title: "Contact Us", description, path: "/contact" });

export default function ContactPage() {
  const email = siteConfig.contactEmail;

  return (
    <ContentPage title="Contact Us" name="Contact" description={description} path="/contact">
      <p>
        Questions, bug reports and style suggestions are welcome. If a character shows up as a box or looks wrong,
        please include the style name, the text you typed, and your device, browser or app. That makes it much easier
        to reproduce.
      </p>

      {email ? (
        <>
          <h2>Email</h2>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>

          <h2>Write a message</h2>
          <p>
            This form doesn&apos;t send anything from our website. When you press the button, it opens your own email app
            with your message filled in, and you send it from there. If no email app opens, copy the address above
            instead.
          </p>
          <ContactForm email={email} />
        </>
      ) : (
        <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Our contact email address is being set up and will be published here soon.
        </div>
      )}

      <h2>Before you write</h2>
      <p>
        Many questions about boxes, missing letters and platform limits are answered in our <Link href="/faq">FAQ</Link>
        . For how we handle data, see the <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </ContentPage>
  );
}
