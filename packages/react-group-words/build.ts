import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["./src/index.tsx"],
  outdir: "./build",
  minify: true,
  external: ["react"],

  plugins: [dts({ output: { noBanner: true } })],
});
