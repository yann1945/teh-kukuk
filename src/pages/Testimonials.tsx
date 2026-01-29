import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
  {
    id: 6,
    name: "IShowSpeed",
    role: "Streamer",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jameson",
    review:
      "Woof Woof!! This the so CRAZYY!!!... i like indonesian tea, w chat 👑",
    rating: 4.8,
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
              Pesan <span className="text-gradient">Customer</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Dengarkan cerita dari pelanggan yang sudah mencoba Teh Kukuk
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
