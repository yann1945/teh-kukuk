import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Users, Award, Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import teaPlantation from "@/assets/tea-plantation.jpg";
import heroTea from "@/assets/hero-tea.jpg";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We prioritize eco-friendly practices in every step of our production process.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Supporting local farmers and their families through fair trade practices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Unwavering commitment to delivering the highest quality tea products.",
  },
  {
    icon: Globe,
    title: "Heritage",
    description: "Preserving traditional tea-making methods passed down through generations.",
  },
];

const timeline = [
  { year: "1999", event: "Founded in the highlands with a vision for premium tea" },
  { year: "2005", event: "Expanded to serve international markets" },
  { year: "2012", event: "Achieved organic certification for all products" },
  { year: "2018", event: "Launched sustainable packaging initiative" },
  { year: "2024", event: "Reached 10,000+ happy customers worldwide" },
];

const About = () => {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const storyRef = useRef(null);
  const timelineRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] overflow-hidden gradient-hero pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              About <span className="text-gradient">Teh Kukuk</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Crafting moments of tranquility since 1999. We believe every cup of tea
              should be an experience worth savoring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={teaPlantation}
                alt="Tea Plantation"
                className="rounded-3xl w-full h-[400px] object-cover shadow-card"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Our Journey
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Teh Kukuk was born from a simple passion: to share the finest teas with
                the world. Our founder, inspired by the lush tea gardens of the highlands,
                set out to create a brand that would honor traditional tea-making while
                embracing modern quality standards.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Today, we work directly with farmers who share our commitment to
                excellence. Every leaf is carefully selected, processed with care, and
                delivered with love. Our journey continues as we explore new ways to
                bring you the perfect cup of tea.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl bg-card p-8 shadow-card text-center hover:shadow-hover transition-shadow"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Our <span className="text-gradient">Milestones</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-sm font-semibold text-primary">{item.year}</div>
                  <p className="mt-1 text-foreground">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
