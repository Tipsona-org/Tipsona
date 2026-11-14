import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavTipstore } from "@/components/layout/nav-tipstore";
import { LegalDocument, type LegalSection } from "@/components/sections/legal-document";
import { JsonLd } from "@/components/seo/json-ld";
import { CONTACT_EMAIL } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "TipStore Privacy Policy",
  description:
    "What TipStore collects from sellers, buyers and store visitors, why, who processes it, how long we keep it and how to see, change or delete it.",
  path: "/tipstore/privacy/"
});

const MAIL = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are and what this covers",
    body: (
      <>
        <p>
          TipStore is provided by Tipsona (<span className="ph-tag">Placeholder</span> registered
          company name and RC number), 97, Adeola Odeku Street, 2nd Floor Union Bank Building,
          Victoria Island, Lagos State, Nigeria. We decide how the personal data described here is
          used, which makes us its controller under the Nigeria Data Protection Act 2023.
        </p>
        <p>
          This policy covers TipStore: the app at app.tipsona.co, storefronts and checkout at
          tipstore.tipsona.co, the buyers’ library and the emails TipStore sends. Our website,
          tipsona.co, has its own <a href="/privacy/">Privacy Policy</a>.
        </p>
      </>
    )
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <h3>Your account</h3>
        <p>
          Your name, email address and username; your password, stored only as a scrambled hash
          that we can’t read back; your profile photo, if you add one; and when you last signed in.
        </p>
        <h3>If you sell</h3>
        <ul>
          <li>
            Your store details: store name, bio, category, country, preferred currency, social
            links, images, and your phone number if you add it.
          </li>
          <li>Your products and their files.</li>
          <li>Your sales, balance, withdrawals and plan payments.</li>
          <li>
            Your payout account: the bank, the account number, and the account name your bank
            returns when we check it.
          </li>
          <li>
            Identity verification: the documents you upload (an ID document, proof of address and a
            photo of you) and our decision on them.
          </li>
        </ul>
        <h3>If you buy</h3>
        <ul>
          <li>
            Your name and email address, including when you buy as a guest; what you bought, the
            price and when.
          </li>
          <li>
            A summary of how you paid, such as “Visa •••• 4081” or the bank you paid from, and the
            payment reference. Paystack handles your full card details; we never receive them.
          </li>
          <li>
            When you download a file: the time, your IP address, your browser, your type of device
            and your country.
          </li>
        </ul>
        <h3>When you visit a store</h3>
        <p>
          We count views of storefront and product pages using a random ID stored in your browser,
          together with the page, the site that sent you and your type of device. The ID isn’t
          linked to your name or your account.
        </p>
        <h3>To keep accounts safe</h3>
        <p>
          A record of important actions, such as signing in, changing a password or payout account,
          and requesting a withdrawal, with the IP address and browser used.
        </p>
        <h3>When you contact us</h3>
        <p>Your messages and what we reply.</p>
      </>
    )
  },
  {
    id: "cookies-and-storage",
    title: "Cookies and browser storage",
    body: (
      <>
        <ul>
          <li>Sign-in cookies keep you logged in. TipStore can’t work without them.</li>
          <li>The random visitor ID described above, used only to count store views.</li>
          <li>
            Your preferences, such as light or dark mode, and temporary data that completes a
            payment.
          </li>
        </ul>
        <p>We don’t use advertising cookies or third-party analytics.</p>
      </>
    )
  },
  {
    id: "why-we-use-it",
    title: "Why we use it",
    body: (
      <ul>
        <li>
          <strong>To provide TipStore:</strong> run your account, your store and your purchases,
          take payments and send payouts. We need your data to do what you asked us to do.
        </li>
        <li>
          <strong>To verify sellers and check withdrawals</strong>, and to prevent fraud and money
          laundering. The law requires this of us, and it keeps TipStore safe for everyone.
        </li>
        <li>
          <strong>To keep accounts secure</strong>, for example by spotting sign-ins and changes
          that don’t look like you.
        </li>
        <li>
          <strong>To send emails you need:</strong> email verification, receipts and access links,
          sale and withdrawal updates, and security alerts. You can turn off optional emails in
          your notification settings; security and purchase emails always go out.
        </li>
        <li>
          <strong>To show sellers how their store is doing</strong> and to improve TipStore. We
          use counts and trends for this, not profiles of individual people.
        </li>
        <li>
          <strong>To meet our legal duties</strong>, including tax and accounting record-keeping.
        </li>
      </ul>
    )
  },
  {
    id: "what-sellers-see",
    title: "What sellers see about buyers",
    body: (
      <p>
        When you buy from a seller, they see your name, email address, what you bought, what you
        paid and when. They see how many people viewed and downloaded their products, but not who.
        Our terms require sellers to use your details only to deliver and support your purchase,
        and as data protection law allows. If a seller uses them for anything else, the seller is
        responsible for that.
      </p>
    )
  },
  {
    id: "who-we-share-it-with",
    title: "Who we share it with",
    body: (
      <>
        <p>Only the companies that run parts of TipStore for us, and only for that work:</p>
        <ul>
          <li>
            <strong>Paystack</strong> processes payments and checks the account name on sellers’
            payout accounts.
          </li>
          <li>
            <strong>Cloudflare</strong> stores product files, images and identity documents. Paid
            files and identity documents are kept in private storage.
          </li>
          <li>
            <strong>Supabase</strong> hosts our database.
          </li>
          <li>
            <strong>Vercel</strong> and our other hosting providers run the app and its servers.
          </li>
          <li>
            <strong>Resend</strong> sends our emails.
          </li>
          <li>
            <strong>Zoho</strong> runs our company mailbox, where emails you send us arrive.
          </li>
        </ul>
        <p>
          We also share information with our professional advisers, such as lawyers and
          accountants, when we need their help, and with the police, regulators or courts when the
          law requires it, including to prevent financial crime. We don’t sell your personal data.
        </p>
      </>
    )
  },
  {
    id: "outside-nigeria",
    title: "Data stored outside Nigeria",
    body: (
      <p>
        Some of these companies store and process data outside Nigeria, including in the United
        States. We rely on the data protection commitments in their terms with us to keep it
        protected, as the Nigeria Data Protection Act 2023 allows.
      </p>
    )
  },
  {
    id: "how-long-we-keep-it",
    title: "How long we keep it",
    body: (
      <ul>
        <li>
          <strong>Account and store details:</strong> while your account is open. When you close
          it, your store goes offline and we keep only what the points below require.
        </li>
        <li>
          <strong>Orders, payments, balances, withdrawals and plan payments:</strong> for as long
          as tax and financial record-keeping laws require, even after you close your account,
          because they are financial records for you, your buyers and us.
        </li>
        <li>
          <strong>Identity documents:</strong> while your account is open, and afterwards for as
          long as anti-money-laundering law requires.
        </li>
        <li>
          <strong>Download and security records:</strong> for as long as we need them to deliver
          purchases, investigate problems and meet our legal duties.
        </li>
        <li>
          <strong>Store view counts:</strong> kept only as anonymous totals.
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
          You can change most account details yourself in Settings, and close your account there.
          Some data can’t be deleted while the law requires us to keep it, such as financial
          records; if that applies, we’ll explain. For anything else, write to {MAIL} from the email
          address on your account, and we’ll reply within 30 days.
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
    id: "security",
    title: "Security",
    body: (
      <ul>
        <li>Passwords are stored only as scrambled hashes.</li>
        <li>
          Sign-in cookies are sent only over encrypted connections, and page scripts can’t read
          them.
        </li>
        <li>
          Paid files and identity documents are kept in private storage. Downloads go through
          links that expire within minutes.
        </li>
        <li>
          Only team members whose role needs it can see identity documents, and staff actions are
          recorded.
        </li>
        <li>
          No system is perfectly secure. If a breach affects your data and puts you at risk, we
          will tell you and the Nigeria Data Protection Commission, as the law requires.
        </li>
      </ul>
    )
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        You must be 18 or older to sell. Buyers under 18 should only buy with a parent’s or
        guardian’s permission. If you think a child has given us personal data without that
        permission, write to {MAIL} and we’ll deal with it.
      </p>
    )
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        When we change this policy, we update the date at the top of this page. If a change
        matters to how we use your data, we’ll also email account holders before it takes effect.
      </p>
    )
  },
  {
    id: "contact",
    title: "Contact us",
    body: <p>Questions about this policy or your data? Write to {MAIL}.</p>
  }
];

export default function TipStorePrivacyPage() {
  return (
    <>
      <NavTipstore home="/tipstore/" pricing="/tipstore/pricing/" />
      <main id="main">
        <LegalDocument
          label="TipStore · Legal"
          title="Privacy Policy"
          lede="What TipStore collects from sellers, buyers and store visitors, why, who processes it, and how to see, change or delete it."
          updated="14 November 2026"
          sections={SECTIONS}
        />
      </main>
      <Footer pitch="TipStore helps creators, educators, coaches, consultants, trainers and digital entrepreneurs sell what they know." />
      <JsonLd
        graph={[breadcrumbs(["TipStore", "/tipstore/"], ["Privacy Policy", "/tipstore/privacy/"])]}
      />
    </>
  );
}
