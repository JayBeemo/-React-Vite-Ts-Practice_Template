import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import * as path from "path";
export default defineConfig({
    plugins: [react(), tsconfigPaths(), svgr()],
    base: "",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@fonts": path.resolve(__dirname, "src/assets/fonts"),
            "@images": path.resolve(__dirname, "src/assets/images"),
            "@svgs": path.resolve(__dirname, "src/assets/svgs"),
        },
    },
    build: {
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
});
