import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Truck, Shield, Tag, CreditCard, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shippingCost = totalPrice >= 999 ? 0 : 99;
  const discount = promoApplied ? Math.round(totalPrice * 0.1) : 0;
  const finalTotal = totalPrice + shippingCost - discount;

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'papershoes10') {
      setPromoApplied(true);
    }
  };

  const handlePlaceOrder = () => {
    // Simulate order placement
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <CartDrawer />
        
        <main className="pt-20 md:pt-24">
          <div className="container mx-auto px-6 py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-24 h-24 bg-sage rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-12 h-12 text-primary-foreground" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Thank You for Your Order!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Your order has been confirmed. We'll send you an email with tracking details shortly.
              </p>

              <div className="bg-sage-light/50 rounded-2xl p-6 mb-8">
                <p className="text-sage-dark font-medium">
                  🌱 Your purchase directly funds environmental education programs, reaching thousands of students across India.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <CartDrawer />
        
        <main className="pt-20 md:pt-24">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-xl mx-auto text-center">
              <ShoppingBag className="w-20 h-20 text-muted-foreground/30 mx-auto mb-6" />
              <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-6">Add some products to checkout.</p>
              <Button variant="hero" asChild>
                <Link to="/shop">Browse Products</Link>
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <main className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/shop"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>

        <section className="py-8">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Checkout Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Contact */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                    />
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="newsletter" className="rounded" />
                      <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                        Email me with news and offers
                      </label>
                    </div>
                  </div>
                </div>

                {/* Shipping */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">Shipping Address</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name"
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                      />
                      <input
                        type="text"
                        placeholder="PIN Code"
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                    />
                  </div>
                </div>

                {/* Payment */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">Payment</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    All transactions are secure and encrypted.
                  </p>
                  
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-5 h-5 text-sage" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </div>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Card number"
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Name on card"
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-sage" />
                      <span>Secure checkout</span>
                    </div>
                    <span>•</span>
                    <span>Razorpay + Stripe</span>
                  </div>
                </div>
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-24">
                  <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

                  {/* Items */}
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-beige rounded-lg flex items-center justify-center relative">
                          <ShoppingBag className="w-6 h-6 text-muted-foreground/30" />
                          <span className="absolute -top-2 -right-2 w-5 h-5 bg-sage text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.material}</p>
                        </div>
                        <p className="font-medium text-foreground">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Promo Code */}
                  <div className="flex gap-2 mb-6">
                    <div className="flex-1 relative">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo code"
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                      />
                    </div>
                    <Button variant="outline" onClick={handleApplyPromo}>
                      Apply
                    </Button>
                  </div>
                  {promoApplied && (
                    <p className="text-sm text-sage mb-4">✓ Promo code applied: 10% off</p>
                  )}

                  {/* Totals */}
                  <div className="space-y-3 py-4 border-t border-border">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Truck className="w-4 h-4" />
                        Shipping
                      </span>
                      <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost}`}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-sage">
                        <span>Discount</span>
                        <span>-₹{discount.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center py-4 border-t border-border">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-sage">
                      ₹{finalTotal.toLocaleString()}
                    </span>
                  </div>

                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="w-full mt-4"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </Button>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    🌱 Your purchase funds environmental education programs
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
