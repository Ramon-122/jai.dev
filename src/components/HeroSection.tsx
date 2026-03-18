import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useScrollAnimation";
import ParticleBackground from "./ParticleBackground";

const roles = ["Software Engineer", "Blockchain Developer", "Full Stack Developer"];

const HeroSection = () => {
  const typedText = useTypewriter(roles, 100, 50, 2000);

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jai-ram-00940b21b",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:jay.jk655@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+919065859491",
      label: "Phone",
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 text-lg text-muted-foreground"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="gradient-text">Jai Ram</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 flex h-10 items-center justify-center"
          >
            <span className="text-xl font-medium text-primary sm:text-2xl md:text-3xl">
              {typedText}
            </span>
            <span className="ml-1 inline-block h-8 w-0.5 animate-typing-cursor bg-primary" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Crafting decentralized solutions and building scalable web applications
            with expertise in blockchain technologies, microservices, and cloud-native architectures.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card-hover flex h-12 w-12 items-center justify-center rounded-full"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
