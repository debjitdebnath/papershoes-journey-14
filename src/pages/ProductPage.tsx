import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Truck, RotateCcw, Shield, Heart, ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
          <Button variant="outline" asChild><Link to="/shop">Back to Shop</Link></Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!', { description: `${product.name} has been added to your cart.` });
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-6 py-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />Back
          </button>
        </div>

        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="aspect-square bg-beige rounded-3xl relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-sage text-primary-foreground text-sm font-medium rounded-full">
                    <Leaf className="w-4 h-4" />{product.material}
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <span className="inline-block px-3 py-1 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">{product.category}</span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                <p className="text-4xl font-bold text-sage mb-6">₹{product.price.toLocaleString()}</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                <div className="bg-sage-light/50 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-sage" />How This Helps
                  </h3>
                  <p className="text-muted-foreground">🌱 <strong>This purchase {product.impact.toLowerCase()}</strong> — directly supporting environmental education.</p>
                </div>

                <Button variant="hero" size="xl" className="w-full mb-8" onClick={handleAddToCart}>Add to Cart</Button>

                <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-sage-light rounded-xl flex items-center justify-center"><Truck className="w-5 h-5 text-sage" /></div>
                    <span className="text-sm text-muted-foreground">Free Shipping<br/>over ₹999</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-sage-light rounded-xl flex items-center justify-center"><RotateCcw className="w-5 h-5 text-sage" /></div>
                    <span className="text-sm text-muted-foreground">30-Day<br/>Returns</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-sage-light rounded-xl flex items-center justify-center"><Shield className="w-5 h-5 text-sage" /></div>
                    <span className="text-sm text-muted-foreground">Secure<br/>Payment</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Sustainability</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full"><Check className="w-3 h-3 text-sage" />Eco-Friendly</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full"><Check className="w-3 h-3 text-sage" />Carbon Neutral</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-beige">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relProduct) => (
                <Link key={relProduct.id} to={`/product/${relProduct.id}`} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all">
                  <div className="aspect-square bg-beige-warm relative overflow-hidden">
                    <img src={relProduct.image} alt={relProduct.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-foreground group-hover:text-sage transition-colors">{relProduct.name}</h3>
                    <p className="text-xl font-bold text-sage mt-2">₹{relProduct.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
