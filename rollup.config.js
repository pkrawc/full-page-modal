import babel from "rollup-plugin-babel"

export default {
  input: "index.js",
  output: {
    file: "build/index.js",
    format: "cjs"
  },
  plugins: [babel({ exclude: "node_modules" })],
  external: ["styled-components", "react"]
}
