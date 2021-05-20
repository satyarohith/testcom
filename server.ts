import { serve, serveStatic } from "https://deno.land/x/sift@0.3.1/mod.ts";

serve({
  "/": serveStatic("index.html", {
    baseUrl: import.meta.url,
  }),
  "/:filename+": serveStatic(".", {
    baseUrl: import.meta.url,
  }),
});
