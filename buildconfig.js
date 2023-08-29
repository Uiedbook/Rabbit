import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", ">0.016%", "chromeAndroid 44"],
    }),
    viteCompression(),
  ],
});
