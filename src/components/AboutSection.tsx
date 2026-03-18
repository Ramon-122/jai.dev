import { motion } from "framer-motion";
import { MapPin, Globe, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const infoCards = [
    {
      icon: MapPin,
      title: "Location",
      value: "Kolkata, India",
    },
    {
      icon: Globe,
      title: "Languages",
      value: "English, Hindi",
    },
    {
      icon: Heart,
      title: "Interests",
      value: "Blockchain, Cloud, Open Source",
    },
  ];

  return (
    <section id="about" className="relative bg-gradient-dark py-20">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto max-w-3xl">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Who I Am
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              I'm a passionate <span className="text-primary">Software Engineer</span> with 
              2+ years of experience in designing and developing scalable web applications 
              and <span className="text-secondary">blockchain solutions</span>.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              My expertise spans across enterprise blockchain platforms including 
              <span className="text-primary"> Hyperledger Fabric</span>, 
              <span className="text-secondary"> Ethereum</span>, 
              <span className="text-primary"> Corda</span>, and 
              <span className="text-secondary"> Quorum</span>. I specialize in building 
              microservices architectures using Spring Boot and creating modern frontend 
              experiences with Angular and React.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Currently working at <span className="text-primary">Cognizant</span>, 
              I'm focused on delivering innovative solutions for digital trust platforms 
              and enterprise-grade applications.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card-hover flex items-center gap-4 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{card.title}</p>
                  <p className="font-medium text-foreground">{card.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="glass-card grid grid-cols-3 gap-4 p-6"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "4+", label: "Projects Delivered" },
                { value: "5+", label: "Certifications" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="gradient-text text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
