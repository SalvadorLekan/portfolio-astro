import type { APIRoute } from "astro";

export const POST: APIRoute = ({ params }) => {
  const { message } = params;
  return new Response(`Hello, ${message}!`);
};

export const prerender = false;
