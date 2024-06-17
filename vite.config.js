import { defineConfig } from "vite";
import { resolve } from "node:path";
const __dirname = resolve();

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  root: resolve(__dirname, ""),
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        main: resolve(__dirname, "zn/index.html"),
        cn: resolve(__dirname, "cn/index.html"),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          const category = chunkInfo.name.split("-")[0];
          return ["cn", "zn"].includes(category)
            ? `${category}/assets/[name].js`
            : `assets/[name].js`;
        },
        assetFileNames: (chunkInfo) => {
          const category = chunkInfo.name.split("-")[0];
          return ["cn", "zn"].includes(category)
            ? `${category}/assets/[name].[ext]`
            : `assets/[name].[ext]`;
        },
      },
      outDir: resolve(__dirname, "dist"),
    },
  },
});
