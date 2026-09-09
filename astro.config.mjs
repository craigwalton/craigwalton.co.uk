// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://craigwalton.co.uk",
  // The default "jsx" mode drops line breaks before inline elements; true is lossless.
  compressHTML: true,
});
