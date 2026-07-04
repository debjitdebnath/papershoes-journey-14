import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const ShopSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { addToCart } = useCart();

  return (
    <section id="shop" className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-3">
            Support the Cause
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Shop for Impact
          </h2>
          <p className="text-base text-muted-foreground">
            Every purchase funds education and community action.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-sage transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-2xl font-bold text-sage mb-3">
                  ₹{product.price.toLocaleString()}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 p-3 bg-sage-light/50 rounded-lg">
                  <span>🌱</span>
                  <span>{product.impact}</span>
                </div>

                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/shop">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopSection;
