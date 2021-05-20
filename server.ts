import { serve, serveStatic } from "./sift/mod.ts";

console.log({ import: import.meta.url });

serve({
  "/": serveStatic("index.html", {
    baseUrl: import.meta.url,
  }),
  "/:filename+": serveStatic(".", {
    baseUrl: import.meta.url,
  }),
});
