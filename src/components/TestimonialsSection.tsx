import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Bu Yuyun",
    role: "Guru Pemasaran",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
    review:
      "Tehnya sangat enak, dan yang paling saya sukai ialah Ice Greentea. Aku Menyukainya!",
    rating: 4.3,
  },
  {
    id: 2,
    name: "Ambatukam",
    role: "Influencer (Dreamybull)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david&backgroundColor=c0aede",
    review:
      "I am from amerika tinggal di jakarta, saya sangat merekomendasi Teh Kukuk.",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Om Baron",
    role: "Customer Setia",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jude",
      review:
      "Rasa tehnya sangat manis seperti saya, apalagi Thaitea. Sukakk dehh >v<",
    rating: 5,
  },
  {
    id: 4,
    name: "Maharaja Paduka Fathian Nan Bijaksana",
    role: "Ketua Teh Kukuk",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael&backgroundColor=d1d4f9",
    review:
      "Kita menyajikan teh dengan sepenuh hati dan kita menjamin kualitas teh kami untuk menyajikan kepada customer kita tersayang (uangnya).",
    rating: 5,
  },
  {
    id: 5,
    name: "Lil Neiga",
    role: "Rapper UK",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa&backgroundColor=ffdfbf",
    review:
      "Alright wassup!, gweh sanghat recomended this tea okey? Yoo i like a milktea what do you like?",
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
            Testimoni
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Apa Yang Dikatakan Oleh <span className="text-gradient">Pelanggan</span> Kepada Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Ribuan pecinta teh telah merasakan kenikmatan Teh Kukuk dalam keseharian mereka.
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
