import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: {
    index: "./src/index.ts",
    react: "./src/react/index.tsx",
  },
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
