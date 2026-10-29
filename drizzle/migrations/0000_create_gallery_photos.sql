CREATE TABLE public.gallery_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  storage_path text NOT NULL,
  caption text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.gallery_photos TO anon;
GRANT SELECT ON public.gallery_photos TO authenticated;
GRANT ALL ON public.gallery_photos TO service_role;

ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery photos"
  ON public.gallery_photos
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public read campaign gallery objects"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'campaign-gallery');

CREATE POLICY "Service role writes campaign gallery objects"
  ON storage.objects
  FOR ALL
  TO service_role
  USING (bucket_id = 'campaign-gallery')
  WITH CHECK (bucket_id = 'campaign-gallery');
