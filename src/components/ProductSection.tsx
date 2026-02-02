import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";

const products = [
  {
    id: 1,
    name: "Ice Green Tea",
    description: "Minuman green tea dingin dengan rasa segar dan ringan.",
    price: "7.000",
    image: product1,
  },
  {
    id: 2,
    name: "Ice Thai Tea",
    description: "Thai tea dingin dengan rasa manis dan aroma khas.",
    price: "7.000",
    image: product2,
  },
  {
    id: 3,
    name: "Ice Milk Tea",
    description: "Perpaduan teh dan susu dengan rasa lembut dan nikmat.",
    price: "7.000",
    image: product3,
  },
  {
    id: 4,
    name: "Teh Bubuk Green",
    description: "Green tea hangat yang nyaman diminum kapan saja.",
    price: "50.000",
    image: product4,
  },
  {
    id: 5,
    name: "Teh Bubuk Thai",
    description: "Thai tea hangat dengan rasa manis yang pas.",
    price: "50.000",
    image: product5,
  }
];

export const ProductSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" id="products">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Produk Dari <span className="text-gradient">Kami</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Teh pilihan yang diracik dari bahan berkualitas untuk rasa yang segar.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
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
        </motion.div>

        {/* Product Carousel */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-6 overflow-x-auto pb-4 scroll-smooth"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group min-w-[280px] max-w-[280px] flex-shrink-0 sm:min-w-[300px] sm:max-w-[300px]"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-3xl gradient-card shadow-card transition-shadow duration-300 group-hover:shadow-hover"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-primary">
                      Rp. {product.price}
                    </span>
                    <Button size="sm" className="gap-2">
                      <ShoppingBag size={16} />
                      Checkout
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
