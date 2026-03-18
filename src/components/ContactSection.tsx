import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "jay.jk655@gmail.com",
    href: "mailto:jay.jk655@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "jai-ram-00940b21b",
    href: "https://linkedin.com/in/jai-ram-00940b21b",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, India",
    href: "https://www.google.com/maps/place/Action+Area+III,+Chotto+Chandpur,+Newtown,+New+Town,+West+Bengal/@22.5664944,88.4882678,6125m/data=!3m2!1e3!4b1!4m15!1m8!3m7!1s0x39f882db4908f667:0x43e330e68f6c2cbc!2sKolkata,+West+Bengal!3b1!8m2!3d22.5743545!4d88.3628734!16zL20vMGN2dzk!3m5!1s0x3a020b1f9ea4d5af:0x85c142ee1411ba0a!8m2!3d22.5683058!4d88.5105955!16s%2Fg%2F1v2kvw24?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D",
    color: "from-purple-500 to-pink-500",
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className="relative bg-gradient-dark py-20">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {contactLinks.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                {contact.href ? (
                  <motion.a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -5 }}
                    className="glass-card-hover group flex items-center gap-4 p-6"
                  >
                    <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${contact.color} transition-transform group-hover:scale-110`}>
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium text-foreground transition-colors group-hover:text-primary">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ) : (
                  <div className="glass-card flex items-center gap-4 p-6">
                    <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${contact.color}`}>
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium text-foreground">{contact.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="mb-6 text-muted-foreground">
              Open to new opportunities and exciting projects
            </p>
            <motion.a
              href="mailto:jay.jk655@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3 font-medium text-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              Say Hello
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-border/50 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2024 Jai Ram. Crafted with passion and code.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
