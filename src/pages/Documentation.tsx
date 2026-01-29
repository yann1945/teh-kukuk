import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Book, Coffee, Leaf, Timer, ThermometerSun, HelpCircle, ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const guides = [
  {
    icon: ThermometerSun,
    title: "Suhu Air",
    description: "Pelajari suhu air yang ideal untuk setiap jenis teh agar menghasilkan rasa terbaik.",
    content: `
Setiap jenis teh membutuhkan suhu air yang berbeda:

• Greentea: 70–80°C — Air terlalu panas bisa membuat rasa pahit
• Thaitea: 75–85°C — Daun lembut perlu panas ringan
• Milktea: 67-75°C — Rasa Menjadi Lebih Kuat

    `,
  },
  {
    icon: Timer,
    title: "Waktu Penyeduhan",
    description: "Kuasai waktu penyeduhan untuk mendapatkan rasa teh terbaik.",
    content: `
Waktu seduh yang disarankan:

• Greentea: 1–3 menit
• Thaitea: 2–4 menit
• Milktea: 2-3 menit

Tips: Teh daun berkualitas bisa diseduh ulang hingga 2–3 kali.

    `,
  },
  {
    icon: Leaf,
    title: "Takaran Daun Teh",
    description: "Gunakan perbandingan teh dan air yang tepat untuk rasa seimbang.",
    content: `
Takaran ideal:

• Teh daun: 1 sendok teh (2–3g) per 200ml air
• Matcha: 1–2g per 60–80ml air
• Rasa kuat: Tambahkan lebih banyak daun teh
• Rasa ringan: Kurangi daun atau waktu seduh

Cold brew:
Gunakan dua kali lipat teh dan simpan di kulkas 6–12 jam.
    `,
  },
  {
    icon: Coffee,
      title: "Metode Penyeduhan",
    description: "Jelajahi berbagai teknik penyeduhan, dari tradisional hingga modern.",
    content: `
Metode penyeduhan populer:

1. Gaya Barat
   - Teko besar atau gelas
   - Sekali seduh
   - Cocok untuk minum santai

2. Gaya Gongfu
   - Teko kecil
   - Beberapa kali seduh
   - Rasa lebih mendalam

3. Cold Brew
   - Air dingin
   - 6–12 jam
   - Lebih halus dan tidak pahit

4. Matcha
   - Ayak bubuk matcha
   - Tambahkan air
   - Kocok hingga berbusa
    `,
  },
];

const faqs = [
  {
    question: "Apa saja varian minuman yang dijual Teh Kukuk?",
    answer:
      "Teh Kukuk menyediakan tiga varian utama, yaitu Milk Tea, Green Tea, dan Thai Tea. Semua dibuat dengan rasa yang segar dan cocok diminum kapan saja.",
  },
  {
    question: "Apakah minuman Teh Kukuk dibuat setiap hari?",
    answer:
      "Ya, minuman Teh Kukuk dibuat setiap hari agar tetap segar dan memiliki rasa yang enak saat diminum.",
  },
  {
    question: "Apakah Teh Kukuk menggunakan bahan berkualitas?",
    answer:
      "Kami menggunakan bahan pilihan yang mudah didapat namun tetap memperhatikan rasa dan kebersihan dalam proses pembuatannya.",
  },
  {
    question: "Apakah minuman Teh Kukuk aman dikonsumsi?",
    answer:
      "Ya, Teh Kukuk dibuat dengan bahan yang aman dikonsumsi dan proses pembuatan yang bersih sesuai kemampuan usaha sekolah.",
  },
  {
    question: "Apakah Teh Kukuk bisa dipesan untuk acara?",
    answer:
      "Untuk saat ini, Teh Kukuk melayani pemesanan dalam jumlah kecil sesuai kebutuhan tugas sekolah.",
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
              Tea <span className="text-gradient">Dokumentasi</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Semua yang perlu kamu tahu tentang minuman teh favoritmu
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
              Panduan <span className="text-gradient">Penyeduhan</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pelajari dasar pembuatan minuman teh
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
              Pertanyaan Yang sering <span className="text-gradient">Ditanyakan</span>
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
