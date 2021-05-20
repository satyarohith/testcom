import { serve, serveStatic } from "./sift/mod.ts";

serve({
  "/": serveStatic("index.html", {
    baseUrl: import.meta.url,
  }),
  "/:filename+": serveStatic(".", {
    baseUrl: import.meta.url,
  }),
});
