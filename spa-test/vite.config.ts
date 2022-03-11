import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/microfrontend.tsx',
            output: {
                format: "system"
            },
            preserveEntrySignatures: "allow-extension"
        },
    },
    base: 'http://localhost:3000',
    plugins: [
        react({ fastRefresh: false }),
        svgr(),
        tsconfigPaths()
    ],
    server: {
        hmr:  {
          host: 'localhost'
      }
    }
})
