import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    solidJs(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    })
  ]
});
