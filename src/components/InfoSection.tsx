import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Mountain, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teaPlantation from "@/assets/tea-plantation.jpg";

const features = [
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Our teas are grown using eco-friendly practices that protect the environment.",
  },
  {
    icon: Mountain,
    title: "Highland Gardens",
    description: "Sourced from pristine mountain regions with perfect growing conditions.",
  },
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description: "Every batch is carefully processed by skilled artisans with decades of experience.",
  },
];

export const InfoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 gradient-hero" id="info">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                src={teaPlantation}
                alt="Tea Plantation"
                className="h-[400px] w-full object-cover lg:h-[550px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 rounded-2xl bg-card p-6 shadow-hover sm:right-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Leaf size={28} />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-foreground">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Teh Murni
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Cerita Kami
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Dari Pegunungan Sampai Ke{" "}
              <span className="text-gradient">Gelas Mu</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
Es teh adalah salah satu minuman yang sangat populer di Indonesia karena rasanya yang segar, mudah diterima oleh semua kalangan, serta harganya yang terjangkau. Minuman ini dapat dinikmati kapan saja, baik saat cuaca panas maupun sebagai pendamping berbagai jenis makanan
            </p>
            <p className="mt-4 text-muted-foreground">
Melihat tingginya minat masyarakat terhadap minuman teh, Teh Kukuk hadir untuk menghadirkan berbagai varian seperti Milk Tea, Green Tea, dan Thai Tea dengan rasa yang nikmat dan kualitas yang terjaga. Kami berkomitmen untuk menyajikan minuman yang segar, bersih, dan cocok dinikmati oleh semua usia.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 rounded-2xl bg-card/50 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-8 w-fit">
              <Link to="/about">Melihat Tentang Kami</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
