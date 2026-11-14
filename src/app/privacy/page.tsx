import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { LegalDocument, type LegalSection } from "@/components/sections/legal-document";
import { JsonLd } from "@/components/seo/json-ld";
import { CONTACT_EMAIL } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy · Tipsona",
  description:
    "What tipsona.co and the Tipsona waitlist collect, why, who processes it, how long we keep it and how to see, change or delete it.",
  path: "/privacy/"
});

const MAIL = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Tipsona (<span className="ph-tag">Placeholder</span> registered company name and RC
          number) runs tipsona.co. Our office is at 97, Adeola Odeku Street, 2nd Floor Union Bank
          Building, Victoria Island, Lagos State, Nigeria.
        </p>
        <p>
          We decide how the personal data described here is used, which makes us its controller
          under the Nigeria Data Protection Act 2023. For anything in this policy, write to {MAIL}.
        </p>
      </>
    )
  },
  {
    id: "what-this-covers",
    title: "What this policy covers",
    body: (
      <p>
        This policy covers tipsona.co, its product pages and the waitlist. Each Tipsona product has
        its own privacy policy, which applies when you use it: see the{" "}
        <a href="/tipstore/privacy/">TipStore Privacy Policy</a>. Tipper, TipStar and our other
        products will publish theirs before they open.
      </p>
    )
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <h3>When you join the waitlist</h3>
        <p>
          Your name and email address, which are required. If you choose to give them: your
          country, what you do (for example content creator or coach), the products you want news
          about and the TipStore username you would like.
        </p>
        <h3>When you open the waitlist page</h3>
        <p>
          Cloudflare Turnstile checks that you are a person, not a bot. To do that, Cloudflare
          receives your IP address, your browser’s user agent and technical details of your
          connection. We never see these signals; we only learn whether the check passed.
          Cloudflare explains what it collects in its{" "}
          <a href="https://www.cloudflare.com/turnstile-privacy-policy/" rel="noopener noreferrer">
            Turnstile privacy notice
          </a>
          .
        </p>
        <h3>When you visit any page</h3>
        <p>
          Our host, Vercel, processes your IP address, browser details and the pages you request,
          to deliver the site and protect it from abuse.
        </p>
        <h3>When you email us</h3>
        <p>Your email address and what you write.</p>
        <h3>When we email you</h3>
        <p>Resend, which sends our emails, records whether each email was delivered.</p>
        <h3>What we don’t do</h3>
        <p>
          The site sets no cookies of its own and uses no analytics or advertising trackers. We
          don’t sell your personal data, and we don’t use it to target ads.
        </p>
      </>
    )
  },
  {
    id: "why-we-use-it",
    title: "Why we use it",
    body: (
      <ul>
        <li>
          <strong>To keep your place on the waitlist</strong>, confirm that you joined and email you
          when it’s your turn, with news about the products you picked. We do this because you asked
          us to by joining (your consent), and you can leave at any time.
        </li>
        <li>
          <strong>To plan our launch</strong>, for example how many people in each country want
          each product. We look at these numbers together, not at individuals. This is in our
          legitimate interest of launching products people want.
        </li>
        <li>
          <strong>To keep the site and the waitlist safe</strong> from bots, spam and attacks, which
          is in our legitimate interest and yours.
        </li>
        <li>
          <strong>To answer you</strong> when you write to us.
        </li>
        <li>
          <strong>To meet our legal obligations</strong> where the law requires us to keep or share
          information.
        </li>
      </ul>
    )
  },
  {
    id: "who-we-share-it-with",
    title: "Who we share it with",
    body: (
      <>
        <p>
          Only the companies that run parts of the site for us, and only so they can do that work:
        </p>
        <ul>
          <li>
            <strong>Resend</strong> sends our emails and holds the waitlist contact list.
          </li>
          <li>
            <strong>Cloudflare</strong> runs the security check on the waitlist page.
          </li>
          <li>
            <strong>Vercel</strong> hosts the site.
          </li>
          <li>
            <strong>Zoho</strong> runs our company mailbox, where emails you send us arrive.
          </li>
        </ul>
        <p>
          We will also share information if the law requires it, for example with a court or a
          regulator. We share it with no one else.
        </p>
      </>
    )
  },
  {
    id: "outside-nigeria",
    title: "Data stored outside Nigeria",
    body: (
      <p>
        These companies store and process data outside Nigeria, including in the United States. We
        rely on the data protection commitments in their terms with us to keep it protected, as the
        Nigeria Data Protection Act 2023 allows.
      </p>
    )
  },
  {
    id: "how-long-we-keep-it",
    title: "How long we keep it",
    body: (
      <ul>
        <li>
          <strong>Waitlist details:</strong> until you leave the waitlist or ask us to delete them.
          If you don’t create an account, we delete them within 12 months after the product you
          asked about opens.
        </li>
        <li>
          <strong>Emails you send us:</strong> as long as we need them to deal with what you asked.
        </li>
        <li>
          <strong>Hosting and security logs:</strong> for the short time Vercel and Cloudflare keep
          them.
        </li>
      </ul>
    )
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Under the Nigeria Data Protection Act 2023, you can ask us to:</p>
        <ul>
          <li>show you the personal data we hold about you;</li>
          <li>correct it if it’s wrong;</li>
          <li>delete it;</li>
          <li>stop or limit how we use it;</li>
          <li>give you a copy in a format you can take elsewhere.</li>
        </ul>
        <p>
          You can also withdraw your consent at any time; that doesn’t affect what we did before.
          Write to {MAIL} from the email address you used, and we’ll reply within 30 days.
        </p>
        <p>
          If you’re unhappy with how we handled your data, you can complain to the{" "}
          <a href="https://ndpc.gov.ng" rel="noopener noreferrer">
            Nigeria Data Protection Commission
          </a>{" "}
          or to the data protection authority where you live.
        </p>
      </>
    )
  },
  {
    id: "leaving-the-waitlist",
    title: "Leaving the waitlist",
    body: (
      <p>
        Use the unsubscribe link in any of our launch emails, reply to any email we send you, or
        write to {MAIL}. We’ll remove you from the list.
      </p>
    )
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        The whole site runs over an encrypted connection (HTTPS), only the people on our team who
        need it can see waitlist details, and we choose providers with strong security. No system is
        perfectly secure. If a breach affects your data and puts you at risk, we will tell you and
        the Nigeria Data Protection Commission, as the law requires.
      </p>
    )
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        The waitlist is for people aged 18 and over, and we don’t knowingly collect data from
        children. If you think a child has joined, write to {MAIL} and we’ll delete their details.
      </p>
    )
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        When we change this policy, we update the date at the top of this page. If a change matters
        to how we use your data, we’ll also email the waitlist.
      </p>
    )
  }
];

export default function PrivacyPage() {
  return (
    <>
      <NavHub home="/" />
      <main id="main">
        <LegalDocument
          title="Privacy Policy"
          lede="What this site and the waitlist collect, why, who processes it, and how to see, change or delete it."
          updated="14 November 2026"
          sections={SECTIONS}
        />
      </main>
      <Footer pitch="Sell, earn and grow your creator&nbsp;business with one Tipsona account." />
      <JsonLd graph={[breadcrumbs(["Privacy Policy", "/privacy/"])]} />
    </>
  );
}
