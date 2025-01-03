import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["./src/index.ts", "./src/react/index.tsx"],
  outdir: "./build",
  minify: true,
  target: "browser",
  format: "cjs",
  plugins: [
    dts({
      output: {
        noBanner: true,
      },
    }),
  ],
});
