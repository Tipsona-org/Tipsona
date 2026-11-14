import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavTipstore } from "@/components/layout/nav-tipstore";
import { LegalDocument, type LegalSection } from "@/components/sections/legal-document";
import { JsonLd } from "@/components/seo/json-ld";
import { CONTACT_EMAIL } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "TipStore Terms of Service",
  description:
    "The terms for selling and buying on TipStore: what you can sell, fees, payouts, identity checks, plans, refunds and how accounts are closed.",
  path: "/tipstore/terms/"
});

const MAIL = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
const PRICING = <a href="/tipstore/pricing/">pricing page</a>;
const PRIVACY = <a href="/tipstore/privacy/">Privacy Policy</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "about-these-terms",
    title: "About these terms",
    body: (
      <>
        <p>
          TipStore lets creators sell digital products from their own storefront, and lets anyone
          buy them. It is provided by Tipsona, 97, Adeola Odeku Street, 2nd Floor Union Bank
          Building, Victoria Island, Lagos State, Nigeria.
        </p>
        <p>
          These terms apply whenever you use TipStore: the app at app.tipsona.co, storefronts and
          checkout at tipstore.tipsona.co, and the buyers’ library. They are an agreement between
          you and Tipsona. You accept them when you create an account, or when you buy without one.
          Our {PRIVACY} explains how we handle personal data.
        </p>
        <p>
          Sections that start with “Selling” apply to sellers, sections that start with “Buying”
          apply to buyers, and everything else applies to everyone.
        </p>
      </>
    )
  },
  {
    id: "your-account",
    title: "Your account",
    body: (
      <ul>
        <li>You need an account to sell. You can buy with or without one.</li>
        <li>
          Give accurate details and keep them up to date. You must be at least 18 to sell. If
          you’re under 18, only buy with a parent’s or guardian’s permission.
        </li>
        <li>
          One person per account. Keep your password private: you’re responsible for what happens
          in your account. If you think someone else has got in, change your password and contact
          us straight away.
        </li>
        <li>
          Your username is also your store link. Some names are reserved, and we may take back a
          username that impersonates someone, misleads buyers or infringes someone’s rights.
        </li>
        <li>Some features, such as withdrawals, need a verified email address.</li>
      </ul>
    )
  },
  {
    id: "what-you-can-sell",
    title: "Selling: what you can sell",
    body: (
      <>
        <p>TipStore is for digital products that a buyer receives as soon as they pay:</p>
        <ul>
          <li>
            <strong>Files</strong>, delivered as downloads: ebooks, guides, templates, design
            assets, presets, audio and video lessons, and similar.
          </li>
          <li>
            <strong>Links</strong> to something hosted elsewhere: a course, a community, a booking
            page, and similar.
          </li>
        </ul>
        <p>Every product is a one-off purchase with a price above zero. You may not sell:</p>
        <ul>
          <li>physical products;</li>
          <li>
            anything you don’t have the right to sell, such as someone else’s course, template pack
            or font, without a licence that allows it;
          </li>
          <li>
            anything illegal where you or your buyer are, including counterfeit material, stolen
            accounts or login details, and content that infringes copyright or trademarks;
          </li>
          <li>sexually explicit material, or content that promotes violence or hatred;</li>
          <li>malware, or files made to harm a buyer’s device;</li>
          <li>schemes that promise guaranteed income, or other products designed to mislead;</li>
          <li>anything our payment processor doesn’t allow; we’ll tell you if this affects a product.</li>
        </ul>
        <p>
          We may remove a product that breaks these rules. Serious or repeated breaches can close
          your account.
        </p>
      </>
    )
  },
  {
    id: "your-products-and-buyers",
    title: "Selling: your products and your buyers",
    body: (
      <ul>
        <li>
          Describe each product accurately, and deliver what you describe. For a link product, keep
          the link working and the content available for as long as you promised.
        </li>
        <li>
          You can edit a product at any time. People who already bought it keep their access and
          get the current version; their order keeps the title and price they paid.
        </li>
        <li>
          Archiving takes a product off your store, and its buyers keep their access. A product
          that has sales can’t be deleted, because its orders are financial records.
        </li>
        <li>
          You answer questions about your products. We help buyers with access, payment and account
          problems.
        </li>
        <li>
          When someone buys from you, you see their name, email address, what they bought and what
          they paid. Use these details only to deliver and support the purchase, and as data
          protection law allows. Don’t add buyers to a marketing list without their permission.
        </li>
        <li>You’re responsible for any tax due on what you earn.</li>
      </ul>
    )
  },
  {
    id: "fees",
    title: "Selling: fees",
    body: (
      <ul>
        <li>
          For each sale, a platform fee and a payment processing fee come out of the price. The
          buyer pays exactly the price you set.
        </li>
        <li>
          The fees for your plan are on the {PRICING}, and the product form shows what you’ll earn
          before you publish.
        </li>
        <li>
          The amounts on each order are fixed at the moment of sale. If we change our fees, we’ll
          tell you before the change, and the new rates apply only to sales made after it.
        </li>
        <li>There is no fee for withdrawing your earnings.</li>
      </ul>
    )
  },
  {
    id: "balance-and-withdrawals",
    title: "Selling: your balance and withdrawals",
    body: (
      <>
        <p>
          When a buyer’s payment is confirmed, your earnings from that sale go straight into your
          available balance. Tipsona collects payments on your behalf and holds your balance until
          you withdraw it.
        </p>
        <p>To withdraw, you need:</p>
        <ul>
          <li>a verified email address;</li>
          <li>approved identity verification;</li>
          <li>a payout account in your own name, which we confirm with your bank;</li>
          <li>at least the minimum amount shown in your dashboard (currently ₦1,000);</li>
          <li>enough available balance to cover it.</li>
        </ul>
        <p>
          Our team reviews every withdrawal before it is sent. Most reach the bank within one to two
          business days of approval, but we can’t promise a time. If a withdrawal is rejected or
          fails, the full amount goes back to your available balance.
        </p>
        <p>
          We may hold your balance or a withdrawal, in full or in part, while we look into
          suspected fraud, a disputed payment, a sale that breaks these terms, or a legal
          requirement. If a payment is reversed, or money reaches your balance by mistake, we may
          take that amount back from your balance.
        </p>
      </>
    )
  },
  {
    id: "identity-verification",
    title: "Selling: identity verification",
    body: (
      <ul>
        <li>
          We verify your identity before your first withdrawal. You can build a store and sell
          without it; it only affects withdrawals.
        </li>
        <li>
          We may ask for a government-issued ID (a national ID card, driver’s licence, passport or
          voter’s card), proof of address and a photo of you. Our team reviews them. We may ask for
          more information, or refuse verification, and we’ll tell you why.
        </li>
        <li>The name on your payout account must match your verified identity.</li>
        <li>
          We verify identity because the law requires it of anyone moving money on someone else’s
          behalf, and because it stops a stolen account being emptied into a stranger’s bank
          account.
        </li>
      </ul>
    )
  },
  {
    id: "plans-and-billing",
    title: "Selling: plans and billing",
    body: (
      <ul>
        <li>
          Every seller starts on the Free plan. Pro and Business add more products, storage and
          features. The {PRICING} shows what each plan includes and costs.
        </li>
        <li>Paid plans are billed in advance, monthly or yearly, and renew until you cancel.</li>
        <li>An upgrade starts straight away. A downgrade takes effect at your next renewal.</li>
        <li>
          You can cancel at any time. Your plan stays active until the end of the period you paid
          for, then moves to Free. We don’t refund unused time, unless the law requires it.
        </li>
        <li>
          If a plan payment fails, we tell you and try again. During the grace period your products
          stay available and your store stays online, though some paid features may be restricted.
          If the payment still fails, your account moves to Free.
        </li>
        <li>
          If you have more products than your plan allows, you keep them all, but you can’t
          publish more until you’re within the limit.
        </li>
      </ul>
    )
  },
  {
    id: "how-buying-works",
    title: "Buying: how it works",
    body: (
      <ul>
        <li>
          When you buy, you’re buying from the seller, not from Tipsona. Tipsona runs the store and
          the checkout, and collects your payment on the seller’s behalf through our payment
          processor. The seller is responsible for the product.
        </li>
        <li>
          You pay the price shown at checkout. You can buy as a guest with just your email address;
          your purchase is then linked to that address.
        </li>
        <li>
          Our payment processor handles your card or bank details. We never see your full card
          number.
        </li>
        <li>
          You get access as soon as your payment is confirmed. We email you a confirmation with
          your access link, and purchases made with an account are saved in your library.
        </li>
        <li>
          Download links last a few minutes; click download again for a fresh one. A seller may
          limit how many times each file can be downloaded, or for how long.
        </li>
        <li>
          For a link product, the seller hosts the content somewhere else, and that site’s terms
          apply too.
        </li>
        <li>
          Unless the seller says otherwise, what you buy is for your own use. Don’t share, resell
          or publish the files or links. If you do, we may end your access.
        </li>
      </ul>
    )
  },
  {
    id: "refunds",
    title: "Buying: refunds",
    body: (
      <>
        <p>
          Digital products are delivered as soon as you pay, so sales are final, except when:
        </p>
        <ul>
          <li>you can’t access or download what you paid for, and it can’t be fixed;</li>
          <li>the product is clearly different from its description;</li>
          <li>the law gives you a right to a refund.</li>
        </ul>
        <p>
          Contact the seller first. If that doesn’t solve it, write to {MAIL} within 14 days of
          buying, with your order reference, and we’ll look into it with the seller. If a refund is
          due, we may take it from the seller’s balance.
        </p>
        <p>
          If you dispute the payment with your bank instead, we may pause your access to that
          product while the dispute is open.
        </p>
      </>
    )
  },
  {
    id: "ownership-and-licences",
    title: "Ownership and licences",
    body: (
      <ul>
        <li>
          Sellers keep ownership of their products and store content. By uploading, a seller lets
          Tipsona store, copy, display and deliver that content as needed to run their store and
          deliver it to buyers. This permission lasts while the content is on TipStore, and for as
          long as people who bought it keep their access.
        </li>
        <li>TipStore, Tipsona, our logos and the app’s design belong to Tipsona.</li>
        <li>
          Don’t copy or scrape TipStore, interfere with it, get around its security, or use it to
          send spam.
        </li>
      </ul>
    )
  },
  {
    id: "reporting",
    title: "Reporting a problem or an infringement",
    body: (
      <>
        <p>
          If you think a product or store infringes your copyright or trademark, or breaks these
          terms, write to {MAIL} with the link, what you own or what the problem is, and how to
          reach you. We’ll review it and may remove the product. We tell the seller, who can
          respond.
        </p>
        <p>We close the accounts of sellers who infringe repeatedly.</p>
      </>
    )
  },
  {
    id: "limiting-or-closing-accounts",
    title: "When we can limit or close an account",
    body: (
      <>
        <p>
          We may remove a product, suspend selling, limit withdrawals, or suspend or close an
          account when:
        </p>
        <ul>
          <li>these terms are broken;</li>
          <li>we suspect fraud, money laundering or other illegal activity;</li>
          <li>a court, a regulator or the law requires it;</li>
          <li>it’s needed to protect buyers, sellers or TipStore.</li>
        </ul>
        <p>
          Where we can, we’ll tell you what we did, why, and how to respond. If we close a seller’s
          account, we pay out any balance that isn’t needed to cover refunds, reversed payments or
          a legal requirement, once identity verification is complete. Buyers keep access to what
          they paid for, unless a product is removed because it is illegal or infringing.
        </p>
      </>
    )
  },
  {
    id: "closing-your-account",
    title: "Closing your account",
    body: (
      <ul>
        <li>
          You can close your account from Settings. Withdraw your balance first: an account with a
          balance, or with a withdrawal in progress, can’t be closed.
        </li>
        <li>
          Closing ends your sign-in and takes your store offline. People who bought from you keep
          what they bought.
        </li>
        <li>
          We keep orders, payments, withdrawals and security records after closure, because they
          are financial and legal records. Our {PRIVACY} explains this.
        </li>
        <li>If you close your account by mistake, contact us: it can be restored.</li>
      </ul>
    )
  },
  {
    id: "changes-to-tipstore",
    title: "Changes to TipStore",
    body: (
      <p>
        We keep improving TipStore, so features change, and some are added or removed. We work to
        keep it running, but we can’t promise that it will always be available or free of errors,
        for example during maintenance or when a provider we rely on has an outage.
      </p>
    )
  },
  {
    id: "liability",
    title: "Liability",
    body: (
      <>
        <p>As far as the law allows:</p>
        <ul>
          <li>TipStore is provided as it is;</li>
          <li>
            Tipsona isn’t liable for indirect or consequential losses, lost profits or lost data;
          </li>
          <li>
            our total liability to you for any claim is limited to the fees you paid us in the 12
            months before it, if you’re a seller, or to the price of the product concerned, if
            you’re a buyer.
          </li>
        </ul>
        <p>
          Nothing in these terms limits liability for fraud, or any liability that the law doesn’t
          allow us to limit.
        </p>
      </>
    )
  },
  {
    id: "seller-responsibility",
    title: "Selling: your responsibility for your store",
    body: (
      <p>
        If someone makes a claim against Tipsona because of your products, your store content or
        your breach of these terms, you agree to cover the costs that result, including reasonable
        legal fees.
      </p>
    )
  },
  {
    id: "disputes",
    title: "Disputes and the law that applies",
    body: (
      <p>
        If you have a problem, write to us first; most things can be sorted out that way. These
        terms are governed by the laws of the Federal Republic of Nigeria. Any dispute goes to the
        courts of Lagos State, unless the law where you live gives you the right to use the courts
        there.
      </p>
    )
  },
  {
    id: "changes-to-these-terms",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms. If a change matters, for example to fees or payouts, we’ll email
        account holders at least 30 days before it takes effect. If you keep using TipStore after
        that, the new terms apply; if you don’t agree, you can close your account.
      </p>
    )
  },
  {
    id: "contact",
    title: "Contact us",
    body: <p>Questions about these terms? Write to {MAIL}.</p>
  }
];

export default function TipStoreTermsPage() {
  return (
    <>
      <NavTipstore home="/tipstore/" pricing="/tipstore/pricing/" />
      <main id="main">
        <LegalDocument
          label="TipStore · Legal"
          title="Terms of Service"
          lede="The terms for selling and buying on TipStore: what you can sell, fees, payouts, identity checks, plans, refunds and closing an account."
          updated="14 November 2026"
          sections={SECTIONS}
        />
      </main>
      <Footer pitch="TipStore helps creators, educators, coaches, consultants, trainers and digital entrepreneurs sell what they know." />
      <JsonLd
        graph={[
          breadcrumbs(["TipStore", "/tipstore/"], ["Terms of Service", "/tipstore/terms/"])
        ]}
      />
    </>
  );
}
