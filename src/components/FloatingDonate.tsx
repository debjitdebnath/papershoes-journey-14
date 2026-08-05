import { Heart } from 'lucide-react';

const FloatingDonate = () => (
  <a
    href="https://gofund.me/62b8c3961"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground font-bold uppercase tracking-wide text-sm shadow-elevated hover:opacity-90 transition-opacity"
    aria-label="Donate"
  >
    <Heart className="w-4 h-4" />
    Donate
  </a>
);

export default FloatingDonate;
