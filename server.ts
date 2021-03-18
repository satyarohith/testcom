import { serve, serveStatic } from "https://deno.land/x/sift@0.1.6/mod.ts";

serve({
  "/": serveStatic("index.html", { baseUrl: import.meta.url }),
  "/:filename+": serveStatic(".", { baseUrl: import.meta.url })
});
