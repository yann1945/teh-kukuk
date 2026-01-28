import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Instagram, MessageCircle } from "lucide-react";

// TikTok icon component since it's not in lucide-react
const TikTokIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Documentation", href: "/documentation" },
  ],
  support: [
    { name: "Contact Us", href: "https://wa.me/6285117506904" },
    { name: "FAQ", href: "/documentation" },
  ],
};

const socialLinks = [
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/6285117506904" },
  { name: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@tehkukuk_" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/tehkukuk_" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Wave Divider */}
      <div className="bg-background">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50C240 0 480 100 720 50C960 0 1200 100 1440 50V100H0V50Z"
            className="fill-foreground"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Leaf size={22} />
              </div>
              <span className="font-serif text-xl font-bold">Teh Kukuk</span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
Teh Kukuk menghadirkan berbagai pilihan minuman seperti Milk Tea, Green Tea, dan Thai Tea dengan rasa segar dan manis yang pas. Dibuat dari bahan pilihan untuk menemani waktu santaimu kapan saja.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/10 transition-colors hover:bg-background/20"
                  aria-label={social.name}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-semibold">Tetap Update</h4>
            <p className="mb-4 text-sm text-background/70">
              Berlangganan newsletter kami untuk mendapatkan penawaran spesial dan tips seputar teh.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl bg-background/10 px-4 py-3 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ikuti
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-sm text-background/50">
            © 2026 Teh Kukuk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
