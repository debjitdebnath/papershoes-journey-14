import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const BUCKET = 'campaign-gallery';
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']);
const MAX_SIZE = 15 * 1024 * 1024;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  if (req.method !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  try {
    const form = await req.formData();
    const password = form.get('password');
    const rawCaption = form.get('caption');
    const caption = typeof rawCaption === 'string' && rawCaption.trim() ? rawCaption.trim().slice(0, 140) : null;
    const file = form.get('file');

    const expected = Deno.env.get('GALLERY_UPLOAD_PASSWORD');
    if (!expected || typeof password !== 'string' || password !== expected) {
      return json(401, { error: 'Incorrect password' });
    }

    if (!(file instanceof File) || file.size === 0) {
      return json(400, { error: 'Please choose a photo to upload' });
    }
    if (!ALLOWED_TYPES.has(file.type)) {
      return json(400, { error: 'Please upload a photo (JPG, PNG or WebP)' });
    }
    if (file.size > MAX_SIZE) {
      return json(413, { error: 'Photo is too large (max 15 MB)' });
    }

    const ext = file.type === 'image/png' ? 'png' : file.type === 'image/webp' ? 'webp' : file.type === 'image/heic' ? 'heic' : file.type === 'image/heif' ? 'heif' : 'jpg';
    const path = `updates/${crypto.randomUUID()}.${ext}`;

    const admin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { error: uploadError } = await admin.storage
      .from(BUCKET)
      .upload(path, file, { contentType: file.type, upsert: false });
    if (uploadError) {
      console.error('gallery upload failed:', uploadError.message);
      return json(500, { error: 'Upload failed. Please try again.' });
    }

    const { error: dbError } = await admin
      .from('gallery_photos')
      .insert({ storage_path: path, caption });
    if (dbError) {
      console.error('gallery row insert failed:', dbError.message);
      await admin.storage.from(BUCKET).remove([path]);
      return json(500, { error: 'Upload failed. Please try again.' });
    }

    return json(200, { ok: true, path });
  } catch (e) {
    console.error('gallery-upload error:', e);
    return json(500, { error: 'Unexpected error. Please try again.' });
  }
});
