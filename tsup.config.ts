import type { Options } from "tsup";

const config: Options = {
  entry: ["lib/index.ts"],
  dts: true,
  clean: true,
  format: ["esm"],
  minify: true,
  treeshake: "safest",
  async onSuccess() {
    console.log("OK");
  },
  target: ["es2015"],
  bundle: true,
};

export default config;
