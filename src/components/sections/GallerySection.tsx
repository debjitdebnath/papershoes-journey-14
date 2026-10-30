import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Camera, Loader2, X } from "lucide-react";

type GalleryPhoto = {
  id: string;
  storage_path: string;
  caption: string | null;
  created_at: string;
};

type PhotoWithUrl = GalleryPhoto & { url: string };

const BUCKET = "campaign-gallery";

const GallerySection = () => {
  const { toast } = useToast();
  const [photos, setPhotos] = useState<PhotoWithUrl[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<PhotoWithUrl | null>(null);

  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadPhotos = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("gallery_photos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to load gallery:", error.message);
      setLoading(false);
      return;
    }

    const withUrls: PhotoWithUrl[] = [];
    for (const photo of (data ?? []) as GalleryPhoto[]) {
      const { data: signed } = await supabase.storage
        .from(BUCKET)
        .createSignedUrl(photo.storage_path, 60 * 60 * 24 * 7);
      if (signed?.signedUrl) {
        withUrls.push({ ...photo, url: signed.signedUrl });
      }
    }
    setPhotos(withUrls);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadPhotos();
  }, [loadPhotos]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const resetForm = () => {
    setPassword("");
    setCaption("");
    setFile(null);
    setUploadError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleUpload = async () => {
    setUploadError(null);
    if (!password.trim()) {
      setUploadError("Please enter the upload password.");
      return;
    }
    if (!file) {
      setUploadError("Please choose a photo to upload.");
      return;
    }

    setUploading(true);
    try {
      const form = new FormData();
      form.append("password", password);
      form.append("caption", caption);
      form.append("file", file);

      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/gallery-upload`,
        { method: "POST", body: form }
      );
      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        setUploadError(body.error ?? "Upload failed. Please try again.");
        setUploading(false);
        return;
      }

      toast({
        title: "Photo shared!",
        description: "Thanks — your photo is now live in the gallery.",
      });
      resetForm();
      setOpen(false);
      await loadPhotos();
    } catch {
      setUploadError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-terracotta font-medium mb-3">
            Updates from the Campaign
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            From the Road
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Photos straight from the team as they run from source to sea —
            start lines, school visits, and the quiet miles in between.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : photos.length === 0 ? (
          <p className="text-center text-muted-foreground py-10">
            No photos yet — check back soon.
          </p>
        ) : (
          <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
            {photos.map((photo, i) => (
              <button
                key={photo.id}
                onClick={() => setLightbox(photo)}
                className={`group relative block w-full mb-4 break-inside-avoid overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                  i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.caption ?? "Campaign photo"}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {photo.caption && (
                  <span className="absolute bottom-0 left-0 right-0 p-3 text-left text-xs md:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                    {photo.caption}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Dialog
            open={open}
            onOpenChange={(o) => {
              setOpen(o);
              if (!o) resetForm();
            }}
          >
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Camera className="h-4 w-4" />
                Upload a photo from your phone
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share a photo from the road</DialogTitle>
                <DialogDescription>
                  This upload is password-protected — only the campaign team
                  can add photos.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="gallery-password">Upload password</Label>
                  <Input
                    id="gallery-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="gallery-file">Photo</Label>
                  <Input
                    id="gallery-file"
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  />
                  <p className="text-xs text-muted-foreground">
                    JPG, PNG or WebP — up to 15 MB.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="gallery-caption">Caption (optional)</Label>
                  <Input
                    id="gallery-caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="e.g. Start line at the Dehradun Marathon"
                    maxLength={140}
                  />
                </div>

                {uploadError && (
                  <p className="text-sm text-destructive">{uploadError}</p>
                )}

                <Button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="w-full"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Uploading…
                    </>
                  ) : (
                    "Upload photo"
                  )}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close photo"
          >
            <X className="h-5 w-5" />
          </button>
          <figure
            className="max-w-4xl max-h-[90vh] flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.url}
              alt={lightbox.caption ?? "Campaign photo"}
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
            />
            {lightbox.caption && (
              <figcaption className="text-sm text-white/80 text-center">
                {lightbox.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
