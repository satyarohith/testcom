import { serve, serveStatic } from "https://deno.land/x/sift@0.3.0/mod.ts";

serve({
  "/": serveStatic("index.html", {
    baseUrl: import.meta.url,
    intervene: (_req, response) => {
      response.headers.set("content-type", "text/html; charset=utf-8");
      return response;
    },
  }),
  "/:filename+": serveStatic(".", {
    baseUrl: import.meta.url,
    intervene: (_req, response) => {
      console.info("res url:", response.url);
      console.info("res content-type:", response.headers.get("content-type"));
      return response;
    },
  }),
});
