import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

const dirname = resolve();
console.log("dirname", dirname);
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    server: {
      host: "0.0.0.0",
      proxy: {},
    },
    resolve: {
      alias: {
        "@": resolve(dirname, "./src"),
        views: resolve(dirname, "./src/views"),
        api: resolve(dirname, "./src/api"),
        hooks: resolve(dirname, "./src/hooks"),
        store: resolve(dirname, "./src/store"),
      },
      extensions: [".js", ".vue"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import './src/style/variables.scss';`,
        },
      },
    },
  };
});
