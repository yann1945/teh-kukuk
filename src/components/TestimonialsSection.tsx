import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Tea Enthusiast",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
    review:
      "The quality of Teh Kukuk is simply unmatched. Every morning feels like a spa experience with their jasmine green tea. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Wellness Coach",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david&backgroundColor=c0aede",
    review:
      "I've tried countless tea brands, but Teh Kukuk stands out. Their matcha is ceremonial grade and absolutely divine. My clients love it!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Food Blogger",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma&backgroundColor=ffd5dc",
    review:
      "The packaging is beautiful, the taste is exceptional, and the aroma fills my entire kitchen. This is what premium tea should be.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Park",
    role: "Restaurant Owner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael&backgroundColor=d1d4f9",
    review:
      "We serve Teh Kukuk exclusively at our restaurant. Our customers always compliment the exceptional quality of our tea selection.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Yoga Instructor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa&backgroundColor=ffdfbf",
    review:
      "The chamomile tea helps me unwind after long sessions. It's become an essential part of my evening routine. Pure bliss!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Join thousands of tea lovers who have made Teh Kukuk their daily ritual
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="hide-scrollbar flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-[340px] max-w-[340px] flex-shrink-0 sm:min-w-[380px] sm:max-w-[380px]"
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

          {/* Navigation */}
          <div className="mt-8 flex justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
