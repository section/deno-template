import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
serve((_req) => new Response("Hello World from Deno on Section!"), { port: 1993 });