import {
  json,
  serve,
  serveStatic,
} from "https://deno.land/x/sift@0.3.1/mod.ts";

serve({
  "/": serveStatic("index.html", {
    baseUrl: import.meta.url,
  }),
  "/dev": () => json({ message: "Hello" }),
  "/:filename+": serveStatic(".", {
    baseUrl: import.meta.url,
  }),
});
