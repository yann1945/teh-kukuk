import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Tea Enthusiast",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
    review:
      "The quality of Teh Kukuk is simply unmatched. Every morning feels like a spa experience with their jasmine green tea. The aroma alone is worth the price. I've tried many brands over the years, but nothing compares to the freshness and depth of flavor I get from Teh Kukuk.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Wellness Coach",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david&backgroundColor=c0aede",
    review:
      "I've tried countless tea brands, but Teh Kukuk stands out. Their matcha is ceremonial grade and absolutely divine. My clients love it! I recommend it to everyone who wants to start their wellness journey with quality products.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Food Blogger",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma&backgroundColor=ffd5dc",
    review:
      "The packaging is beautiful, the taste is exceptional, and the aroma fills my entire kitchen. This is what premium tea should be. I've featured Teh Kukuk on my blog multiple times because my readers always ask about it.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Park",
    role: "Restaurant Owner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael&backgroundColor=d1d4f9",
    review:
      "We serve Teh Kukuk exclusively at our restaurant. Our customers always compliment the exceptional quality of our tea selection. It's become a signature part of our dining experience and sets us apart from competitors.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Yoga Instructor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa&backgroundColor=ffdfbf",
    review:
      "The chamomile tea helps me unwind after long sessions. It's become an essential part of my evening routine. I also serve it during my meditation classes and my students absolutely love the calming effect.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Tea Collector",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james&backgroundColor=c0e3c4",
    review:
      "As someone who has collected teas from around the world, I can say with confidence that Teh Kukuk offers some of the finest loose-leaf teas I've ever tasted. Their oolong selection is particularly impressive.",
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Customer <span className="text-gradient">Stories</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our community of tea lovers who have made Teh Kukuk part of their daily ritual
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "10,000+", label: "Happy Customers" },
              { value: "4.9", label: "Average Rating" },
              { value: "50+", label: "Countries" },
              { value: "25+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-serif text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={sectionRef} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full rounded-3xl bg-card p-8 shadow-card transition-shadow duration-300 hover:shadow-hover"
                >
                  {/* Quote Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Quote className="text-primary" size={24} />
                  </div>

                  {/* Review */}
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  {/* Rating */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-tea-gold text-tea-gold"
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full bg-secondary"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
