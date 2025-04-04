import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

export default defineConfig({
	integrations: [svelte(), tailwind(), mdx(), icon()],
});
