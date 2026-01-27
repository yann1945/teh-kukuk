import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Book, Coffee, Leaf, Timer, ThermometerSun, HelpCircle, ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const guides = [
  {
    icon: ThermometerSun,
    title: "Water Temperature",
    description: "Learn the ideal water temperatures for different tea types to achieve the perfect brew.",
    content: `
      Different teas require different water temperatures:
      
      • Green Tea: 70-80°C (158-176°F) - Too hot water can make green tea bitter
      • White Tea: 75-85°C (167-185°F) - Delicate leaves need gentle heat
      • Oolong Tea: 85-95°C (185-203°F) - Semi-oxidized teas are more forgiving
      • Black Tea: 95-100°C (203-212°F) - Full oxidation can handle boiling water
      • Herbal Tea: 100°C (212°F) - Most herbs benefit from boiling water
      • Matcha: 70-80°C (158-176°F) - Whisking with cooler water prevents bitterness
    `,
  },
  {
    icon: Timer,
    title: "Steeping Time",
    description: "Master the art of timing to extract the best flavors from your tea leaves.",
    content: `
      Proper steeping times for optimal flavor:
      
      • Green Tea: 1-3 minutes - Start short, adjust to taste
      • White Tea: 2-5 minutes - Can steep longer without bitterness
      • Oolong Tea: 3-5 minutes - Multiple infusions recommended
      • Black Tea: 3-5 minutes - Longer steeping for stronger flavor
      • Herbal Tea: 5-7 minutes - Herbs release flavor slowly
      • Matcha: Whisk for 15-30 seconds - No steeping needed
      
      Pro tip: You can re-steep quality loose leaf teas 2-3 times!
    `,
  },
  {
    icon: Leaf,
    title: "Tea Leaf Ratios",
    description: "Get the perfect strength with our recommended tea-to-water ratios.",
    content: `
      Recommended ratios for the perfect cup:
      
      • Loose Leaf Tea: 1 teaspoon (2-3g) per 200ml water
      • Matcha: 1-2g (½-1 tsp) per 60-80ml water
      • Strong Brew: Add 50% more tea leaves
      • Light Brew: Use slightly less tea or shorter steep time
      
      For cold brew: Double the amount of tea and steep 6-12 hours in the refrigerator.
    `,
  },
  {
    icon: Coffee,
    title: "Brewing Methods",
    description: "Explore different brewing techniques from traditional to modern approaches.",
    content: `
      Popular brewing methods:
      
      1. Western Style
         - Large teapot or mug
         - Single steep, longer duration
         - Great for casual drinking
      
      2. Gongfu Style
         - Small teapot or gaiwan
         - Multiple short steeps
         - Intensifies flavor exploration
      
      3. Cold Brew
         - Room temperature or cold water
         - 6-12 hours steeping
         - Smooth, less bitter taste
      
      4. Matcha Ceremony
         - Sift matcha into bowl
         - Add water, whisk vigorously
         - Creates frothy, smooth texture
    `,
  },
];

const faqs = [
  {
    question: "How should I store my tea?",
    answer: "Store tea in an airtight container away from light, heat, and moisture. A cool, dark pantry is ideal. Avoid storing near strong-smelling foods as tea can absorb odors.",
  },
  {
    question: "How long does tea stay fresh?",
    answer: "Properly stored loose leaf tea can stay fresh for 6-12 months. Green and white teas are best consumed within 6 months, while black and oolong teas can last up to a year. Herbal teas can last 12-24 months.",
  },
  {
    question: "Can I drink tea on an empty stomach?",
    answer: "It's generally recommended to drink tea after meals, especially for green tea which can be acidic. Herbal teas like chamomile or ginger are gentler on an empty stomach.",
  },
  {
    question: "What's the difference between loose leaf and tea bags?",
    answer: "Loose leaf tea typically offers superior quality, fuller flavor, and can be re-steeped. Tea bags are convenient but often contain smaller, broken leaves (fannings or dust) that may have less flavor complexity.",
  },
  {
    question: "How much caffeine is in tea?",
    answer: "Caffeine content varies: Black tea has 40-70mg per cup, green tea has 25-45mg, white tea has 15-30mg, and herbal teas are typically caffeine-free. Matcha contains 35-70mg per serving.",
  },
];

const Documentation = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<number | null>(null);
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
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Book size={32} />
              </div>
            </div>
            <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Tea <span className="text-gradient">Documentation</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about brewing the perfect cup of tea
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brewing Guides */}
      <section ref={sectionRef} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Brewing <span className="text-gradient">Guides</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Master the fundamentals of tea preparation
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full rounded-3xl bg-card p-8 shadow-card cursor-pointer"
                  onClick={() => setSelectedGuide(selectedGuide === index ? null : index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <guide.icon className="text-primary" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {guide.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {guide.description}
                      </p>
                    </div>
                    <ChevronDown
                      className={`text-muted-foreground transition-transform ${
                        selectedGuide === index ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                  </div>

                  {selectedGuide === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-border"
                    >
                      <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-sans">
                        {guide.content}
                      </pre>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <HelpCircle className="text-primary" size={24} />
              </div>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl bg-card overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`text-muted-foreground transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-6 pb-6"
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;
