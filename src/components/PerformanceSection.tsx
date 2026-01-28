import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { label: "Kesegaran", value: 98, color: "bg-primary" },
  { label: "Rasa Kualitas", value: 95, color: "bg-tea-gold" },
  { label: "Aroma", value: 92, color: "bg-tea-medium" },
  { label: "Kemurnian", value: 99, color: "bg-primary" },
];

const ProgressBar = ({
  label,
  value,
  color,
  delay,
  isInView,
}: {
  label: string;
  value: number;
  color: string;
  delay: number;
  isInView: boolean;
}) => {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-sm text-muted-foreground">{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
};

export const PerformanceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 gradient-hero"
      id="performance"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Jaminan Kualitas
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Kualitas <span className="text-gradient">Luar Biasa</span> Di Setiap Cup
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
Teh Kukuk hadir dengan komitmen untuk memberikan minuman yang berkualitas dan menyegarkan. Kami memilih bahan yang baik dan memastikan proses pembuatan dilakukan dengan rapi serta higienis. Setiap minuman diracik dengan perhatian agar rasa tetap seimbang dan nyaman dinikmati. 

            </p>
            <p className="mt-4 text-muted-foreground">
Kami percaya bahwa kualitas yang baik dapat memberikan pengalaman minum teh yang menyenangkan. Dengan semangat tersebut, Teh Kukuk terus berusaha menjadi teman minum yang cocok untuk berbagai aktivitas sehari-hari.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { icon: "🍃", text: "Segar & Nikmat" },
                { icon: "🍵", text: "Rasa Seimbang" },
                { icon: "😊", text: "Cocok Untuk Semua" },
                { icon: "⭐", text: "Kualitas Terjaga" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 rounded-2xl bg-card/50 p-4 shadow-soft backdrop-blur-sm"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center rounded-3xl bg-card p-8 shadow-card lg:p-12"
          >
            <h3 className="mb-8 font-serif text-2xl font-semibold text-foreground">
              Performance Metrics
            </h3>
            {metrics.map((metric, index) => (
              <ProgressBar
                key={metric.label}
                {...metric}
                delay={0.4 + index * 0.15}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
