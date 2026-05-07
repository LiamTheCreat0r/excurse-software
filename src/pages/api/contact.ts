import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
};
