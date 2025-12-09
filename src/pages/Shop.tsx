import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

const categories = ['All', 'Apparel', 'Accessories', 'Art'];

const Shop = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <main className="pt-20 md:pt-24">
        <section className="py-16 bg-beige">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
                Support the Cause
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shop for Impact</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every purchase directly funds environmental education, community action, and the 80-marathon journey.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <Filter className="w-5 h-5 text-muted-foreground" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === category ? 'bg-sage text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-beige-warm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-square bg-beige relative overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-sage text-primary-foreground text-xs font-medium rounded-full">
                        <Leaf className="w-3 h-3" />
                        {product.material}
                      </div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{product.category}</span>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-bold text-foreground mb-2 mt-1 group-hover:text-sage transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-2xl font-bold text-sage mb-3">₹{product.price.toLocaleString()}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 p-3 bg-sage-light/50 rounded-lg">
                      <span>🌱</span>
                      <span>{product.impact}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => addToCart(product)}>Add to Cart</Button>
                      <Button variant="hero" className="flex-1" asChild>
                        <Link to={`/product/${product.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
