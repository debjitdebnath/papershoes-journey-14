import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 'why-we-run',
    title: 'Why We Run: The Story Behind PaperShoes',
    excerpt: 'Three runners, 80 marathons, and a mission to transform how India thinks about plastic waste. This is the story of how PaperShoes began.',
    author: 'PaperShoes Team',
    date: 'January 15, 2025',
    category: 'Our Story',
    image: null,
  },
  {
    id: 'plastic-crisis-india',
    title: 'Understanding India\'s Plastic Crisis',
    excerpt: 'India generates over 3.5 million tonnes of plastic waste annually. Here\'s what the numbers mean and why systemic change is essential.',
    author: 'PaperShoes Team',
    date: 'January 10, 2025',
    category: 'Education',
    image: null,
  },
  {
    id: 'school-partnerships',
    title: 'How School Partnerships Create Lasting Change',
    excerpt: 'Our habit-tracker program has reached thousands of students. Discover how we\'re building the next generation of environmental stewards.',
    author: 'PaperShoes Team',
    date: 'January 5, 2025',
    category: 'Impact',
    image: null,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-beige">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
              Stories & Updates
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              The PaperShoes Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Stories from the road, insights on India's plastic crisis, and updates on our journey to create lasting environmental change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-sage-light flex items-center justify-center">
                  <span className="text-sage-dark text-sm font-medium">{post.category}</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-sage transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="text-sage font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-sage-light/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-2">More Stories Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're documenting our 80-marathon journey across India. Subscribe to stay updated with our latest stories and impact reports.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">
                  Support Our Journey
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
