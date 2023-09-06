import type { APIRoute } from "astro";

export const POST: APIRoute = () => {
  return new Response("Hello, world!");
};

export const GET: APIRoute = () => {
  return new Response("Hello, world GET!");
};
