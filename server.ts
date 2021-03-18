import { serve, serveStatic } from "https://deno.land/x/sift@0.1.6/mod.ts";

console.log({ url: import.meta.url });

serve({
  "/": serveStatic("index.html", {
    baseUrl: import.meta.url,
    intervene: (response) => {
      response.headers.set("content-type", "text/html; charset=utf-8");
      return response;
    },
  }),
  "/:filename+": serveStatic(".", {
    baseUrl: import.meta.url,
    intervene: (response) => {
      console.info("res url:", response.url);
      console.info("res content-type:", response.headers.get("content-type"));
      return response;
    },
  }),
});
