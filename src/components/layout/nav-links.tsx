export type NavLink = { label: string; href: string };

type LinksProps = {
  links: NavLink[];
  /** The href of the page being shown, marked aria-current */
  current?: string;
};

/** Each link gets the next tip shape, so the bar and the mobile menu always match. */
const SHAPES = [
  "tip--square c-lilac",
  "tip--star c-sun",
  "tip--circle c-flame",
  "tip--pill c-mint",
  "tip--diamond c-blush"
];

const shapeFor = (n: number) => SHAPES[n % SHAPES.length];

export function NavBarLinks({ links, current }: LinksProps) {
  return links.map(({ label, href }, n) => (
    <li key={href}>
      <a href={href} aria-current={href === current ? "page" : undefined}>
        <span className={`tip ${shapeFor(n)}`} aria-hidden="true" />
        {label}
      </a>
    </li>
  ));
}

export function MenuLinks({ links, current }: LinksProps) {
  return links.map(({ label, href }, n) => (
    <li key={href}>
      <a className="mm-link" href={href} aria-current={href === current ? "page" : undefined}>
        {label} <span className={`tip ${shapeFor(n)}`} aria-hidden="true" />
      </a>
    </li>
  ));
}
