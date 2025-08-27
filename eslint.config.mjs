// eslint.config.mjs (THE FINAL, WORKING CONFIG - WITHOUT TAILWIND PLUGIN)

import { FlatCompat } from "@eslint/eslintrc";
// --- Plugins ---
import prettierPlugin from "eslint-config-prettier";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

// --- Compatibility layer setup for old configs (like eslint-config-next) ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // --- Use the compatibility layer ONLY for the old-style Next.js config ---
  ...compat.extends("next/core-web-vitals"),

  // --- Use the other modern plugins directly ---
  prettierPlugin,

  // --- Configure the simple-import-sort plugin ---
  {
    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  // --- Your other custom rules ---
  {
    rules: {
      "comma-dangle": "off",
    },
  },

  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-undef": "off",
    },
  },

  // --- Global ignores ---
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
