import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

const DEEPAI_API_HOST = "generativelanguage.googleapis.com";

serve(async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    return fetch(new URL("./Readme.md", import.meta.url));
  }

  url.host = DEEPAI_API_HOST;
  return await fetch(url, request);
});
