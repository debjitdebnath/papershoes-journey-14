import { Link } from 'react-router-dom';
import { Leaf, Mail, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-earth text-beige py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-sage rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-beige">
                PaperShoes
              </span>
            </Link>
            <p className="text-beige/70 text-sm leading-relaxed mb-4">
              80 Marathons • 80 Days • 3 Runners • One Mission.
              A world-first movement to protect India's fragile natural future.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-beige/10 rounded-xl flex items-center justify-center hover:bg-sage transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-beige/10 rounded-xl flex items-center justify-center hover:bg-sage transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-beige/10 rounded-xl flex items-center justify-center hover:bg-sage transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-beige/10 rounded-xl flex items-center justify-center hover:bg-sage transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/#mission" className="text-beige/70 hover:text-beige transition-colors">Our Mission</Link></li>
              <li><Link to="/#impact" className="text-beige/70 hover:text-beige transition-colors">Impact</Link></li>
              <li><Link to="/#tracker" className="text-beige/70 hover:text-beige transition-colors">Follow the Run</Link></li>
              <li><Link to="/shop" className="text-beige/70 hover:text-beige transition-colors">Shop</Link></li>
              <li><Link to="/#donate" className="text-beige/70 hover:text-beige transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-beige/70 hover:text-beige transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-beige/70 hover:text-beige transition-colors">Host a Workshop</a></li>
              <li><a href="#" className="text-beige/70 hover:text-beige transition-colors">Corporate Partnership</a></li>
              <li><a href="#" className="text-beige/70 hover:text-beige transition-colors">Press & Media</a></li>
              <li><a href="#" className="text-beige/70 hover:text-beige transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-beige/70 text-sm mb-4">
              Get weekly updates on the run, impact stories, and ways to contribute.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-beige/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full pl-10 pr-4 py-3 bg-beige/10 border border-beige/20 rounded-xl text-beige placeholder:text-beige/50 focus:outline-none focus:border-sage transition-colors"
                  required
                />
              </div>
              <Button type="submit" variant="hero" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-beige/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-beige/60 text-sm">
              © 2025 PaperShoes. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:info@paper.shoes" className="text-beige/70 hover:text-beige text-sm transition-colors">
                info@paper.shoes
              </a>
              <span className="text-beige/40">|</span>
              <a href="#" className="text-beige/70 hover:text-beige text-sm transition-colors">
                Privacy Policy
              </a>
              <span className="text-beige/40">|</span>
              <a href="#" className="text-beige/70 hover:text-beige text-sm transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
