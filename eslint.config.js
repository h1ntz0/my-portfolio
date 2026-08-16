const { defineConfig } = require("eslint/config");
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = defineConfig([
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "eslint.config.js",
      "postcss.config.mjs",
      "next.config.mjs",
      "**/*.config.js",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
]);
