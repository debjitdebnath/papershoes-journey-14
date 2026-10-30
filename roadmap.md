# Roadmap

- [x] Store upload password (papershoes80_BRIGHT) as backend secret
- [x] Create campaign-gallery storage bucket + read policies
- [x] Create gallery_photos table (public read) via migration
- [x] Build gallery-upload edge function (password + image validation)
- [x] Seed the 8 uploaded campaign photos into bucket + table
- [x] Build GallerySection ("From the Road") with masonry grid + lightbox
- [x] Add phone upload flow: password prompt + file picker, wired to edge function
- [x] Place section on homepage; verify in preview with Playwright
- [x] Grant anon/authenticated SELECT on gallery_photos (was blocking the grid)
