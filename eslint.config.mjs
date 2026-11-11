import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Pages link to each other with plain <a> on purpose: a full page load is
      // what triggers the cross-document view transition in tipsona.css.
      "@next/next/no-html-link-for-pages": "off",
      // Static export has no image optimizer; photos are pre-sized WebP files.
      "@next/next/no-img-element": "off"
    }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
