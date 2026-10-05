import { defineConfig } from "vite";

// Where the form posts and where "Sign in" goes: the platform's public hosts, overridable for a local bench
// (VITE_API_BASE=http://192.168.1.67:8000 VITE_APP_URL=http://localhost:8088 npm run dev).
export default defineConfig({
  define: {
    __API_BASE__: JSON.stringify(process.env.VITE_API_BASE ?? "https://api.smart-soil.eu"),
    __APP_URL__: JSON.stringify(process.env.VITE_APP_URL ?? "https://app.smart-soil.eu"),
  },
});
