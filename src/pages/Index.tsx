import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InfoSection } from "@/components/InfoSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <PerformanceSection />
        <TestimonialsSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
