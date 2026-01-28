import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tea.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-tea-medium/20 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-tea-gold/10 blur-3xl"
        />
      </div>

      <div className="container relative mx-auto flex min-h-screen items-center px-4 pt-20">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2"
            >
              <Leaf size={16} className="text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                100% Enak & Segar
              </span>
            </motion.div>

            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Segarnya Teh{" "}
                <span className="text-gradient">Di Setiap</span> Tegukan!!
            </h1>

            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
Teh Kukuk menghadirkan berbagai pilihan minuman seperti Milk Tea, Green Tea, dan Thai Tea dengan rasa segar dan manis yang pas. Dibuat dari bahan pilihan untuk menemani waktu santaimu kapan saja.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/about">
                  Tentang Kami
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/products">Lihat Produk</Link>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "3", label: "Macam Teh" },
                { value: "50+", label: "Pelanggan Senang" },
                { value: "2+", label: "Bulan Pengalaman" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Floating decoration */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 h-24 w-24 rounded-3xl bg-tea-gold/30 backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 bottom-1/4 h-32 w-32 rounded-3xl bg-primary/20 backdrop-blur-sm"
              />

              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[3rem] shadow-hover"
              >
                <img
                  src={heroImage}
                  alt="Premium Tea Collection"
                  className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tea-dark/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};
