import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(path.join(__dirname, "/src/components")),
      },
      {
        find: "@assets",
        replacement: path.resolve(path.join(__dirname, "/src/assets")),
      },
      {
        find: "@hooks",
        replacement: path.resolve(path.join(__dirname, "/src/hooks")),
      },
      {
        find: "@common",
        replacement: path.resolve(path.join(__dirname, "/src/common")),
      },
      {
        find: "@pages",
        replacement: path.resolve(path.join(__dirname, "/src/pages")),
      },
      {
        find: "@mocks",
        replacement: path.resolve(path.join(__dirname, "/src/mocks")),
      },
      {
        find: "@services",
        replacement: path.resolve(path.join(__dirname, "/src/services")),
      },
      {
        find: "@context",
        replacement: path.resolve(path.join(__dirname, "/src/context")),
      },
    ],
  },
});
