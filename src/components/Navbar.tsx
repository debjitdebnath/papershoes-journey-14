import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import logo from '@/assets/logo.jpg';
const navLinks = [{
  name: 'Mission',
  href: '/#mission'
}, {
  name: 'Plastic Crisis',
  href: '/plastic-crisis-visualised'
}, {
  name: 'Impact',
  href: '/#impact'
}, {
  name: 'Join Us',
  href: '/#join'
}, {
  name: 'Shop',
  href: '/shop'
}, {
  name: 'Donate',
  href: '/#donate'
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    totalItems,
    setIsCartOpen
  } = useCart();
  const location = useLocation();
  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // Handle hash links
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (location.pathname === '/') {
        // Same page, just scroll
        const element = document.querySelector(hash);
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PaperShoes Logo" className="h-14 md:h-16 w-auto rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.name} to={link.href} onClick={() => handleNavClick(link.href)} className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.name}
              </Link>)}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            
            <Button variant="hero" size="default" asChild>
              <a href="#donate">Donate</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="h-14 w-14">
              {isOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden overflow-hidden">
              <div className="py-6 space-y-3">
                {navLinks.map(link => <Link key={link.name} to={link.href} onClick={() => handleNavClick(link.href)} className="block px-5 py-4 text-foreground font-medium hover:bg-secondary rounded-xl transition-colors text-4xl font-sans">
                    {link.name}
                  </Link>)}
                <div className="pt-4 px-5">
                  <Button variant="hero" className="w-full text-lg py-6" asChild>
                    <a href="#donate">Donate Now</a>
                  </Button>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </nav>
    </header>;
};
export default Navbar;