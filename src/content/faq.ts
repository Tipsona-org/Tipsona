// TipStore questions and answers: facts from the TipStore PRD. The pages show
// them as an accordion and repeat them as FAQPage structured data for search.
export type Qa = { q: string; a: string };

export const TIPSTORE_FAQ: Qa[] = [
  {
    q: "What can I sell on TipStore?",
    a: "Digital products: e-books, PDFs, templates, ZIP files, images, audio, video and other downloadable resources. Physical products aren’t supported."
  },
  {
    q: "How do my customers get their files?",
    a: "Access is granted immediately after the payment is verified. Buyers get a confirmation email with their access link, and every purchase is saved in their library at tipstore.tipsona.co/library."
  },
  {
    q: "How do I get paid?",
    a: "Payments are processed by Paystack and added to your balance. Once your identity (KYC) and payout account are verified, you can request a withdrawal from your dashboard."
  },
  {
    q: "Do I need a website?",
    a: "No. Every seller automatically gets a storefront at tipstore.tipsona.co/yourname that works on phones, tablets and desktops."
  },
  {
    q: "Can people buy without an account?",
    a: "Yes. Guest checkout only needs an email address, and the purchase is linked to that email."
  },
  {
    q: "How are my files protected?",
    a: "Downloads never expose where your files are stored. Buyers download through signed links that expire after a short time, and every download is tracked."
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Free plan includes your storefront, product uploads and digital product sales, with limited products and storage. Pro and Business add more."
  },
  {
    q: "Can I use my own domain?",
    a: "Custom domains are planned for a future release. For now, your storefront lives at tipstore.tipsona.co/yourname."
  }
];

export const BILLING_FAQ: Qa[] = [
  {
    q: "Can I change plans later?",
    a: "Yes. When you upgrade, your subscription is activated and new features unlock immediately. When you downgrade, your current billing period stays active and the change takes effect at renewal."
  },
  {
    q: "What happens to my products if I downgrade?",
    a: "You keep access to every product you already have. If you’re over the new plan’s limit, you can’t publish new products until your total is back within the limit."
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Your subscription stays active until the current billing period ends, then moves to the Free plan. No data is deleted immediately when you cancel."
  },
  {
    q: "What if my subscription payment fails?",
    a: "You’re notified and billing is retried. During the grace period your existing products remain available and your storefront stays online. Some premium features may be restricted."
  },
  {
    q: "Is there a fee on each sale?",
    a: "Yes. Each sale is split into a platform fee, payment gateway charges where they apply, and your earnings. Free has a standard transaction fee; Pro and Business have lower fees. Exact fees are still to be announced."
  },
  {
    q: "Which billing periods can I choose?",
    a: "Monthly or yearly."
  }
];
