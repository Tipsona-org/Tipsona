import "react";

// Inline styles set design-token custom properties, e.g. style={{ "--acc": "var(--sun)" }}.
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
