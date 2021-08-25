import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
    plugins: [
      typescript(),
      terser({
        format: {
          comments: false,
        },
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.esm.js",
      format: "es",
    },
    plugins: [
      typescript(),
      terser({
        format: {
          comments: false,
        },
      }),
    ],
  },
];
