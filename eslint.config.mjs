import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Ground Zero keeps vendored/reference projects and Obsidian plugins in-tree.
    // They are not part of this Next app and have their own lint baselines.
    "repos/**",
    ".obsidian/**",
  ]),
]);

export default eslintConfig;
