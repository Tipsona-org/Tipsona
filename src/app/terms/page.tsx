import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { LegalDocument, type LegalSection } from "@/components/sections/legal-document";
import { JsonLd } from "@/components/seo/json-ld";
import { CONTACT_EMAIL } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use · Tipsona",
  description:
    "The terms for using tipsona.co and joining the Tipsona waitlist, before TipStore and our other products open.",
  path: "/terms/"
});

const MAIL = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "about-these-terms",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms cover your use of tipsona.co, including its product pages and the waitlist.
          The site is run by Tipsona, 97, Adeola Odeku Street, 2nd Floor Union Bank Building,
          Victoria Island, Lagos State, Nigeria.
        </p>
        <p>
          By using the site, you agree to these terms. If you don’t agree, please don’t use it. How
          we handle personal data is explained in our <a href="/privacy/">Privacy Policy</a>.
        </p>
      </>
    )
  },
  {
    id: "our-products",
    title: "Our products have their own terms",
    body: (
      <p>
        Each Tipsona product has its own terms, which you accept before you use it. Those terms, not
        these, cover the products themselves, including fees, payments, payouts and refunds.
        TipStore’s are in the <a href="/tipstore/terms/">TipStore Terms of Service</a>. Tipper,
        TipStar and our other products will publish theirs before they open.
      </p>
    )
  },
  {
    id: "the-waitlist",
    title: "The waitlist",
    body: (
      <ul>
        <li>Joining is free.</li>
        <li>Give accurate details, and only join with an email address that is yours.</li>
        <li>
          Joining doesn’t create an account, and it doesn’t reserve a username or promise you
          access, a launch date, a price or a feature. A username is confirmed when you sign up.
        </li>
        <li>We may remove entries that look automated, false or abusive.</li>
        <li>
          You can leave at any time, as our <a href="/privacy/#leaving-the-waitlist">Privacy
          Policy</a> explains.
        </li>
      </ul>
    )
  },
  {
    id: "information-on-this-site",
    title: "Information on this site",
    body: (
      <>
        <p>
          We describe our products as our plans stand today. Products marked “Coming soon”,
          features, prices and fees may change before launch, and some products may not launch.
        </p>
        <p>
          The storefronts, people, products and figures in our mockups are examples. Prices shown as
          “Coming soon” are not set yet, and the fee example on the pricing page is an illustration.
          None of it is an offer.
        </p>
      </>
    )
  },
  {
    id: "using-the-site",
    title: "Using the site",
    body: (
      <>
        <p>Please don’t:</p>
        <ul>
          <li>use the site for anything unlawful;</li>
          <li>attack the site, overload it or try to get into parts of it that aren’t public;</li>
          <li>get around the security check or submit the waitlist form automatically;</li>
          <li>copy the site in bulk, including by scraping it;</li>
          <li>pretend to be Tipsona, or to be connected with us when you aren’t.</li>
        </ul>
      </>
    )
  },
  {
    id: "our-name-and-content",
    title: "Our name and content",
    body: (
      <p>
        The names Tipsona, TipStore and our other products, our logos, our tip shapes and the
        site’s design and text belong to Tipsona. You’re welcome to share links to our pages.
        Please don’t copy our branding or content, or use it to suggest you’re connected with us,
        without our written permission. The photos on this site come from{" "}
        <a href="https://unsplash.com" rel="noopener noreferrer">
          Unsplash
        </a>{" "}
        and are used under the Unsplash License; they belong to their photographers.
      </p>
    )
  },
  {
    id: "other-websites",
    title: "Other websites",
    body: (
      <p>
        The site links to other websites, including our Instagram, TikTok and LinkedIn pages. Those
        sites have their own terms and privacy policies, and we aren’t responsible for them.
      </p>
    )
  },
  {
    id: "no-guarantees",
    title: "No guarantees",
    body: (
      <p>
        We work to keep the site accurate and available, but we provide it as it is. We don’t
        guarantee that it will always be available, free of errors or complete.
      </p>
    )
  },
  {
    id: "our-liability",
    title: "Our liability",
    body: (
      <p>
        As far as the law allows, Tipsona is not liable for any loss that comes from using the
        site, from not being able to use it, or from relying on information on it before a product
        launches. Nothing in these terms limits any liability that the law doesn’t allow us to
        limit.
      </p>
    )
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        When we change these terms, we update the date at the top of this page. If you keep using
        the site after a change, the new terms apply.
      </p>
    )
  },
  {
    id: "law",
    title: "The law that applies",
    body: (
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria. Any dispute goes
        to the courts of Lagos State, unless the law where you live gives you the right to use the
        courts there.
      </p>
    )
  },
  {
    id: "contact",
    title: "Contact us",
    body: <p>Questions about these terms? Write to {MAIL}.</p>
  }
];

export default function TermsPage() {
  return (
    <>
      <NavHub home="/" />
      <main id="main">
        <LegalDocument
          title="Terms of Use"
          lede="The terms for using this site and joining the waitlist. Each Tipsona product, such as TipStore, has its own terms."
          updated="14 November 2026"
          sections={SECTIONS}
        />
      </main>
      <Footer pitch="Sell, earn and grow your creator&nbsp;business with one Tipsona account." />
      <JsonLd graph={[breadcrumbs(["Terms of Use", "/terms/"])]} />
    </>
  );
}
