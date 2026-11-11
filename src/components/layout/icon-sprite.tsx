import { ICONS } from "@/content/icons";

/** Every icon as an SVG symbol, so pages draw them with <use href="#i-name">. */
export function IconSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", width: "0", height: "0", overflow: "hidden" }}
      aria-hidden="true"
      focusable="false"
    >
      {Object.entries(ICONS).map(([name, body]) => (
        <symbol
          key={name}
          id={`i-${name}`}
          viewBox="0 0 24 24"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      ))}
    </svg>
  );
}
